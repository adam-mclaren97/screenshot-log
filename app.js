/* ============================================================
   THE WHOLE FRAME — the machinery. You should not need to edit
   this file. It reads entries.js and draws the site.
   ============================================================ */

(function () {
  "use strict";

  var MONTHS = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

  var view = document.getElementById("view");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function prettyDate(iso) {
    if (!iso) return "";
    var p = String(iso).split("-");
    if (p.length !== 3) return iso;
    return MONTHS[parseInt(p[1], 10) - 1] + " " + parseInt(p[2], 10) + ", " + p[0];
  }

  function isGap(c) { return c.kind === "gap"; }

  function demandLabel(key) {
    for (var i = 0; i < DEMANDS.length; i++) {
      if (DEMANDS[i].key === key) return DEMANDS[i].label;
    }
    return key || "";
  }

  // newest capture first
  function sorted() {
    return CAPTURES.slice().sort(function (a, b) {
      return String(b.id).localeCompare(String(a.id));
    });
  }

  function countFor(key) {
    var n = 0;
    for (var i = 0; i < CAPTURES.length; i++) {
      if (CAPTURES[i].demand === key) n++;
    }
    return n;
  }

  // a tag with a title in TAG_NOTES shows the title, not the raw slug
  function tagDisplay(t) {
    var s = tagSet(t);
    return (s && s.title) ? s.title : t;
  }

  function tagList(tags, asLinks) {
    if (!tags || !tags.length) return "";
    return '<ul class="tags">' + tags.map(function (t) {
      var shown = esc(tagDisplay(t));
      var named = tagSet(t) && tagSet(t).title ? " is-named" : "";
      if (!asLinks) return '<li class="tag' + named + '">' + shown + "</li>";
      return '<li class="tag' + named + '"><a href="#tag-' +
             encodeURIComponent(t) + '">' + shown + "</a></li>";
    }).join("") + "</ul>";
  }

  function hasTag(c, tag) {
    if (!tag) return true;
    if (!c.tags) return false;
    for (var i = 0; i < c.tags.length; i++) {
      if (c.tags[i] === tag) return true;
    }
    return false;
  }

  // read the tag out of the address bar, so the menus never lose it
  function currentTag() {
    var found = "";
    location.hash.replace(/^#/, "").split("+").forEach(function (part) {
      var t = part.match(/^tag-(.+)$/);
      if (t) found = decodeURIComponent(t[1]);
    });
    return found;
  }

  // a tag may have a title and a note in TAG_NOTES, or nothing at all
  function tagSet(tag) {
    if (!tag) return null;
    if (typeof TAG_NOTES === "undefined" || !TAG_NOTES) return null;
    var v = TAG_NOTES[tag];
    if (!v) return null;
    if (typeof v === "string") return { title: "", note: v };
    return { title: v.title || "", note: v.note || "" };
  }

  function phone(c, showPins) {
    var pins = "";
    if (showPins && c.pins && c.pins.length) {
      pins = c.pins.map(function (p, i) {
        return '<span class="pin" data-pin="' + (i + 1) + '" style="left:' +
               p.x + '%; top:' + p.y + '%">' + (i + 1) + "</span>";
      }).join("");
    }
    return '<div class="phone"><img loading="lazy" src="' + esc(c.image) +
           '" alt="' + esc(c.alt || c.title) + '">' + pins + "</div>";
  }

  /* ---------- the filter menus ---------- */

  function realList() {
    return CAPTURES.filter(function (c) { return !isGap(c); });
  }

  function weeksAvailable() {
    var seen = {};
    realList().forEach(function (c) {
      if (c.week != null) seen[c.week] = true;
    });
    return Object.keys(seen).map(Number).sort(function (a, b) { return a - b; });
  }

  // captures matching the given demand and week ("" means no filter)
  function matching(demand, week) {
    return CAPTURES.filter(function (c) {
      if (isGap(c)) return !demand && !week;
      if (demand && c.demand !== demand) return false;
      if (week && String(c.week) !== String(week)) return false;
      return true;
    });
  }

  function buildFilters(demand, week, tag) {
    var dSel = document.getElementById("filterDemand");
    var wSel = document.getElementById("filterWeek");
    if (!dSel || !wSel) return;

    // if a tag is showing, every count is counted inside that tag
    var pool = realList().filter(function (c) { return hasTag(c, tag); });

    // demand counts respect the chosen week, and vice versa
    var inWeek = pool.filter(function (c) {
      return !week || String(c.week) === String(week);
    });
    var inDemand = pool.filter(function (c) {
      return !demand || c.demand === demand;
    });

    var dOpts = ['<option value="">All demands (' + inWeek.length + ')</option>'];
    DEMANDS.forEach(function (d) {
      var n = inWeek.filter(function (c) { return c.demand === d.key; }).length;
      dOpts.push('<option value="' + d.key + '"' +
                 (d.key === demand ? " selected" : "") + ">" +
                 esc(d.label) + " (" + n + ")</option>");
    });
    dSel.innerHTML = dOpts.join("");

    var wOpts = ['<option value="">All weeks (' + inDemand.length + ')</option>'];
    weeksAvailable().forEach(function (w) {
      var n = inDemand.filter(function (c) { return String(c.week) === String(w); }).length;
      wOpts.push('<option value="' + w + '"' +
                 (String(w) === String(week) ? " selected" : "") +
                 ">Week " + w + " (" + n + ")</option>");
    });
    wSel.innerHTML = wOpts.join("");

    function wire(sel) {
      if (sel.dataset.wired) return;
      sel.addEventListener("change", function () {
        var d = document.getElementById("filterDemand").value;
        var w = document.getElementById("filterWeek").value;
        var t = currentTag();
        var bits = [];
        if (d) bits.push("demand-" + d);
        if (w) bits.push("week-" + w);
        if (t) bits.push("tag-" + encodeURIComponent(t));
        location.hash = bits.join("+");
      });
      sel.dataset.wired = "1";
    }
    wire(dSel);
    wire(wSel);
  }

  /* ---------- collection view ---------- */

  function gapCard(c) {
    return '<a class="card card-gap" href="#capture-' + esc(c.id) + '">' +
             '<p class="meta">' + (c.date ? esc(prettyDate(c.date)) : "") +
               " &middot; <span class=\"demand\">No capture</span></p>" +
             "<h2>" + esc(c.title || "No capture") + "</h2>" +
             (c.reason ? '<p class="preview">' + esc(c.reason) + "</p>" : "") +
             (c.record ? '<div class="gap-field"><h3>Record</h3><p>' +
                         esc(c.record) + "</p></div>" : "") +
             (c.remark ? '<div class="gap-field"><h3>Remark</h3><p>' +
                         esc(c.remark) + "</p></div>" : "") +
           "</a>";
  }

  function renderGrid(demand, week, tag) {
    var list = sorted().filter(function (c) {
      if (isGap(c)) return !demand && !week && !tag;
      if (demand && c.demand !== demand) return false;
      if (week && String(c.week) !== String(week)) return false;
      if (tag && !hasTag(c, tag)) return false;
      return true;
    });

    var cards = list.map(function (c) {
      if (isGap(c)) return gapCard(c);
      return '<a class="card" href="#capture-' + esc(c.id) + '">' +
               phone(c, false) +
               '<div class="card-body">' +
                 '<p class="meta">Capture ' + esc(c.id) +
                   (c.date ? " &middot; " + esc(prettyDate(c.date)) : "") +
                   (c.demand ? ' &middot; <span class="demand">' +
                               esc(demandLabel(c.demand)) + "</span>" : "") + "</p>" +
                 "<h2>" + esc(c.title) + "</h2>" +
                 (c.preview ? '<p class="preview">' + esc(c.preview) + "</p>" : "") +
                 tagList(c.tags) +
               "</div>" +
             "</a>";
    }).join("");

    var heading = "";
    if (demand || week || tag) {
      var note = "";
      if (demand) {
        for (var d = 0; d < DEMANDS.length; d++) {
          if (DEMANDS[d].key === demand && DEMANDS[d].note) note = DEMANDS[d].note;
        }
      }
      var set = tagSet(tag);
      if (set && set.note) note = set.note;

      var what = [];
      if (tag) {
        what.push('<strong class="tag-name">' +
                  esc(set && set.title ? set.title : tag) + "</strong>");
      }
      if (demand) what.push("<strong>" + esc(demandLabel(demand)) + "</strong>");
      if (week)   what.push("<strong>Week " + esc(week) + "</strong>");

      heading =
        '<div class="set-note">' +
          '<p class="filter-note">Showing ' + what.join(" in ") + " &mdash; " +
            list.length + " of " + realList().length +
            ' captures. <a href="#">Show all</a></p>' +
          (note ? '<p class="set-text">' + esc(note) + "</p>" : "") +
        "</div>";
    }

    view.innerHTML =
      ((demand || week || tag) ? "" : (SITE.blurb ? '<div class="intro"><p>' + esc(SITE.blurb) + "</p></div>" : "")) +
      heading +
      (list.length ? '<div class="grid">' + cards + "</div>"
                   : '<p class="empty-state">No captures in this category yet.</p>');
  }

  /* ---------- single capture view ---------- */

  function prevNext(c) {
    var list = sorted();
    var i = list.indexOf(c);
    var newer = list[i - 1];
    var older = list[i + 1];
    function label(x) { return x.title || "No capture"; }
    return '<nav class="prevnext">' +
      (older ? '<a href="#capture-' + esc(older.id) + '">&larr; ' + esc(label(older)) + "</a>"
             : '<span class="spacer">.</span>') +
      (newer ? '<a href="#capture-' + esc(newer.id) + '">' + esc(label(newer)) + " &rarr;</a>"
             : '<span class="spacer">.</span>') +
      "</nav>";
  }

  function renderGap(c) {
    var cols = "";
    if (c.record || c.remark) {
      cols = '<div class="columns">' +
        (c.record ? "<section><h3>Record</h3><p>" + esc(c.record) + "</p></section>" : "") +
        (c.remark ? "<section><h3>Remark</h3><p>" + esc(c.remark) + "</p></section>" : "") +
        "</div>";
    }
    view.innerHTML =
      '<a class="back" href="#">&larr; All captures</a>' +
      '<article class="capture capture-gap">' +
        '<div class="capture-text">' +
          '<p class="eyebrow">' + (c.date ? esc(prettyDate(c.date)) : "") + "</p>" +
          "<h1>" + esc(c.title || "No capture") + "</h1>" +
          '<p class="dek">No capture</p>' +
          (c.preview ? '<p class="gap-lede">' + esc(c.preview) + "</p>" : "") +
          cols +
          prevNext(c) +
        "</div>" +
      "</article>";
  }

  function renderDetail(c) {
    var list = sorted().filter(function (x) { return !isGap(x); });
    var i = list.indexOf(c);
    var newer = list[i - 1];
    var older = list[i + 1];

    var notes = "";
    if (c.pins && c.pins.length) {
      notes = '<ul class="notes">' + c.pins.map(function (p, n) {
        return '<li data-pin="' + (n + 1) + '">' +
                 '<span class="num">' + pad(n + 1) + "</span>" +
                 "<span>" +
                   (p.label ? '<span class="label">' + esc(p.label) + "</span>" : "") +
                   '<span class="text">' + esc(p.text) + "</span>" +
                 "</span>" +
               "</li>";
      }).join("") + "</ul>";
    }

    var cols = "";
    if (c.record || c.remark) {
      cols = '<div class="columns">' +
        (c.record ? "<section><h3>Record</h3><p>" + esc(c.record) + "</p></section>" : "") +
        (c.remark ? "<section><h3>Remark</h3><p>" + esc(c.remark) + "</p></section>" : "") +
        "</div>";
    }

    // the small factual strip under the headline
    var detailFig = "";
    if (c.detail && c.detail.image) {
      detailFig = '<figure class="detail">' +
                    '<a href="' + esc(c.detail.image) + '" target="_blank">' +
                      '<img loading="lazy" src="' + esc(c.detail.image) +
                      '" alt="' + esc(c.detail.caption || "Enlarged detail") + '">' +
                    "</a>" +
                    '<figcaption><span class="detail-label">Detail</span>' +
                      esc(c.detail.caption || "") + "</figcaption>" +
                  "</figure>";
    }

    var facts = [];
    if (c.demand) {
      facts.push('<a class="demand-link" href="#demand-' + esc(c.demand) + '">' +
                 esc(demandLabel(c.demand)) + "</a>");
    }
    if (c.followed === true)  facts.push("Account followed");
    if (c.followed === false) facts.push("Account not followed");
    if (c.cutOff)             facts.push("Item continued past the frame");

    view.innerHTML =
      '<a class="back" href="#">&larr; All captures</a>' +
      '<article class="capture">' +
        '<div class="capture-media">' +
          phone(c, true) +
          '<a class="fullsize" href="' + esc(c.image) + '" target="_blank">View full size &nearr;</a>' +
          (c.obscured ? '<p class="obscured">An identity in this capture has been ' +
                        "obscured. Nothing else in the frame was altered.</p>" : "") +
        "</div>" +
        '<div class="capture-text">' +
          '<p class="eyebrow">Capture ' + esc(c.id) +
            (c.date ? " &middot; " + esc(prettyDate(c.date)) : "") +
            (c.time ? " &middot; " + esc(c.time) : "") + "</p>" +
          "<h1>" + esc(c.title) + "</h1>" +
          (c.dek ? '<p class="dek">' + esc(c.dek) + "</p>" : "") +
          (facts.length ? '<p class="facts">' + facts.join(" &middot; ") + "</p>" : "") +
          tagList(c.tags, true) +
          notes +
          detailFig +
          cols +
          prevNext(c) +
        "</div>" +
      "</article>";

    linkPins();
  }

  // hovering a note highlights its dot, and the other way round
  function linkPins() {
    var notes = view.querySelectorAll(".notes li");
    var dots  = view.querySelectorAll(".pin");

    function set(n, on) {
      Array.prototype.forEach.call(notes, function (el) {
        if (el.getAttribute("data-pin") === n) el.classList.toggle("is-active", on);
      });
      Array.prototype.forEach.call(dots, function (el) {
        if (el.getAttribute("data-pin") === n) el.classList.toggle("is-active", on);
      });
    }

    function wire(el) {
      var n = el.getAttribute("data-pin");
      el.addEventListener("mouseenter", function () { set(n, true); });
      el.addEventListener("mouseleave", function () { set(n, false); });
    }

    Array.prototype.forEach.call(notes, wire);
    Array.prototype.forEach.call(dots, wire);
  }

  /* ---------- which view to show ---------- */

  function route() {
    document.querySelector(".wordmark").textContent = SITE.name || "";
    document.querySelector(".masthead-sub").textContent = SITE.sub || "";
    document.querySelector(".masthead-tagline").textContent = SITE.tagline || "";
    document.querySelector(".footer-left").textContent = SITE.footerLeft || "";
    document.querySelector(".footer-right").textContent = SITE.footerRight || "";
    document.title = SITE.name || "Captures";

    var hash = location.hash;
    var mCap = hash.match(/^#capture-(.+)$/);

    var demand = "", week = "", tag = "";
    hash.replace(/^#/, "").split("+").forEach(function (part) {
      var d = part.match(/^demand-(.+)$/);
      var w = part.match(/^week-(.+)$/);
      var t = part.match(/^tag-(.+)$/);
      if (d) demand = d[1];
      if (w) week = w[1];
      if (t) tag = decodeURIComponent(t[1]);
    });

    if (mCap) {
      var found = CAPTURES.filter(function (c) {
        return String(c.id) === mCap[1];
      })[0];
      if (found) {
        buildFilters("", "", "");
        if (isGap(found)) { renderGap(found); } else { renderDetail(found); }
        window.scrollTo(0, 0);
        return;
      }
    }

    buildFilters(demand, week, tag);
    renderGrid(demand, week, tag);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
