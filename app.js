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

  function realCount() {
    return CAPTURES.filter(function (c) { return !isGap(c); }).length;
  }

  function demandLabel(key) {
    for (var i = 0; i < DEMANDS.length; i++) {
      if (DEMANDS[i].key === key) return DEMANDS[i].label;
    }
    return key || "";
  }

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

  function tagList(tags) {
    if (!tags || !tags.length) return "";
    return '<ul class="tags">' + tags.map(function (t) {
      return "<li>" + esc(t) + "</li>";
    }).join("") + "</ul>";
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

  /* ---------- the filter menu ---------- */

  function buildFilter(active) {
    var sel = document.getElementById("filter");
    if (!sel) return;

    var opts = ['<option value="">All captures (' + realCount() + ')</option>'];
    DEMANDS.forEach(function (d) {
      opts.push('<option value="' + d.key + '"' +
                (d.key === active ? " selected" : "") + ">" +
                esc(d.label) + " (" + countFor(d.key) + ")</option>");
    });
    sel.innerHTML = opts.join("");

    if (!sel.dataset.wired) {
      sel.addEventListener("change", function () {
        location.hash = sel.value ? "demand-" + sel.value : "";
      });
      sel.dataset.wired = "1";
    }
  }

  /* ---------- collection view ---------- */

  function gapCard(c) {
    return '<div class="card card-gap">' +
             '<p class="meta">' + (c.date ? esc(prettyDate(c.date)) : "") + "</p>" +
             "<h2>" + esc(c.title || "No capture") + "</h2>" +
             (c.reason ? '<p class="preview">' + esc(c.reason) + "</p>" : "") +
           "</div>";
  }

  function renderGrid(demand) {
    var list = sorted().filter(function (c) {
      return !demand || c.demand === demand;
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
    if (demand) {
      var note = "";
      for (var d = 0; d < DEMANDS.length; d++) {
        if (DEMANDS[d].key === demand && DEMANDS[d].note) note = DEMANDS[d].note;
      }
      heading =
        '<div class="set-note">' +
          '<p class="filter-note">Showing <strong>' +
            esc(demandLabel(demand)) + "</strong> &mdash; " + list.length +
            " of " + realCount() +
            ' captures. <a href="#">Show all</a></p>' +
          (note ? '<p class="set-text">' + esc(note) + "</p>" : "") +
        "</div>";
    }

    view.innerHTML =
      (demand ? "" : (SITE.blurb ? '<div class="intro"><p>' + esc(SITE.blurb) + "</p></div>" : "")) +
      heading +
      (list.length ? '<div class="grid">' + cards + "</div>"
                   : '<p class="empty-state">No captures in this category yet.</p>');
  }

  /* ---------- single capture view ---------- */

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
          tagList(c.tags) +
          notes +
       detailFig +
          cols +
          '<nav class="prevnext">' +
            (older ? '<a href="#capture-' + esc(older.id) + '">&larr; ' + esc(older.title) + "</a>"
                   : '<span class="spacer">.</span>') +
            (newer ? '<a href="#capture-' + esc(newer.id) + '">' + esc(newer.title) + " &rarr;</a>"
                   : '<span class="spacer">.</span>') +
          "</nav>" +
        "</div>" +
      "</article>";

    linkPins();
  }

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
    var mDem = hash.match(/^#demand-(.+)$/);

    if (mCap) {
      var found = CAPTURES.filter(function (c) {
        return String(c.id) === mCap[1] && !isGap(c);
      })[0];
      if (found) {
        buildFilter("");
        renderDetail(found);
        window.scrollTo(0, 0);
        return;
      }
    }

    var demand = mDem ? mDem[1] : "";
    buildFilter(demand);
    renderGrid(demand);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
