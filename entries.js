/* ============================================================
   THE ONLY FILE YOU EDIT EACH WEEK.
   Add a new { ... } block to CAPTURES for every screenshot.
   ============================================================ */

var SITE = {
  name:        "The Whole Frame",
  sub:         "A media archive for a more attentive internet",
  tagline:     "Same feeds. Bigger questions.",
  blurb:       "Once a day, without scrolling to find something better, I photograph the first thing X puts in my feed — the whole screen, not just the post.",
  footerLeft:  "Documenting the feed",
  footerRight: "Still scrolling. Still a story."
};
/* The five demands. Every capture gets exactly one.
   Change a label here and it changes everywhere on the site. */
var DEMANDS = [
  { key: "provoke",  label: "Provoke"  },
  { key: "alarm",    label: "Alarm",
    note: "Every capture in this group arrived as urgent. Read together, almost none of them required anything of me. Urgency here is a tone, not a call to act." },
  { key: "amuse",    label: "Amuse"    },
  { key: "distract", label: "Distract" },
  { key: "sell",     label: "Sell"     }
];
var CAPTURES = [

  {
    id:    "001",
    week:  1,
    date:  "2026-08-25",
    time:  "17:29",
    title: "Anger Looking for a Target",
    dek:   "A single scroll. A larger story.",
    image: "images/week-01-anger-looking-for-a-target.PNG",
    alt:   "An X post reading 'They fucked my generation over so hard bruh', quoting a statistic about 1990 income versus 2026 purchasing power, followed by replies assigning blame to different causes.",
    tags:  ["polarization", "framing", "attention"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,
    preview: "I captured the complaint first. The replies underneath turned it " +
             "into an argument about who to blame.",

        pins: [
      { x: 43.3, y: 22.6, label: "FOREGROUND", text: "Anger with no object named" },
      { x: 42.7, y: 41.2, label: "MEASUREMENT", text: "1.3M views, 102 replies" },
      { x: 38.9, y: 74.2, label: "RESPONSE", text: "Each reply supplies a different culprit" }
    ],

    record: "At 11:18 a.m. I opened a post from 8/25 with 1.3M views. The quoted " +
            "statistic compares a $50K income in 1990 to $130K in 2026.",

    remark: "The original post names no cause. Within three replies the thread has " +
            "supplied three: generational passivity, bad timing, and immigration. " +
            "The feed does not resolve the disagreement; it stacks the answers and " +
            "keeps scrolling."
  },
     {
    id:    "002",
    week:  1,
    date:  "2026-08-26",
    time:  "12:37",
    title: "A Countdown and a Trial",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-002.PNG",
    alt:   "A Fox News US post reporting that Vanity Fair cut ties with journalist Brittany Romano over a viral video from the Lindsay Clancy murder trial, with a photo of Romano outside the courthouse.",
    tags:  ["media", "framing", "attention", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,
    preview: "A delivery countdown runs in the status bar above a story about " +
             "a murder trial.",

    pins: [
      { x: 44.8, y: 14.3, label: "SOURCE", text: "One outlet reporting on another's staffing" },
      { x: 76.4, y: 31.7, label: "FRAMING", text: "The subject is a facial expression" },
      { x: 66.1, y: 58.3, label: "EVIDENCE", text: "A still frame used to prove a state of mind" },
      { x: 49.5, y: 82.6, label: "ABSENCE", text: "The frame ends before the engagement does" }
    ],
    detail: {
      image: "images/capture-002-detail.png",
      caption: "The status bar, enlarged. A delivery countdown runs above the trial."
    },
    record: "At 4:52 p.m. on 8/26 I opened a Fox News US post from 12:37 with " +
            "63K views. A DoorDash delivery timer was counting down at the top " +
            "of the screen.",

    remark: "Three children are dead and a jury is deciding whether their mother knew what she was doing. What left the courtroom and reached my phone was four seconds of a reporter's face, and then a second story about the magazine that fired her for it. Each version is easier to have an opinion about than the one before it. That may be why each one travels further.",
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
