/* ============================================================
   THE CAPTURE PROJECT — the machinery. You should not need
   to edit this file. It reads entries.js and draws the site.
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

  function sorted() {
    return CAPTURES.slice().sort(function (a, b) {
      return String(b.id).localeCompare(String(a.id));
    });
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

  function renderGrid() {
    var cards = sorted().map(function (c) {
      return '<a class="card" href="#capture-' + esc(c.id) + '">' +
               phone(c, false) +
               '<div class="card-body">' +
                 '<p class="meta">Capture ' + esc(c.id) +
                   (c.date ? " &middot; " + esc(prettyDate(c.date)) : "") + "</p>" +
                 "<h2>" + esc(c.title) + "</h2>" +
                 (c.preview ? '<p class="preview">' + esc(c.preview) + "</p>" : "") +
                 tagList(c.tags) +
               "</div>" +
             "</a>";
    }).join("");

    view.innerHTML =
      (SITE.blurb ? '<div class="intro"><p>' + esc(SITE.blurb) + "</p></div>" : "") +
      '<div class="grid">' + cards + "</div>";
  }

  function renderDetail(c) {
    var list = sorted();
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

    view.innerHTML =
      '<a class="back" href="#">&larr; All captures</a>' +
      '<article class="capture">' +
        '<div class="capture-media">' +
          phone(c, true) +
          '<a class="fullsize" href="' + esc(c.image) + '" target="_blank">View full size &nearr;</a>' +
        "</div>" +
        '<div class="capture-text">' +
          '<p class="eyebrow">Capture ' + esc(c.id) +
            (c.date ? " &middot; " + esc(prettyDate(c.date)) : "") +
            (c.time ? " &middot; " + esc(c.time) : "") + "</p>" +
          "<h1>" + esc(c.title) + "</h1>" +
          (c.dek ? '<p class="dek">' + esc(c.dek) + "</p>" : "") +
          tagList(c.tags) +
          notes +
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

  function route() {
    var m = location.hash.match(/^#capture-(.+)$/);
    var found = null;

    if (m) {
      found = CAPTURES.filter(function (c) { return String(c.id) === m[1]; })[0];
    }

    document.querySelector(".wordmark").textContent = SITE.name || "";
    document.querySelector(".masthead-sub").textContent = SITE.sub || "";
    document.querySelector(".masthead-tagline").textContent = SITE.tagline || "";
    document.querySelector(".footer-left").textContent = SITE.footerLeft || "";
    document.querySelector(".footer-right").textContent = SITE.footerRight || "";
    document.title = SITE.name || "Captures";

    if (found) { renderDetail(found); } else { renderGrid(); }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
