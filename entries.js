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
  { key: "alarm",    label: "Alarm", note: "Every capture in this group arrived as urgent. Read together, almost none of them required anything of me. Urgency here is a tone, not a call to act." },
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
      { x: 42.7, y: 41.2, label: "MEASUREMENT", text: "1.3M views, 102 replies - one reply per 12,000 views" },
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
  },
      {
    id:    "003",
    week:  1,
    date:  "2026-08-27",
    time:  "09:55",
    title: "Diagnosis Below the Fold",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-003.png",
    alt:   "An X post quoting criticism of male experts in a postpartum mental-health murder trial appears above several replies calling the exchange engagement bait.",
    tags:  ["clancy-trial", "postpartum-mental-health", "engagement-bait", "thread", "pre-rule"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I captured the accusation before noticing that the replies were diagnosing the post itself as bait. The screenshot preserves both the provocation and the warning I had not yet read.",

    pins: [
      { x: 75.1, y: 20.4, label: "FRAMING", text: "Correction escalates irony into criminal severity" },
      { x: 65.5, y: 33, label: "ABSENCE", text: "Expertise is invoked but never shown" },
      { x: 66.1, y: 40.5, label: "MEASUREMENT", text: "Likes outnumber replies by over a thousand to one" },
      { x: 43, y: 58.9, label: "RESPONSE", text: "Replies shift attention from trial to bait" }
    ],

    record: "At 12:15 p.m. I was in my room at home, scrolling through X. I do not follow any of the visible accounts. I opened this post deliberately because it matched my original focus on rage bait, so it was selected rather than served — one of the captures I took before settling on the first-item rule. I read only the post and the quoted post before taking the screenshot; I noticed the replies afterward.",

    remark: "It appears to be about gendered expertise in a postpartum mental-health murder trial. The interaction is actually organized around a claim's capacity to travel: one account compresses the issue into an accusation, another intensifies it, and the replies reclassify the exchange as bait. Because I captured it before reading those replies, the feed secured my attention through moral conflict before presenting doubts about provenance. My own selection is part of the record because, at this stage, I was actively looking for content that fit my existing idea of rage bait."
  },
     {
    id:    "004",
    week:  1,
    date:  "2026-08-28",
    time:  "09:16",
    title: "Morning Paper, Instant Verdict",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-004.png",
    alt:   "An X post angrily responds to a New York Post report about the Lindsay Clancy trial, accompanied by family photographs and a courtroom portrait.",
    tags:  ["clancy-trial", "motherhood", "tabloid-framing", "solo", "pre-rule"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "My morning paper offered a verdict before I had left bed. I stayed for the replies, not the article.",

    pins: [
      { x: 46.6, y: 20.7, label: "FRAMING", text: "Praise is removed from its legal context" },
      { x: 69.2, y: 36.3, label: "SOURCE", text: "Tabloid headline becomes the evidence" },
      { x: 50, y: 59.9, label: "EVIDENCE", text: "Family photos precede facts from the trial" },
      { x: 65, y: 81.5, label: "MEASUREMENT", text: "Likes outnumber replies by more than six hundred to one" }
    ],

    record: "At 9:16 a.m. I had just woken up and was in bed, mindlessly scrolling through X, which I sometimes call reading the morning paper. The post is from 8/27 at 14:18 with 335K views, 28K likes and 45 replies. I do not follow either account, and I captured it because it fit my earlier rule of collecting rage bait rather than because it came first. I stayed with it long enough to read many replies. I did not open the linked article, and the New York Post is a publication I already did not particularly like.",

    remark: "It appears to be about whether describing an accused woman as a good mother can coexist with the deaths of her children. It is actually organized around removing a defense lawyer's phrase from its courtroom function and presenting it as a new moral offense. The family photographs make the stakes intimate, while the quote-post format supplies a verdict before readers reach the article. I joined that structure by reading the replies without opening the source, and my existing dislike of the New York Post meant I did not arrive as a neutral reader. The article became optional while judgment continued."
  },
     {
    id:    "005",
    week:  1,
    date:  "2026-08-29",
    time:  "08:52",
    title: "A Verdict in a Glance",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-005.png",
    alt:   "An X quote post judges a woman shown in a courtroom video still and repeats another account's claims about her expression.",
    tags:  ["clancy-trial", "courtroom-image", "visual-judgment", "solo", "pre-rule"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   true,

    preview: "I had gone looking for rage bait. This post asked me to treat a glance as evidence, and I stopped there.",

    pins: [
      { x: 94, y: 19.1, label: "EVIDENCE", text: "A small correction lends authority to a leap" },
      { x: 56.7, y: 33.2, label: "FRAMING", text: "An imagined moment replaces observed behavior" },
      { x: 56.2, y: 38.4, label: "ABSENCE", text: "No testimony appears alongside the verdict" },
      { x: 65.8, y: 44.1, label: "SOURCE", text: "Two accounts reinforce the same reading" }
    ],

    record: "At 8:52 a.m. I was in bed, having just woken up. I was scrolling X's For You feed looking for an example of rage bait; I do not follow either account. The quoted post is 13 hours old, and the outer post's engagement counts are below the bottom of the frame. I stayed with the post for a while and noticed its definitive language and the invitation to imagine a scene involving her children. I took the screenshot without reading the replies.",

    remark: "The post appears to concern a woman's expression in a courtroom image. In my feed, that expression becomes the basis for a judgment about her character, while the imagined scene involving her children supplies an emotional force the image cannot verify. I had been searching for rage bait, so my decision to save this particular post is part of the story the archive tells. Placed beside my other captures of the trial, it shows how the same case can repeatedly become a prompt for immediate judgment."
  },
     {
    id:    "006",
    week:  1,
    date:  "2026-08-30",
    time:  "08:53",
    title: "The Collapse Joke",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-006.png",
    alt:   "An X post imagines an absurd future after an AI bubble bursts, with a pink liked heart and several replies visible below.",
    tags:  ["ai-bubble", "economic-anxiety", "satire", "thread"],
    demand:   "amuse",
    obscured: true,
    cutOff:   false,

    preview: "The first time I let the top of my feed choose the capture, it gave me a joke about several anxieties at once. I liked it before saving it.",

    pins: [],

    record: "On August 30 at 8:53 a.m. I was in bed after waking up and scrolling X. This was my first capture under the rule of saving what appeared first in my feed. The post is from 8/27 at 22:09 with 1.4M views, 108K likes and 259 replies. An account I follow had reposted it; I do not follow the original poster. I read the post quickly, liked it, and took the screenshot without reading the replies.",

    remark: "On its surface, this is a joke about an imagined economic and technological collapse. For me, its effect was to make several worrying topics funny enough to take in at once. Unlike the earlier captures I selected for their anger, this one reached me through an account I follow when I let the feed choose. The visible like also records a limit of my method at that point: I had reacted before capturing, because I had not yet settled on my rule to screenshot first."
  },
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
