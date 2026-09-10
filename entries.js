/* ============================================================
   THE ONLY FILE YOU EDIT EACH WEEK.
   Add a new { ... } block to CAPTURES for every screenshot.
   ============================================================ */

var SITE = {
  name:        "The Capture Project",
  sub:         "A media archive for a more attentive internet",
  tagline:     "Same feeds. Bigger questions.",
  blurb:       "A growing collection of screenshots taken from my own feeds, " +
               "annotated one at a time. Each capture asks what else was on the " +
               "screen, and what the arrangement was doing.",
  footerLeft:  "Documenting the feed",
  footerRight: "Still scrolling. Still a story."
};

var CAPTURES = [

  {
    id:    "001",
    week:  1,
    date:  "2026-08-25",
    time:  "17:29",
    title: "Anger Looking for a Target",
    dek:   "A single scroll. A larger story.",
    image: "images/week-01-anger-looking-for-target.png",
    alt:   "An X post reading 'They fucked my generation over so hard bruh', quoting a statistic about 1990 income versus 2026 purchasing power, followed by replies assigning blame to different causes.",
    tags:  ["polarization", "framing", "attention"],

    preview: "I captured the complaint first. The replies underneath turned it " +
             "into an argument about who to blame.",

    pins: [
      { x: 50, y: 22, label: "Foreground",   text: "A grievance stated as a feeling, not a claim" },
      { x: 50, y: 40, label: "Measurement",  text: "1.3M views, 35K likes, 102 replies" },
      { x: 50, y: 84, label: "Surroundings", text: "Each reply supplies a different culprit" }
    ],

    record: "At 11:18 a.m. I opened a post from 8/25 with 1.3M views. The quoted " +
            "statistic compares a $50K income in 1990 to $130K in 2026.",

    remark: "The original post names no cause. Within three replies the thread has " +
            "supplied three: generational passivity, bad timing, and immigration. " +
            "The feed does not resolve the disagreement; it stacks the answers and " +
            "keeps scrolling."
  }

  /* Add the next capture below, after a comma:

  ,{
    id:    "002",
    week:  1,
    date:  "2026-08-26",
    time:  "09:04",
    title: "",
    dek:   "",
    image: "images/capture-002.png",
    alt:   "",
    tags:  [],
    preview: "",
    pins: [
      { x: 50, y: 30, label: "", text: "" }
    ],
    record: "",
    remark: ""
  }

  */

];
