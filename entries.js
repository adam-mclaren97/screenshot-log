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
  footerRight: "Still scrolling. Still a story.",
  formUrl:     "https://forms.gle/jKN2fTKTCrWELA1k8"
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
/* Optional. Gives a tag a proper name and a paragraph of its own.
   A tag with no entry here still works — it just shows as itself. */
var TAG_NOTES = {
  "the-second-item": {
    title: "The Second Item",
    note: "The item directly beneath the first post. Seven times it has been a " +
          "wager — Kalshi, FanDuel, DraftKings, NYRA. Once it was satellite " +
          "internet. Four times it was an ordinary post that happened to be " +
          "next. The subject above the slot changes every day; what sits below " +
          "is most often something being sold to me."
  },
  "always-live": {
    title: "Always Live",
    note: "A live module docked above the feed. For three days it carried Al " +
          "Jazeera English. One day it was gone. Then it was an NFL scoreboard. " +
          "Then it became a row, with a second broadcast behind the first, and " +
          "then the row reordered so football led, and the news channel was " +
          "pushed to the edge. The slot is the constant; what it broadcasts is " +
          "not. I have never once opened it."
  },
  "borrowed-frame": {
    title: "Secondhand",
    note: "What reaches me is rarely anyone's own. A comment section " +
          "screenshotted into a post. A clip carrying another account's " +
          "watermark. A quote of a quote of a video someone else filmed. By the " +
          "time it arrives, the material has passed through two or three hands, " +
          "and each one has added a line telling me what it means."
  }
};
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

    pins: [
      { x: 55.2, y: 12.7, label: "FRAMING", text: "A followed repost carries an unfollowed voice" },
      { x: 41.7, y: 31, label: "FOREGROUND", text: "Absurdity makes the collapse easy to laugh at" },
      { x: 66.6, y: 39.3, label: "EVIDENCE", text: "My like predates the rule I follow now" },
      { x: 77.7, y: 80.6, label: "RESPONSE", text: "The replies enter the frame unread" }
    ],
    record: "On August 30 at 8:53 a.m. I was in bed after waking up and scrolling X. This was my first capture under the rule of saving what appeared first in my feed. The post is from 8/27 at 22:09 with 1.4M views, 108K likes and 259 replies. An account I follow had reposted it; I do not follow the original poster. I read the post quickly, liked it, and took the screenshot without reading the replies.",

    remark: "On its surface, this is a joke about an imagined economic and technological collapse. For me, its effect was to make several worrying topics funny enough to take in at once. Unlike the earlier captures I selected for their anger, this one reached me through an account I follow when I let the feed choose. The visible like also records a limit of my method at that point: I had reacted before capturing, because I had not yet settled on my rule to screenshot first."
  },
     {
    id:    "007",
    week:  2,
    date:  "2026-08-31",
    time:  "11:31",
    title: "Who Decides the Point",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-007.png",
    alt:   "An X post comments on reactions to the Lindsay Clancy trial above a quoted news update containing a Fox News video still.",
    tags:  ["clancy-trial", "jury-deliberations", "framing", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "The first post in my feed brought me back to a case already in this collection. I read its argument without watching the report beneath it.",

    pins: [
      { x: 49.2, y: 17.9, label: "FRAMING", text: "An unnamed group becomes the opposing side" },
      { x: 60.9, y: 29.2, label: "ABSENCE", text: "The people being criticized never speak here" },
      { x: 68.7, y: 38.8, label: "SOURCE", text: "A court update becomes a prompt for an argument" },
      { x: 45.3, y: 57.1, label: "EVIDENCE", text: "The video remains unwatched at time of capture" },
      { x: 65.8, y: 77.6, label: "MEASUREMENT", text: "The most argued capture yet" }
    ],
    record: "On August 31 at 11:31 a.m. I was in my kitchen drinking coffee and waiting for my toast. This was the first post on my For You feed. The post is from 8/30 at 21:43 with 774K views, 33K likes and 428 replies. I do not follow either account. I read both posts before taking the screenshot but did not watch the video.",

    remark: "This appears to be about the Clancy trial and the jury's deliberations. The main post uses that update to set up an argument with people it describes but does not show speaking for themselves. I encountered the argument before hearing anything in the attached video. This is another Clancy-related capture, though its recurrence alone cannot tell me why X placed it first that morning."
  },
     {
    id:    "008",
    week:  2,
    date:  "2026-09-01",
    time:  "15:20",
    title: "Party Lines, Betting Lines",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-008.png",
    alt:   "An X For You feed shows a political image carousel comparing Democrats and Republicans above an NYRA Bets advertisement.",
    tags:  ["trump-support", "partisan-framing", "nyra", "the-second-item", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "The feed kept a simple rhythm during my break from drumming: choose a political side, then place a bet.",

    pins: [
      { x: 68.4, y: 19, label: "INTERRUPTION", text: "Live news coverage sits above the algorithm offering" },
      { x: 39.4, y: 29.5, label: "FOREGROUND", text: "A morning greeting delivers a partisan test" },
      { x: 76.4, y: 37.9, label: "FRAMING", text: "Politics becomes a two-column scorecard" },
      { x: 75.6, y: 55.3, label: "ABSENCE", text: "The scorecard offers no sources or qualifications" },
      { x: 44.8, y: 65.6, label: "MEASUREMENT", text: "Likes outnumber replies about fifty-five to one" },
      { x: 30.3, y: 80.6, label: "SURROUNDINGS", text: "The next choice comes with a deposit match" }
    ],

    record: "On September 1 at 3:20 p.m. I was taking a break from practicing drums when I refreshed my For You feed. This was the first post displayed. The post is four hours old with 401K views, 4.9K likes and 88 replies. I do not follow the account. I paused to examine the visible images and the advertisement beneath them. I had not liked or otherwise interacted with the post before taking the screenshot.",

    remark: "On the surface, this is an endorsement of Trump accompanied by a two-column account of American politics. To me, the comparison looked like a Fox News graphic assembled from every hot-button phrase at once; its attempt to explain everything was part of the absurdity. X then placed a horse-racing promotion immediately beneath it, making political identity and gambling feel like consecutive forms of choosing a side. I had stepped away from practicing drums, but the feed supplied its own rhythm: position, reaction, wager."
  },
     {
    id:    "009",
    week:  2,
    date:  "2026-09-02",
    time:  "14:01",
    title: "Anyway, Bet on Horses",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-009.png",
    alt:   "An X feed shows a caption criticizing Olivia Rodrigo's singing above a quoted performance video, with a partially visible NYRA Bets advertisement underneath.",
    tags:  ["olivia-rodrigo", "music", "nyra", "the-second-item", "solo"],
    demand:   "amuse",
    obscured: false,
    cutOff:   false,

    preview: "Apparently, not caring for her music still leaves room for caring about someone criticizing it. And X would once again like to know whether I fancy a bet.",

    pins: [
      { x: 71.2, y: 26.8, label: "FRAMING", text: "Someone else's verdict gets here before the music" },
      { x: 84.5, y: 47.8, label: "ABSENCE", text: "My existing taste enters the picture unseen" },
      { x: 60.9, y: 83.9, label: "SURROUNDINGS", text: "Different day, same invitation to gamble" }
    ],

    record: "On September 2 at 2:01 p.m. I was taking a break at work. This was the first post in my For You feed. The post is ten hours old with 1.2M views, 7K likes and 186 replies; the quoted Variety post is fourteen hours old. I had not liked or otherwise interacted with it before taking the screenshot. I am not certain whether I follow the posting account.",

    remark: "I don't particularly care for Olivia Rodrigo's music, but a post criticizing her singing still caught my attention during a work break. That made me wonder whether my lack of interest could itself become a reason to look: I might skip a performance and stop for someone mocking it. I don't know whether X made that calculation, but I noticed myself considering the invitation. Beneath it was the same NYRA Bets offer that appeared under the previous day's political comparison. New subject, same horse-racing proposal."
  },
     {
    kind:    "gap",
    id:      "009a",
    week:    2,
    date:    "2026-09-03",
    title:   "Otherwise Occupied",
    reason:  "No capture. Anniversary.",
    preview: "I spent the day with my girlfriend. For once, 'For You' didn't get a turn.",
    record:  "September 3 was my anniversary with my girlfriend. I got caught up in the day and did not open X. No screenshot was taken.",
    remark:  "Most entries show what appeared when I gave X my attention. This one marks a day when I never opened the app. I was not deliberately taking a digital break; I was busy with my anniversary. Leaving this space in the collection acknowledges that my attention also has somewhere else to be."
  },
     {
    id:    "010",
    week:  2,
    date:  "2026-09-04",
    time:  "14:17",
    title: "Misplaced Priority",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-010.png",
    alt:   "X's For You feed shows a Tennis Letter post about Aryna Sabalenka complaining about marijuana smoke at the U.S. Open, followed by a TMZ Clancy mistrial announcement with a partially visible courtroom photograph.",
    tags:  ["us-open", "clancy-trial", "adjacency", "solo"],
    demand:   "distract",
    followed: true,
    obscured: false,
    cutOff:   false,

    preview: "X put tennis first. I noticed Clancy first and nearly scrolled past the screenshot I was supposed to take.",
        
    pins: [
      { x: 29.8, y: 31.4, label: "FRAMING", text: "First in my feed, second in my attention" },
      { x: 48.2, y: 64.4, label: "INTERRUPTION", text: "The story I keep seeing returns" },
      { x: 58.3, y: 71.6, label: "FOREGROUND", text: "This is where I actually start reading" }
    ],

    record: "On September 4 at 2:17 p.m. I opened X while eating in my kitchen at home. The Tennis Letter, an account I follow, supplied the first post in my feed; it is 52 minutes old with 151K views, 3.1K likes and 107 replies. Below it, two hours old, TMZ announced a mistrial in the Lindsay Clancy case. I noticed the Clancy announcement first and nearly scrolled toward it before remembering to take the screenshot.",

    remark: "After days of Clancy posts dominating my feed, the mistrial announcement was the update I actually wanted to see. X gave the first spot to a tennis interruption instead. I follow The Tennis Letter, but that does not mean everything it posts takes priority for me. My attention went straight to the trial update below, and I nearly forgot the capture because I wanted to keep reading. For You and what I wanted were briefly out of order."
  },
     {
    id:    "011",
    week:  2,
    date:  "2026-09-05",
    time:  "04:42",
    title: "Still Taking Bets",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-011.png",
    alt:   "An X feed screenshot with an Uber arrival indicator shows a sarcastic Clancy quote post above a courtroom photograph, followed by a partially visible DraftKings advertisement.",
    tags:  ["clancy-trial", "draftkings", "the-second-item", "bachelor-weekend", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I made it through a casino visit without gambling. While I waited for my Uber, X supplied another Clancy argument and one more opportunity to reconsider.",
        
    pins: [
      { x: 49.7, y: 3, label: "SURROUNDINGS", text: "My ride home shares a space with another argument" },
      { x: 74.4, y: 24.3, label: "FRAMING", text: "Yesterday I wanted today's news; today I get another jab" },
      { x: 44.3, y: 75.3, label: "EVIDENCE", text: "I had already liked it before I captured it" },
      { x: 76.7, y: 80.1, label: "INTERRUPTION", text: "I leave the casino; the pitch follows" }
    ],

    record: "On September 5 at 4:42 a.m. I was waiting for an Uber outside an Airbnb, returning to my hotel near the casino during my best friend's bachelor weekend. I had not yet slept. The post is ten hours old with 191K views, 18K likes and 55 replies, and it was already liked when I captured it. I follow neither TruthHurts nor Jay Gatling. I had not gambled at the casino and did not take up the DraftKings offer.",

    remark: "The previous day, I wanted the Clancy mistrial update ahead of tennis; now the case is back on top with another commentator adding disgust. Wanting to follow a story apparently comes with plenty of chances to rehearse a reaction. Beneath that, DraftKings offers to extend an evening in which I had already declined to gamble. Its placement does not tell me whether the ad had anything to do with my casino visit, but the coincidence gives this capture its punchline. I was waiting for a ride back to my hotel, and my feed still had suggestions for the night."
  },
     {
    id:    "012",
    week:  2,
    date:  "2026-09-06",
    time:  "17:54",
    title: "Someone Else's Feed",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-012.png",
    alt:   "X's For You feed shows Jason Burne praising a quoted trailcam video of an elk beside a stream at sunset, with a US Open tennis video partially visible below.",
    tags:  ["trailcam", "wildlife", "us-open", "solo", "pre-schedule"],
    demand:   "distract",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "For a second, I thought I had opened someone else's feed. Then tennis appeared underneath, and I recognized the place.",

    pins: [
      { x: 32.4, y: 31.8, label: "FRAMING", text: "Even a quiet scene arrives with a superlative" },
      { x: 36.5, y: 47.7, label: "FOREGROUND", text: "This much calm feels like someone else's feed" },
      { x: 26.9, y: 61.3, label: "MEASUREMENT", text: "7k likes, 20 replies - nothing to argue about" },
      { x: 60.6, y: 69, label: "SURROUNDINGS", text: "Tennis tells me I am back home" }
    ],

    record: "On September 6 at 5:54 p.m. I opened X after returning home from my best friend's bachelor weekend and lying down in bed to relax. The post is three hours old with 376K views, 7K likes and 20 replies. Below it is a US Open post. I follow neither Jason Burne nor trailcam, but I do follow the US Open.",

    remark: "After a run of provocative content, a quiet wildlife scene felt like my feed had deliberately offered me a break. I cannot know whether that was the intention, but the change was strong enough to make this briefly feel like someone else's feed. The tennis post underneath brought me back to familiar territory. What stays with me is how unfamiliar calm had become: an animal beside a stream felt more out of place than another argument about the Clancy trial."
  },
     {
    id:    "013",
    week:  3,
    date:  "2026-09-07",
    time:  "13:35",
    title: "Break's Over",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-013.png",
    alt:   "X's For You feed shows Quetzal recommending a quoted trailcam video of a cougar beside a pool of water as relief from rage bait, with a pink liked heart and a Game of Thrones complaint below.",
    tags:  ["trailcam", "game-of-thrones", "relief", "solo", "pre-schedule"],
    demand:   "distract",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "A second day of animals, this time explicitly recommended as a break from rage bait. Then Game of Thrones appears underneath. Apparently my break has terms and conditions.",

    pins: [
      { x: 56.7, y: 25.3, label: "FRAMING", text: "A user describes the pattern I am documenting" },
      { x: 21, y: 39.8, label: "SOURCE", text: "Same wildlife account, another person showing me in" },
      { x: 63.7, y: 63, label: "EVIDENCE", text: "I liked the break before I recorded it" },
      { x: 80.8, y: 63.1, label: "MEASUREMENT", text: "39k likes, 20 replies - the highest ratio in the archive" },
      { x: 52.3, y: 76.9, label: "INTERRUPTION", text: "My grudge is waiting directly below" }
    ],

    record: "On September 7 at 1:35 p.m. I was at home about to get ready for work when I opened X. The post is six hours old with 1M views, 39K likes and 20 replies; it quotes a trailcam post from the previous day. I recognized trailcam from the previous day's capture, this time quoted by a different account. I liked the post before capturing and left the like visible. I follow none of the accounts shown.",

    remark: "Yesterday's wildlife felt like someone else's feed; today the same account returns, and the person quoting it says outright that animal videos cleanse you between rage-bait and Nazi posts. Someone inside the feed is describing the pattern I am trying to document, and treating it as an ordinary feature of the place. I left my like visible because the break was welcome. Then the post underneath reminded me how much I dislike the ending of Game of Thrones. My feed gave me a breather and put an old grudge within thumb's reach."
  },
     ,{
    id:    "014",
    week:  3,
    date:  "2026-09-08",
    time:  "19:16",
    title: "Back to Our Program",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-014.png",
    alt:   "X's For You feed shows Collin Rugg commenting on a Clancy juror's account of jury disagreement above an interview clip, followed by a partially visible Kalshi cryptocurrency-market advertisement.",
    tags:  ["clancy-trial", "jurors", "kalshi", "the-second-item", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "Two days of wildlife, then straight back to Clancy with a trading ad " +
             "underneath. I opened X to get my capture; I stayed to check whether " +
             "someone really said that.",

    pins: [
      { x: 55, y: 29, label: "FOREGROUND",   text: "My first reaction is that context is missing" },
      { x: 22, y: 36, label: "FRAMING",      text: "The caption picks a side before I listen" },
      { x: 56, y: 49, label: "EVIDENCE",     text: "I watch this after taking the screenshot" },
      { x: 39, y: 63, label: "MEASUREMENT",  text: "1.2M views, 30K likes, 2.7K replies. The heart is empty: I watched, I did not endorse" },
      { x: 44, y: 70, label: "SURROUNDINGS", text: "The animals leave; the money pitch returns" }
    ],

    record: "On September 8, 2026, at 7:16 p.m., I opened X in my bedroom after " +
            "dinner with my girlfriend to take my daily capture. I do not follow " +
            "Collin Rugg. I took the screenshot before watching the attached " +
            "interview clip, then watched it to check the quotation.",

    remark: "After two days of wildlife, my feed returned to Clancy with a caption I " +
            "thought must be taking someone out of context. Watching the attached " +
            "clip afterward, I heard the quoted words, although that alone did not " +
            "settle what the surrounding interview might add. My skepticism still " +
            "kept me watching: I did not have to accept the framing for the post to " +
            "hold my attention. Underneath, Kalshi supplied another invitation to " +
            "put money into play. Apparently the nature break was over, and the " +
            "sponsors were back."
  },
     ,{
    id:    "015",
    week:  3,
    date:  "2026-09-09",
    time:  "08:34",
    title: "Zelda Before Work",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-015.png",
    alt:   "X's For You feed shows a live Al Jazeera English banner above a post by TiredAndOnFire quoting Ag0at's tweet about Nintendo adding sprint to an Ocarina of Time remake, with gameplay footage in the quoted post, followed by a partially visible FanDuel Sports advertisement.",
    tags:  ["zelda", "breath-of-the-wild", "remake", "fanduel", "the-second-item", "morning-feed", "always-live"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I opened X right after waking up and landed on a Zelda debate with a " +
             "gambling ad waiting underneath. I came for the daily capture; I stayed " +
             "because the argument was so dramatic over something I find funny.",

    pins: [
      { x: 80, y: 20, label: "INTERRUPTION", text: "A live news channel has been sitting above all of this the whole time" },
      { x: 30, y: 28, label: "FOREGROUND",   text: "This is the part that makes me stop" },
      { x:  8, y: 32, label: "FRAMING",      text: "The wording turns a small change into a crisis" },
      { x:  8, y: 40, label: "EVIDENCE",     text: "The quoted post gives the argument something to hang on" },
      { x:  8, y: 66, label: "MEASUREMENT",  text: "988K views, 5.5K likes, 334 replies. The heart is empty" },
      { x: 70, y: 75, label: "SURROUNDINGS", text: "Before I can leave the joke, the feed offers me money" }
    ],
        
    record: "On September 9, 2026, at 8:34 a.m., I opened X in bed right after waking " +
            "up, before getting ready for work, to take my daily capture. I do not " +
            "follow either account in the main post. I read the post as it appeared in " +
            "my For You feed and took the screenshot there.",

    remark: "This one stands out from some of my other captures because it is not " +
            "trying to alarm me or pull me into political outrage. It works because I " +
            "already like Breath of the Wild, so the idea that its influence on Zelda " +
            "is some irreversible disaster feels funny to me rather than upsetting. At " +
            "the same time, the feed still follows the post with a familiar money " +
            "pitch. Even when the content shifts from controversy to fandom, the " +
            "commercial rhythm underneath it stays the same. The joke is about Zelda, " +
            "but the structure of the feed still pushes me from amusement toward " +
            "consumption. And above all of it, unopened, a live news channel had been " +
            "waiting since before I started reading. One frame held a live news channel, a joke " +
            "about Zelda, and a bet. Forget all that, though — apparently I should go " +
            "gamble."
  },
     ,{
    id:    "016",
    week:  3,
    date:  "2026-09-10",
    time:  "15:46",
    title: "Same Case, Different Villain",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-016.png",
    alt:   "An X feed shows a live Al Jazeera English banner above a post by Jayson Blair questioning a Clancy holdout juror's motives, quoting a post with an interview video, followed by a partially visible US Open tennis post.",
    tags:  ["clancy-trial", "jurors", "us-open", "always-live", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I finished playing drums and opened X to find the Clancy argument " +
             "waiting for me again. At least the next item wants me to watch tennis " +
             "instead of bet on it.",

    pins: [
      { x: 70, y: 20, label: "INTERRUPTION", text: "The same live channel, pinned here for the second day running" },
      { x: 78, y: 26, label: "SOURCE",       text: "Former New York Times reporter, resigned in 2003 over fabricated stories." },
      { x:  8, y: 30, label: "FRAMING",      text: "An earlier capture's hero becomes today's suspect" },
      { x:  8, y: 46, label: "EVIDENCE",     text: "The accusation arrives before the quote is finished" },
      { x:  8, y: 73, label: "MEASUREMENT",  text: "73K views, 424 replies, 226 likes — more argument than approval" },
      { x: 79, y: 78, label: "SURROUNDINGS", text: "I expect a betting pitch; tennis appears instead" }
    ],

    record: "On September 10, 2026, I opened X after finishing drum practice, while " +
            "still sitting behind my kit. This was the first post in my For You feed, " +
            "and I captured it at 3:46 p.m. I follow neither Jayson Blair nor the " +
            "quoted account, Ivanka Gog. I do follow the US Open.",

    remark: "Two days earlier, my feed presented the Clancy holdout juror as a " +
            "patriot; now it presents him as someone whose motives deserve suspicion. " +
            "Yesterday's Zelda post gave me a day away, but apparently this argument " +
            "still has a seat reserved for me. The position changes while the " +
            "invitation stays familiar: decide which person deserves my distrust. " +
            "The account making the accusation belongs to Jayson Blair, who resigned " +
            "from the New York Times in 2003 after fabricating stories. I did not " +
            "know that while I was scrolling, and the frame does not say it. My feed " +
            "asked me to judge one man's good faith without telling me anything about " +
            "the man asking. Above the whole thing, the same live channel is docked " +
            "for the second day running, still unopened. Below it, the US Open " +
            "occupies the space where I have started expecting a gambling ad. I am " +
            "now noticing the absence of a sales pitch, which says something about " +
            "how familiar those pitches have become."
  },
     ,{
    id:    "017",
    week:  3,
    date:  "2026-09-11",
    time:  "10:05",
    title: "Coffee, Then Complaints",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-017.png",
    alt:   "An X For You feed shows a live Al Jazeera English banner above Clete Torres reacting to a quoted post about a Clancy juror's comments on autopsy evidence, with a captioned interview video, followed by a partially visible gaming post.",
    tags:  ["clancy-trial", "jurors", "wolverine", "always-live", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I finished breakfast and found another Clancy reaction waiting for me. " +
             "Below it, the subject changed to Wolverine, but the invitation to " +
             "disapprove stayed familiar.",

    pins: [
      { x: 70, y: 20, label: "INTERRUPTION", text: "Third day running, same channel, same place" },
      { x: 50, y: 34, label: "FRAMING",      text: "Someone else's disbelief sets up my reading" },
      { x:  8, y: 44, label: "EVIDENCE",     text: "The crime's severity shapes how I receive this" },
      { x:  8, y: 50, label: "ABSENCE",      text: "This excerpt leaves my questions about context unanswered" },
      { x: 90, y: 68, label: "TECHNIQUE",    text: "Burned-in captions, highlighted word by word. Built to be watched with the sound off" },
      { x:  8, y: 76, label: "MEASUREMENT",  text: "283K views, 979 reposts, 16K likes, 55 replies. This one travelled rather than argued" },
      { x: 60, y: 83, label: "SURROUNDINGS", text: "Different stakes arrive in the same scrolling motion" }
    ],

    record: "On September 11, 2026, at 10:05 a.m., I was at the dining table " +
            "finishing coffee after breakfast. This was the first post I saw that " +
            "day. I follow none of the accounts shown. A partially visible gaming " +
            "post appeared beneath the Clancy post.",

    remark: "This appears to be another update about the Clancy jurors, but I " +
            "encountered it as another reaction to their words. The horrific nature " +
            "of the crime matters to how I understand the reported comment, and I " +
            "found it difficult to make sense of that response from this excerpt " +
            "alone. The surrounding commentary supplies disbelief more readily than " +
            "context. The clip itself is subtitled with the current word highlighted, " +
            "which is how a video is built when it expects to be watched silently, " +
            "in passing. Below it was a complaint about Wolverine, a game I have no " +
            "interest in playing. The subjects have very different stakes, yet my " +
            "next move through the feed was another opportunity to encounter " +
            "someone's dissatisfaction. For the second day in a row, the slot beneath " +
            "the first post held no wager. The pattern I have been tracking may be " +
            "narrower than I thought, or this week is simply different."
  },
     ,{
    id:    "018",
    week:  3,
    date:  "2026-09-12",
    time:  "10:39",
    title: "Heartbreak Has a Sponsor",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-018.png",
    alt:   "An X feed shows The Tennis Letter's post about Frances Tiafoe leaving the court after a loss, above a large DraftKings Sports advertisement featuring Matt Leinart, a bonus offer and fine-print gambling disclaimers.",
    tags:  ["tiafoe", "tennis", "draftkings", "the-second-item", "solo"],
    demand:   "sell",
    followed: true,
    obscured: false,
    cutOff:   false,

    preview: "I had already watched the loss and joined the conversation. My feed " +
             "brought the disappointment back, with a much harder-to-miss invitation " +
             "to gamble underneath.",

    pins: [
      { x: 85, y: 14.5, label: "ABSENCE",      text: "Three days of a live news banner sat here. Today, nothing" },
      { x: 88, y: 21,   label: "FOREGROUND",   text: "My earlier attention finds its way back here" },
      { x:  8, y: 48,   label: "MEASUREMENT",  text: "509K views, 14K likes, 831 reposts, 113 replies" },
      { x: 80, y: 52,   label: "SURROUNDINGS", text: "The usual second item returns, labeled as an ad" },
      { x:  8, y: 71,   label: "FRAMING",      text: "The offer is set in the largest type anywhere on the screen" },
      { x:  8, y: 91,   label: "TECHNIQUE",    text: "The helpline number is printed at a fraction of the size of the offer" }
    ],

    record: "On September 12, 2026, at 10:39 a.m., I was sitting in my living room " +
            "on a Saturday off work, before attending my friend's wedding. The " +
            "Tiafoe post appeared first when I opened X. I had watched the match " +
            "live and interacted with posts about him after his loss. I follow The " +
            "Tennis Letter.",

    remark: "I like Tiafoe, so this reminder of his loss reached a disappointment I " +
            "already felt. Having watched the match and interacted with related " +
            "posts, I could recognize my own activity in what appeared first. What " +
            "stood out was how much space DraftKings occupied underneath. Yesterday " +
            "I wondered whether the pattern I had been tracking was narrower than I " +
            "thought; today the wager returned taking more of the frame than the post " +
            "I came for. The advertisement also carries its own warning: a gambling " +
            "helpline number sits in the fine print, in type a fraction the size of " +
            "the offer above it. I cannot tell whether these items were deliberately " +
            "paired, but together they move from my investment in a player to an " +
            "invitation to invest money in sports. The news banner that had sat at " +
            "the top of the last three captures was not there at all. My feed had " +
            "changed the emotion while keeping the sales pitch."
  },
     ,{
    id:    "019",
    week:  3,
    date:  "2026-09-13",
    time:  "16:54",
    title: "A Kitchen Time Machine",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-019.png",
    alt:   "An X feed shows a live Green Bay versus Minnesota scoreboard above solelynostalgia's quote post featuring the What's New, Scooby-Doo? theme, with a partially visible Kalshi sports advertisement below.",
    tags:  ["scooby-doo", "nostalgia", "kalshi", "the-second-item", "always-live", "solo"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I opened X because I owed the project a capture. A few seconds later, I " +
             "was five again, standing in a kitchen where we were supposed to be " +
             "making stew.",

    pins: [
      { x: 60, y: 20,   label: "INTERRUPTION", text: "The live slot is still here. Last week a news channel, today a football game" },
      { x: 80, y: 28,   label: "FRAMING",      text: "A stranger's reaction arrives before the song does" },
      { x:  8, y: 50,   label: "FOREGROUND",   text: "My kitchen briefly becomes a time machine" },
      { x:  8, y: 71.5, label: "MEASUREMENT",  text: "351K views, 16K likes, 1.9K reposts, and 5 replies. Nothing here to argue about" },
      { x: 65, y: 76,   label: "SURROUNDINGS", text: "The second item returns, two days running. It calls itself trading, not betting" }
    ],

    record: "On September 13, 2026, at 4:54 p.m., I was in the kitchen getting ready " +
            "to make stew with my girlfriend, on the Sunday after our friend's " +
            "wedding. I opened X to take my daily capture and listened to a song I " +
            "had not heard in years. My girlfriend also commented on how good it was. " +
            "I follow neither solelynostalgia nor the quoted account, culture, and I " +
            "do not follow Kalshi.",

    remark: "I had forgotten how good the \"What's New, Scooby-Doo?\" theme was until " +
            "it interrupted an ordinary afternoon of getting dinner ready. Suddenly I " +
            "felt five again, and my girlfriend joined in appreciating a song that " +
            "neither the screenshot nor its engagement totals can explain my " +
            "attachment to. This is something my original search for rage bait would " +
            "have passed over: a recommendation that made the room I was already in " +
            "more enjoyable. Sixteen thousand likes and five replies. The captures " +
            "that angered me collected arguments; this one collected agreement and " +
            "nothing left to say. Football sat above it, and Kalshi waited below, " +
            "keeping the familiar commercial invitation in place. Where a live news " +
            "channel had sat for three days, a live football game now sits. The slot " +
            "did not disappear; it changed what it was broadcasting. For once, " +
            "though, the second item can wait. I am still listening to the first."
  },
     ,{
    id:    "020",
    week:  4,
    date:  "2026-09-14",
    time:  "10:31",
    title: "One Laugh, Then Out",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-020.png",
    alt:   "An X feed shows an Al Jazeera live banner mid-redraw above a post about Ben Shelton containing a screenshot of a comment section mocking him, with a quoted remark about Alcaraz, and the edge of an unidentifiable next post below.",
    tags:  ["ben-shelton", "tennis", "mockery", "borrowed-frame", "always-live", "solo"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "Yesterday my feed brought back a childhood favorite. Today it found a " +
             "player I am happy to laugh at. Both worked on me.",

    pins: [
      { x: 70, y: 20,   label: "INTERRUPTION", text: "The live slot returns, caught mid-redraw as I pressed the shutter" },
      { x: 45, y: 28,   label: "FRAMING",      text: "My existing opinion does some of the work" },
      { x: 90, y: 32,   label: "TECHNIQUE",    text: "A screenshot of a comment section, inside a post, inside my screenshot" },
      { x: 90, y: 45,   label: "FOREGROUND",   text: "I arrive already willing to laugh. Every line inverts a stock football phrase" },
      { x:  8, y: 90.5, label: "MEASUREMENT",  text: "26K views, 1.3K likes, 2 replies — while one comment inside the image has 27.6K" },
      { x: 30, y: 95.5, label: "ABSENCE",      text: "I expect gambling before I can identify anything" }
    ],

    record: "On September 14, 2026, at 10:31 a.m., I was finishing my coffee after " +
            "making breakfast. I opened X specifically to take my daily capture. I " +
            "read the post, laughed, took the screenshot, and left without scrolling " +
            "farther. I follow no account in the frame.",

    remark: "A joke at Ben Shelton's expense was an easy way to get a laugh out of me " +
            "because I already was not a huge fan. Like the previous day's " +
            "Scooby-Doo post, it met me with something I was ready to enjoy, though " +
            "this time that enjoyment came from mockery. What I did not notice while " +
            "laughing is that I was looking at a screenshot of a comment section, " +
            "posted inside someone else's post, inside my own screenshot. Three " +
            "frames deep, and only the outermost one is mine. The jokes themselves " +
            "are a template: each line inverts a stock football phrase, so the " +
            "humor comes from the format rather than from anything about Shelton. " +
            "One of those comments has 27,600 likes; the post that screenshotted " +
            "them has 1,300. The post got my attention for a moment, and then I " +
            "closed the app. Looking back, I am also ready to assume that the barely " +
            "visible next post is another gambling advertisement. I cannot establish " +
            "that from this screenshot; what it preserves is the point where a " +
            "pattern in my archive has become an expectation I bring to the feed."
  },
     ,{
    id:    "021",
    week:  4,
    date:  "2026-09-15",
    time:  "18:39",
    title: "Read Twice, Click Never",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-021.png",
    alt:   "An X feed shows a row of live broadcast banners above a CNN post reporting a change to an FBI hiring disqualification, with the headline printed into a large photograph of Kash Patel, and the top edge of a Starlink advertisement below.",
    tags:  ["kash-patel", "fbi-hiring", "cnn", "starlink", "always-live", "expectations", "solo"],
    demand:   "distract",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I read the headline twice and the article zero times. Patel's face had " +
             "already set my expectations before I understood the reported decision.",

    pins: [
      { x: 58, y: 20,   label: "INTERRUPTION", text: "The live slot is now a row. Al Jazeera, and another sliding in behind it" },
      { x:  8, y: 30,   label: "FRAMING",      text: "I bring an expectation of absurdity to this" },
      { x: 80, y: 36.5, label: "ABSENCE",      text: "My unanswered questions stay behind a link I never opened" },
      { x:  8, y: 48,   label: "TECHNIQUE",    text: "The headline is printed into the image, so the post is complete without the article" },
      { x:  8, y: 70,   label: "FOREGROUND",   text: "A familiar face gives my attention a destination" },
      { x:  8, y: 90.5, label: "MEASUREMENT",  text: "901K views, 5.4K likes, 1.3K reposts, 458 replies" },
      { x: 72, y: 95.5, label: "SURROUNDINGS", text: "The slot below is an advertisement again, this time for satellite internet" }
    ],

    record: "On September 15, 2026, at 6:39 p.m., I was at my girlfriend's house, " +
            "hanging out after she returned from work. I read the headline twice but " +
            "did not open the article or investigate the reported decision further. " +
            "I do not follow CNN.",

    remark: "CNN's post presented an FBI hiring decision whose stated rationale I " +
            "could not connect to the policy change from the caption alone. Patel's " +
            "face was enough to make me stop, because I associate posts about him " +
            "with something absurd, and this fit that expectation. The headline is " +
            "also printed into the image itself, so the post carries its whole claim " +
            "without the article attached. I read it twice because it was there to be " +
            "read twice. I chose not to spend more of my evening investigating it, " +
            "which is one way I limit how much attention I give politics on X. That " +
            "choice also left my first impression largely untested. Below it, the " +
            "slot held an advertisement again, satellite internet rather than a " +
            "wager. Above it, the live banner had become a row, with a second " +
            "broadcast sliding in behind Al Jazeera. The post held me long enough to " +
            "react, while the explanation I might have needed remained in an article " +
            "I never opened."
  },
     ,{
    id:    "022",
    week:  4,
    date:  "2026-09-16",
    time:  "08:37",
    title: "The Argument Shrinks",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-022.png",
    alt:   "An X post pairs captioned images of Macklemore and Ed Sheeran above a quoted post containing a cropped article excerpt and a link, followed by engagement counts and part of an unrelated post.",
    tags:  ["ed-sheeran", "macklemore", "framing", "text-in-image", "solo"],
    demand:   "distract",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "The controversy had already filled my feed. This version made the " +
             "argument smaller and easier to pass along, with roughly 850 likes for " +
             "every reply.",

    pins: [
      { x: 86, y: 18.5, label: "SOURCE",       text: "Unlike most sources in this archive, this one states its politics in its name" },
      { x:  8, y: 30,   label: "TECHNIQUE",    text: "The claim is printed into the picture. It cannot be quoted back or corrected" },
      { x:  8, y: 40,   label: "FRAMING",      text: "Two captions make a complicated dispute look settled" },
      { x:  8, y: 71,   label: "EVIDENCE",     text: "The supporting article is cropped on both sides. I cannot read it" },
      { x:  8, y: 80.5, label: "MEASUREMENT",  text: "310K views, 40K likes, 3.5K reposts, 47 replies. Roughly 850 likes per reply" },
      { x: 72, y: 85,   label: "SURROUNDINGS", text: "The slot below is not an advertisement today, just an unrelated post" }
    ],

    record: "On September 16, 2026, at 8:37 a.m., I was in bed with my coffee, " +
            "getting ready for a twelve-hour shift. I opened X only to take my daily " +
            "capture. Posts about this controversy had been appearing frequently in " +
            "my feed. I follow none of the accounts shown and did not recognize the " +
            "subject of the next post.",

    remark: "I was already familiar with this controversy from its repeated " +
            "appearances in my feed, so another post about it was unsurprising. What " +
            "stood out was how the meme assigned each person a simplified position, " +
            "giving me a ready-made argument before I examined the smaller excerpt " +
            "beneath it. Its captions are the creator's framing, which I cannot " +
            "treat as a transcript of what either person said. They are also printed " +
            "into the picture itself, which means they travel as an image rather " +
            "than as text anyone can quote back or correct. The article excerpt that " +
            "might have supplied context is cropped on both sides; I cannot read a " +
            "full sentence of it in the frame. I expected more discussion, but the " +
            "displayed likes and reposts far outnumbered replies. Those counts show " +
            "activity without explaining why people participated, and three and a " +
            "half thousand reposts against forty-seven replies describes something " +
            "passed along rather than argued over. The live banner that has opened " +
            "most of this week's captures was not there today. This capture makes me " +
            "notice how easily a controversy can keep circulating while the space " +
            "given to its context gets smaller."
  },
     ,{
    id:    "023",
    week:  4,
    date:  "2026-09-17",
    time:  "21:26",
    title: "Finally, My Side",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-023.png",
    alt:   "An X feed shows a live football banner with an Al Jazeera banner behind it, above a reposted Verstappen onboard clip captioned inside the video, a quoted complaint about the same moment, and a NYRA Bets advertisement below.",
    tags:  ["max-verstappen", "f1", "nyra-bets", "the-second-item", "text-in-image", "borrowed-frame", "solo", "always-live"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "My feed usually finds an F1 opinion I disagree with. On a week without " +
             "racing, it finally gave me something I could enjoy without arguing.",

    pins: [
      { x: 50, y: 20,   label: "INTERRUPTION", text: "The live row has reordered. Football first now, the news channel pushed to the edge" },
      { x: 70, y: 30,   label: "FRAMING",      text: "My favorite driver makes this an easy welcome" },
      { x:  8, y: 35,   label: "TECHNIQUE",    text: "The claim is printed into the clip, and the clip is someone else's" },
      { x:  8, y: 50,   label: "FOREGROUND",   text: "For once, being a fan requires no argument from me" },
      { x:  8, y: 68,   label: "EVIDENCE",     text: "The post I enjoyed is a rebuttal. The argument is in the frame; I am on the winning side of it" },
      { x:  8, y: 75.5, label: "MEASUREMENT",  text: "11K views, 199 likes, and the reply and repost counters are blank" },
      { x: 72, y: 80,   label: "SURROUNDINGS", text: "The slot returns to a wager. Seven of eleven now" }
    ],

    record: "On September 17, 2026, at 9:26 p.m., I was in bed at home. It was a week " +
            "without an F1 race, and I encountered a positive post about Max " +
            "Verstappen, my favorite driver. A live football banner and part of an " +
            "Al Jazeera banner appeared above it, with a NYRA Bets advertisement " +
            "below. I follow none of the accounts shown.",

    remark: "With no race that week, a positive Verstappen post gave me a little of " +
            "the F1 activity I was missing. I usually notice racing posts because " +
            "someone's opinion clashes with mine, so agreeing felt like a welcome " +
            "change. Looking at it again, the argument is still in the frame: the " +
            "post is a reply to the complaint quoted beneath it, and what I enjoyed " +
            "was being on the winning side of it rather than being spared it. The " +
            "clip is not the poster's either, and the line explaining what to look " +
            "for is printed into the video rather than written beside it. The " +
            "football banner above concerned teams I had no interest in, and the " +
            "news channel that led this row all last week had been pushed to its " +
            "edge. I cannot know whether the timing was deliberate, but the " +
            "recommendation felt well placed in my evening. The numbers are the " +
            "strangest part: eleven thousand views, one hundred and ninety-nine " +
            "likes, and both the reply and repost counters empty. It reached a lot " +
            "of people and nobody said anything or passed it on. Then NYRA Bets " +
            "offered a different kind of racing involvement; being pleased with the " +
            "first item still came with the usual second invitation."
  },
     ,{
    id:    "024",
    week:  4,
    date:  "2026-09-18",
    time:  "10:11",
    title: "The Seats Become Evidence",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-024.png",
    alt:   "An X quote-post comments on luxury seating above a caption attributing concertgoers' reactions to Macklemore saying Free Palestine, with a video still of spectators gesturing and a partial NFL post below.",
    tags:  ["macklemore", "palestine", "privilege", "borrowed-frame", "expectations", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I have spent years interacting with posts about Israel and Palestine. " +
             "This one reached that familiar interest through a concert clip where " +
             "even the seating became part of the argument.",

    pins: [
      { x: 89, y: 20.7, label: "FRAMING",      text: "The seating becomes an argument about privilege" },
      { x:  8, y: 29,   label: "EVIDENCE",     text: "The caption asserts a cause the footage alone cannot show" },
      { x: 88, y: 34.5, label: "SOURCE",       text: "Two accounts tell me what to see before the video plays" },
      { x:  8, y: 55,   label: "FOREGROUND",   text: "I have a stake in this argument, and the feed found it" },
      { x:  8, y: 78.5, label: "MEASUREMENT",  text: "3.8M views, 183K likes, 11K reposts, 226 replies. The largest reach in this archive" },
      { x: 55, y: 83,   label: "SURROUNDINGS", text: "Football arrives, and I expect a betting pitch that never comes" }
    ],

    record: "On September 18, 2026, at 10:11 a.m., I was at home in my recliner with " +
            "my coffee. The first post concerned audience reactions at a Macklemore " +
            "performance, with an NFL post partially visible below. I have interacted " +
            "with posts about Israel and Palestine for years. I follow none of the " +
            "accounts shown.",

    remark: "I recognized this as another appearance of the music controversy already " +
            "circulating through my feed, but the luxury-box comment widened the " +
            "argument. I read it as connecting the spectators' apparent privilege to " +
            "their political stance, although their seats cannot establish their " +
            "beliefs or make them representative of an entire conflict. The caption " +
            "above the clip does something similar: it names a cause for what the " +
            "people in the video are doing, and the footage on its own cannot show " +
            "that. By the time it reached me, somebody had filmed it, somebody had " +
            "told me what it meant, and somebody else had added what their seats " +
            "proved. My own history matters here too: I have spent years giving this " +
            "subject attention, so its return hardly feels random. Like the earlier " +
            "Sheeran meme, this post gives a complicated dispute a compact frame that " +
            "attracts far more likes than replies, without those counts telling me " +
            "why people responded. It is also the furthest-traveled thing in my " +
            "archive, by a wide margin. Below it, football resumes, and I catch " +
            "myself anticipating a gambling advertisement that has not actually " +
            "appeared."
  },
     ,{
    id:    "025",
    week:  4,
    date:  "2026-09-19",
    time:  "21:50",
    title: "One Familiar, One Stranger",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-025.png",
    alt:   "An X feed shows Philip Lewis relaying an AP sentence about Ed Sheeran's comments on Gaza, with Variety-watermarked concert footage, followed by a partially visible Entertainment Tonight post about Brittany Broski's fashion inspiration.",
    tags:  ["ed-sheeran", "palestine", "recommendations", "borrowed-frame", "expectations", "solo"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "The first post continued an argument I was already invested in. The " +
             "second seemed to assume I knew who Brittany Broski was.",

    pins: [
      { x: 78, y: 18.5, label: "SOURCE",      text: "An AP wire sentence relayed by someone else, over footage belonging to Variety" },
      { x: 91, y: 25,   label: "FRAMING",     text: "The headline sounds firmer than my reading of his response" },
      { x: 90, y: 35,   label: "EVIDENCE",    text: "The commentary reached me first. The thing being commented on arrived a week later" },
      { x: 90, y: 50,   label: "FOREGROUND",  text: "Hearing him directly still leaves me dissatisfied" },
      { x:  8, y: 79,   label: "MEASUREMENT", text: "1.2M views, 6.8K likes, 1.7K reposts, 600 replies. Eleven likes per reply, where the memes ran past eight hundred" },
      { x: 80, y: 83.5, label: "ABSENCE",     text: "I expect advertising, but no ad label appears" }
    ],

    record: "On September 19, 2026, at 9:50 p.m., I was at home relaxing in my " +
            "bedroom. A Philip Lewis post containing a video of Ed Sheeran appeared " +
            "above an Entertainment Tonight post about Brittany Broski. I watched the " +
            "Sheeran video. I follow none of the accounts shown.",

    remark: "After several captures of other people arguing about Sheeran, I finally " +
            "heard him address the issue himself, and I still felt he was sitting on " +
            "the fence. The caption presented a forceful statement, but watching the " +
            "response left me with the impression that he was trying to satisfy " +
            "everyone. The order is worth noting: my feed gave me a week of " +
            "commentary about what he said before it gave me him saying it. The post " +
            "itself belongs to nobody in the frame either. The sentence is an AP wire " +
            "lede, the footage carries a Variety watermark, and the account relaying " +
            "both adds nothing of its own. The numbers differ from the earlier posts " +
            "about this controversy as well. Six hundred replies against six thousand " +
            "eight hundred likes is roughly eleven likes per reply, where the meme " +
            "and the crowd clip both ran past eight hundred. People passed those " +
            "along; they argued with this one. Below it, the feed moved into celebrity " +
            "fashion coverage about someone I did not recognize, making its sense of " +
            "my interests suddenly feel much less precise. I initially called that " +
            "second post an advertisement, although there is no visible ad label: " +
            "repeated commercial placements have started shaping what I expect to " +
            "find there. Both posts involve entertainment figures, but my investment " +
            "in the first comes from the political issue, and that interest does not " +
            "automatically carry over to the second."
  },
     ,{
    id:    "026",
    week:  4,
    date:  "2026-09-20",
    time:  "11:30",
    title: "Two-Hour Atletico Fan",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-026.png",
    alt:   "An X feed shows an Al Jazeera live banner above a Kalshi FC post about a disputed challenge in Atletico Madrid versus Real Madrid, with broadcast replay and referee-review footage, above a partially visible FanDuel advertisement.",
    tags:  ["madrid-derby", "football", "kalshi", "fanduel", "the-second-item", "always-live", "borrowed-frame", "solo"],
    demand:   "sell",
    followed: true,
    obscured: false,
    cutOff:   false,

    preview: "I was a Barcelona supporter spending two hours rooting for Atletico. " +
             "FanDuel offered to make that temporary allegiance a financial " +
             "commitment.",

    pins: [
      { x: 48, y: 6,    label: "RECORD",       text: "The phone documenting my feed is also powering the work on this project" },
      { x: 76, y: 20,   label: "INTERRUPTION", text: "Al Jazeera leads the row again, now counting 267 live broadcasts" },
      { x: 86, y: 25.7, label: "SOURCE",       text: "A prediction market delivering football content, with no ad label. I chose to follow it" },
      { x: 60, y: 30,   label: "FRAMING",      text: "The verdict is decided for me before the replay starts" },
      { x:  8, y: 40,   label: "EVIDENCE",     text: "The radio incident finally becomes something I can examine" },
      { x:  8, y: 50,   label: "TECHNIQUE",    text: "A Spanish match, an Arabic broadcast, a clipper's watermark, a betting brand — and an advertisement inside the footage" },
      { x:  8, y: 57.5, label: "MEASUREMENT",  text: "27K views, 185 likes, 23 replies, 22 reposts" },
      { x: 82, y: 61.5, label: "SURROUNDINGS", text: "The second betting company in the frame, and the only one labeled as an advertisement" }
    ],

    record: "On September 20, 2026, at 11:30 a.m., I was in the passenger seat while " +
            "my brother drove us to New Jersey for a lacrosse game. I was listening " +
            "to Atletico Madrid versus Real Madrid on the radio and using my personal " +
            "hotspot for work on this project. I recognized the incident from the " +
            "commentary and took the screenshot midway through my first viewing of " +
            "the clip. I follow Kalshi FC but not FanDuel Sports.",

    remark: "As a Barcelona supporter I do not usually root for Atletico, but my " +
            "dislike of Real Madrid made the arrangement easy for two hours. This " +
            "clip gave me something the radio could not: a chance to examine the " +
            "challenge myself, although I arrived with a clear preference about which " +
            "team should benefit. Unlike recommendations from strangers, this one " +
            "came from an account I already follow, placing my own choices inside the " +
            "pattern I am documenting. The more I look at the frame, the less of it " +
            "is not for sale. Kalshi supplied the football discussion and carries no " +
            "ad label. FanDuel appeared directly underneath, labeled. And an " +
            "advertisement for a sports channel runs across the top of the broadcast " +
            "footage itself. Three invitations, one of them disclosed. The clip " +
            "belongs to nobody here either: a Spanish match, shown by an " +
            "Arabic-language broadcaster, clipped by an account asking me to follow " +
            "it, reposted by a prediction market. My later thought that I should have " +
            "put money on Atletico shows how easily I could imagine turning a " +
            "sporting preference into a wager; it does not establish that the ad " +
            "caused that thought."
  },
     ,{
    id:    "027",
    week:  5,
    date:  "2026-09-21",
    time:  "08:31",
    title: "Still Enjoying Sunday",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-027.png",
    alt:   "An X feed displays a Seattle Seahawks victory graphic featuring celebrating players and defensive statistics, beneath an Al Jazeera live banner and above a partially visible Kalshi promotion offering credit with a code.",
    tags:  ["seahawks", "nfl", "kalshi", "the-second-item", "fandom", "always-live", "solo"],
    demand:   "amuse",
    followed: true,
    obscured: false,
    cutOff:   false,

    preview: "Yesterday I borrowed Atletico for two hours. This is my team, and I am " +
             "happy to let Sunday's win follow me into Monday.",

    pins: [
      { x: 65, y: 20,   label: "INTERRUPTION", text: "The live slot is back to one, and back to Al Jazeera" },
      { x: 88, y: 25.7, label: "SOURCE",       text: "This is a relationship I choose to maintain" },
      { x:  8, y: 32,   label: "TECHNIQUE",    text: "The club publishes its own highlight graphic. What I follow is also a marketing channel" },
      { x:  8, y: 42,   label: "FRAMING",      text: "These numbers give my team pride something concrete" },
      { x:  8, y: 60,   label: "FOREGROUND",   text: "Yesterday's win still improves my Monday morning" },
      { x:  8, y: 84,   label: "MEASUREMENT",  text: "50K views, 3K likes, 260 reposts, 16 replies" },
      { x: 55, y: 88.5, label: "ABSENCE",      text: "If this carries an Ad label, the compose button is sitting on top of it" },
      { x:  8, y: 93,   label: "SURROUNDINGS", text: "I celebrate yesterday while Kalshi sells me tonight, with a code" }
    ],

    record: "On September 21, 2026, at 8:31 a.m., I was in bed looking at X after a " +
            "Seahawks win the previous day. I am a longtime Seahawks fan and follow " +
            "the team's account. Their post appeared beneath an Al Jazeera live " +
            "banner and above a partially visible Kalshi promotion for Monday Night " +
            "Football.",

    remark: "This was an easy recommendation to welcome: my team had won, and I was " +
            "still enjoying it. Unlike the previous capture's temporary Atletico " +
            "allegiance, my attachment to the Seahawks needed no explanation beyond " +
            "being a fan. What the team sent me is a produced graphic, with its own " +
            "statistics and its own branded nickname for the defense, so the account " +
            "I follow out of loyalty is also a marketing channel. The Kalshi " +
            "promotion underneath shifted from yesterday's result to tonight's " +
            "opportunity to put money down, and it has moved on from naming itself " +
            "to offering fifty-five dollars with a code. I cannot see whether it " +
            "carries an Ad label, because the compose button sits exactly where that " +
            "label appears in my earlier captures of the same account. Neither " +
            "appearance surprised me, which is itself a change worth recording: the " +
            "betting invitation has become almost as predictable as the sports " +
            "content I actively follow. The first post worked perfectly well on its " +
            "own; enjoying a win already gave me a reason to look."
  },
     ,{
    id:    "028",
    week:  5,
    date:  "2026-09-22",
    time:  "19:52",
    title: "Funny Until Further Notice",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-028.png",
    alt:   "An X feed shows a post pairing a photograph of Trump standing behind Mamdani with a still from a horror film, beneath a live-news banner drawing over itself, and above a Google Pixel advertisement.",
    tags:  ["trump-mamdani", "political-humor", "advertising", "always-live", "solo"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I can appreciate the joke without feeling better about the situation. " +
             "Below it, the sales pitch survives a change of product: today, a phone " +
             "instead of a bet.",

    pins: [
      { x: 66, y: 20, label: "INTERRUPTION", text: "Caught mid-redraw again, two banners drawing over each other" },
      { x: 65, y: 28, label: "FOREGROUND",   text: "I find this funny and still feel uneasy" },
      { x:  8, y: 35, label: "FRAMING",      text: "The comparison casts politics as a horror scene" },
      { x:  8, y: 45, label: "ABSENCE",      text: "No words here to argue with. The claim is made entirely by placing two pictures side by side" },
      { x:  8, y: 51, label: "MEASUREMENT",  text: "749K views, 122K likes, 10K reposts, 39 replies. Over three thousand likes for every reply" },
      { x: 60, y: 60, label: "SURROUNDINGS", text: "Different product, same slot — and this one calls itself a statement, not a distraction" }
    ],

    record: "On September 22, 2026, at 7:52 p.m., I captured this at home after " +
            "dinner while hanging out with my girlfriend. I do not follow any of the " +
            "accounts shown.",

    remark: "Trump and Mamdani have provided some funny photographs together, and " +
            "this comparison makes use of that. I can see the humor, but what is " +
            "happening in the country and the world makes it harder to enjoy without " +
            "reservation. The post gives me a way to laugh at something I am also " +
            "uneasy about. It does that without writing anything down. Unlike the " +
            "meme I captured a fortnight ago, there are no captions here at all; the " +
            "argument is made entirely by putting two pictures next to each other, " +
            "which leaves nothing to quote back or dispute. The numbers behave " +
            "accordingly. A hundred and twenty-two thousand likes against " +
            "thirty-nine replies is over three thousand to one, and ten thousand " +
            "people passed it on. My other political captures collected hundreds of " +
            "replies; this one collected almost none. A political joke travels like " +
            "a joke, not like politics. Meanwhile, Google occupies the space where I " +
            "have become accustomed to seeing gambling advertisements, and sells a " +
            "phone as a statement rather than a distraction. That adds a useful " +
            "distinction to my running thread: the invitation to buy keeps appearing " +
            "even when the invitation to gamble does not."
  },
     ,{
    id:    "029",
    week:  5,
    date:  "2026-09-23",
    time:  "08:10",
    title: "Count Me Out",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-029.png",
    alt:   "An X feed shows sarcastic commentary quoting a Variety announcement of a Vice TV documentary series about the public's response to athletes, with a studio portrait of Jake Paul, beneath an Al Jazeera live banner and above a partially visible post about Rockstar Games.",
    tags:  ["everybody-hates", "celebrity", "gta6", "always-live", "thread"],
    demand:   "provoke",
    obscured: false,
    cutOff:   false,

    preview: "Apparently, disliking someone is a reason to watch a whole show about " +
             "them. I am happy to leave it at disliking them.",

    pins: [
      { x: 77, y: 20,   label: "INTERRUPTION", text: "The live counter reads 8.4K today. It has also read 6, 8, 188 and 267" },
      { x: 70, y: 34.4, label: "FRAMING",      text: "The joke groups unlike grievances together" },
      { x:  8, y: 42,   label: "ABSENCE",      text: "The post names no one. The only face shown belongs to one man, and the list sits above him" },
      { x:  8, y: 50,   label: "TECHNIQUE",    text: "A network has commissioned a series about the public's reaction to athletes. The reaction is the product" },
      { x:  8, y: 62,   label: "FOREGROUND",   text: "One familiar face is enough for me" },
      { x:  8, y: 74.5, label: "MEASUREMENT",  text: "870K views, 16K likes, 617 reposts, 30 replies" },
      { x: 80, y: 79,   label: "SURROUNDINGS", text: "My feed offers another kind of entertainment" }
    ],

    record: "On September 23, 2026, at 8:10 a.m., I took this screenshot at home " +
            "while drinking my morning coffee. I did not read through who would " +
            "appear in the series before capturing it, and I did not check any of " +
            "the claims made in the commentary above it.",

    remark: "A documentary about disliked athletes seems to assume that having an " +
            "opinion about someone means wanting to spend more time with them. The " +
            "announcement itself is worth pausing on: a network has commissioned a " +
            "series in which the public's reaction is the subject rather than " +
            "anything the athletes did. That is close to what this collection has " +
            "been documenting, except here it has been sold as entertainment. Seeing " +
            "one of the Paul brothers had the opposite effect on me; I already knew I " +
            "was not particularly interested. The commentary above reinforced that " +
            "impression, although it names nobody, I did not investigate its claims, " +
            "and the only person pictured is the one the announcement happens to " +
            "illustrate. The counts are worth noting too. Sixteen thousand likes " +
            "against thirty replies is the shape my funny captures make, not my " +
            "angry ones. I was being invited to be indignant and declined; most " +
            "people seem to have treated it as a joke. This belongs in the collection " +
            "because inflammatory material does not always produce an intense " +
            "response from me. Sometimes it just gets dismissed. The post underneath " +
            "offered something more amusing, and I expect that subject to keep " +
            "returning as its release approaches."
  },
     ,{
    id:    "030",
    week:  5,
    date:  "2026-09-24",
    time:  "18:06",
    title: "Are You Serious?",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-030.png",
    alt:   "An X post shows a footballer aiming a corner flag like a weapon during a celebration, captioned with a reference to a booking, beneath an Al Jazeera live banner and above a Kalshi advertisement offering up to two thousand dollars with a sign-up code.",
    tags:  ["football", "israel-palestine", "kalshi", "the-second-item", "always-live", "borrowed-frame", "thread"],
    demand:   "provoke",
    obscured: false,
    cutOff:   false,

    preview: "My disbelief was directed at the celebration. That does not mean I " +
             "thought the referee was making a geopolitical statement.",

    pins: [
      { x: 60, y: 20,   label: "INTERRUPTION", text: "The live row carries a second item now, two faces instead of a broadcast" },
      { x: 86, y: 25.7, label: "SOURCE",       text: "French broadcast footage, clipped by one account, posted by another" },
      { x:  8, y: 29,   label: "FRAMING",      text: "Nationality is the first word, and it frames everything after it" },
      { x:  8, y: 36,   label: "ABSENCE",      text: "The caption trails off before giving the referee's reason" },
      { x:  8, y: 43,   label: "FOREGROUND",   text: "My disbelief starts with the celebration itself" },
      { x:  8, y: 54.5, label: "MEASUREMENT",  text: "124K views, 979 likes, 130 reposts. The reply counter is redrawing and unreadable" },
      { x: 65, y: 59,   label: "SURROUNDINGS", text: "The same advertiser, the same slot" },
      { x: 78, y: 72,   label: "EVIDENCE",     text: "Trade on sports, then $55 with a code, now up to $2,000. The same account, sixteen days apart" }
    ],

    record: "On September 24, 2026, at 6:06 p.m., I captured this while hanging out " +
            "at my girlfriend's house. A football clip appeared above a Kalshi " +
            "advertisement.",

    remark: "My first reaction to the celebration was, are you serious? Given the " +
            "Israel-Palestine conflict, pretending to fire a weapon felt incredibly " +
            "tone deaf to me. But my understanding was that the second yellow " +
            "concerned removing the corner flag, which made the discussion I " +
            "encountered about the booking feel tangled up with a different " +
            "argument. I can object to the celebration while still wanting people to " +
            "distinguish their political interpretation from the referee's reason for " +
            "penalizing it. The caption does not help with that. It begins with " +
            "nationality, mentions the booking second, and trails off before saying " +
            "why the card was shown, which leaves the connection for me to make " +
            "rather than making it. Below that, Kalshi offers an incentive to trade " +
            "on sports. It is the same account I first captured offering nothing but " +
            "its own name: trade on crypto, then trade on sports, then fifty-five " +
            "dollars with a code, now up to two thousand. Sixteen days, one slot, and " +
            "the number keeps going up. Apparently having an emotional investment in " +
            "football still leaves room for a financial one."
  },
     ,{
    id:    "031",
    week:  5,
    date:  "2026-09-25",
    time:  "08:32",
    title: "Picking Up Where We Left",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-031.png",
    alt:   "An X feed shows a quote post disputing a description of a footballer's corner-flag celebration, quoting a caption that gives the referee's reason, with the same broadcast clip captured the previous day, followed by a partially visible Kalshi FC post mocking Vinicius.",
    tags:  ["football", "israel-palestine", "kalshi-fc", "always-live", "borrowed-frame", "thread"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I spent last night engaging with this argument, and it was waiting for " +
             "me after breakfast. My capture rule changes what I select, but it does " +
             "not erase what I do between captures.",

    pins: [
      { x: 89, y: 30,   label: "FOREGROUND",  text: "The rebuttal keeps the argument centered on intent" },
      { x:  8, y: 38,   label: "FRAMING",     text: "Today the caption supplies the reason yesterday's left out, and ends in emoji that restate it" },
      { x:  8, y: 47,   label: "EVIDENCE",    text: "The same footage as yesterday, under a different person's name" },
      { x:  8, y: 58,   label: "ABSENCE",     text: "Neither caption mentions removing the corner flag" },
      { x:  8, y: 67.7, label: "MEASUREMENT", text: "270K views, 7.2K likes, 140 reposts, 107 replies. Yesterday's version of the same clip reached half as many" },
      { x: 79, y: 72,   label: "SOURCE",      text: "This time I follow the account underneath, and it is selling nothing" }
    ],

    record: "On September 25, 2026, at 8:32 a.m., I captured this at home after " +
            "breakfast while relaxing before my day off. I had engaged extensively " +
            "with discussion of the same celebration the previous evening. Of the " +
            "accounts shown, I follow only Kalshi FC.",

    remark: "The celebration returned the next morning with an argument about what " +
            "the player was pretending to do. To me, that reframing encouraged " +
            "another round of disagreement while leaving out what I understood to be " +
            "the separate issue of removing the corner flag. What interests me more " +
            "is the difference between the two days. Yesterday's caption stopped " +
            "before saying why the card was shown; this one says the referee thought " +
            "he was mimicking a gun, and then repeats that claim in emoji. The " +
            "footage is the same both times, down to the broadcaster's watermark, " +
            "but yesterday it carried one person's name across the bottom and today " +
            "it carries another's. The fuller version also traveled further: two " +
            "hundred and seventy thousand views against yesterday's hundred and " +
            "twenty-four. Having spent time engaging with the discussion the night " +
            "before, I was not surprised to encounter it again, although that alone " +
            "cannot establish why X selected it. Below it, Kalshi FC made fun of one " +
            "of my least favorite players, giving me an easy change of mood. In the " +
            "previous capture Kalshi appeared with a direct financial offer; here an " +
            "account I choose to follow earns my attention through a football joke."
  },
     ,{
    id:    "032",
    week:  5,
    date:  "2026-09-26",
    time:  "20:03",
    title: "Club Before Country",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-032.png",
    alt:   "An X feed shows a parody account's translated post praising Barcelona's contribution to Spain above a player-rating lineup graphic, with an active phone timer at the top and a partially visible Novig betting advertisement below.",
    tags:  ["barcelona", "international-football", "novig", "the-second-item", "always-live", "borrowed-frame", "thread"],
    demand:   "amuse",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "I dislike international breaks, but I will gladly make time for " +
             "Barcelona praise. Novig will have to compete with that and the pasta.",

    pins: [
      { x: 48, y: 6,    label: "RECORD",       text: "The timer is for the pasta. X has my attention, but it has to share" },
      { x: 75, y: 30,   label: "SOURCE",       text: "The app tells me this is a parody account and that these are not the original words" },
      { x:  8, y: 36,   label: "FRAMING",      text: "Club loyalty decides how I read this performance" },
      { x:  8, y: 50,   label: "EVIDENCE",     text: "Someone else's ratings, screenshotted in as proof" },
      { x:  8, y: 60,   label: "FOREGROUND",   text: "International duty still gives me something to celebrate" },
      { x:  8, y: 77.5, label: "MEASUREMENT",  text: "59K views, 2.8K likes, 84 reposts, 26 replies" },
      { x: 62, y: 82,   label: "SURROUNDINGS", text: "A fifth betting company, new to me, offering $25 in credits to start" }
    ],

    record: "On September 26, 2026, at 8:03 p.m., I took this screenshot while " +
            "cooking pasta with my girlfriend. The active timer at the top of the " +
            "screen was for the pasta. I do not follow any of the accounts shown.",

    remark: "I can dislike international breaks and still enjoy seeing Barcelona's " +
            "players perform well for Spain. This post gives me exactly that " +
            "opening, turning a national-team performance into something I can " +
            "appreciate through my club loyalty. Two things in the frame should have " +
            "slowed me down and did not. X labels the account as a parody, and " +
            "labels the caption as translated from Spanish, so the name is not a " +
            "person and the words are not the ones that were written. I read both " +
            "lines and went to the joke anyway. The evidence underneath is also " +
            "somebody else's: a ratings card from another service, screenshotted in " +
            "to support the claim. Novig appears below with a familiar invitation " +
            "from a company I had never heard of, which makes five now, and my " +
            "enthusiasm for football still does not translate into wanting to bet on " +
            "it. The pasta timer adds something neither post accounts for: I am also " +
            "making dinner with my girlfriend. X has some of my attention here, but " +
            "it has to share."
  },
     ,{
    id:    "033",
    week:  5,
    date:  "2026-09-27",
    time:  "09:41",
    title: "Hard to Cheer",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-033.png",
    alt:   "An X post criticizes a celebration beside a video still of USC football players near an end zone, beneath an Al Jazeera live banner and above an A24 documentary advertisement.",
    tags:  ["usc-football", "player-safety", "celebrations", "always-live", "thread"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "Last night I kept engaging because this bothered me. This morning the " +
             "same subject was waiting, much like the earlier argument over the " +
             "corner-flag celebration.",

    pins: [
      { x: 89, y: 30,   label: "FRAMING",      text: "Agreement keeps me engaged with an upsetting subject" },
      { x:  8, y: 38,   label: "FOREGROUND",   text: "My enjoyment stops at celebrating another player's injury" },
      { x:  8, y: 48,   label: "ABSENCE",      text: "The person I am worried about is outside this frame" },
      { x:  8, y: 57,   label: "MEASUREMENT",  text: "1.7M views, 7.5K likes, 959 reposts, 317 replies. Twenty-four likes per reply, where last week's political joke ran past three thousand" },
      { x: 55, y: 61.5, label: "SURROUNDINGS", text: "Not a wager this time, but still a sale — a film called You Can See Everything, under a complaint about what this frame leaves out" }
    ],

    record: "On September 27, 2026, at 9:41 a.m., I captured this while hanging out " +
            "in bed at home. I had interacted extensively with posts about the hit " +
            "the previous night. I do not follow any of the accounts shown.",

    remark: "I like football, but moments like this make me uncomfortable with what " +
            "I am watching for entertainment. The celebration after the hit bothered " +
            "me because I was thinking about what an injury could mean for the other " +
            "player long after the game ended. He is not in the video. The complaint " +
            "is about how people behaved toward someone the frame does not show, " +
            "which is most of why the clip is hard to watch. Unlike posts that draw " +
            "me in through disagreement, this one echoes my concern and still brings " +
            "me back into an upsetting discussion. The replies bear that out: three " +
            "hundred and seventeen of them against seven and a half thousand likes, " +
            "where the political joke I captured five days ago collected thirty-nine " +
            "replies against a hundred and twenty-two thousand. People argue with " +
            "this kind of post and pass the other kind along. I had already given the " +
            "subject plenty of attention the night before, so its return felt " +
            "familiar after the corner-flag controversy, even though I cannot " +
            "establish why X selected it. The slot underneath sold me a film rather " +
            "than a bet. Sports keeps dominating these captures, but the shift from " +
            "enjoying Barcelona's performance to worrying about a player's future " +
            "shows how little the topic alone says about the experience."
  },
     ,{
    id:    "034",
    week:  6,
    date:  "2026-09-28",
    time:  "10:01",
    title: "Right Sport, Wrong Team",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-034.png",
    alt:   "An X feed shows a post quoting song lyrics in capitals with rows of crying emojis above a large Fanatics advertisement featuring Detroit Lions clothing from an NFL and lululemon collection, with both posts' engagement counts visible.",
    tags:  ["clairo", "fanatics", "nfl", "advertising", "thread"],
    demand:   "sell",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "The second item was the first thing I noticed. Fanatics got my interest " +
             "in football right and my team wrong.",

    pins: [
      { x: 76, y: 18.5, label: "ABSENCE",      text: "Someone else's lyrics, with nobody credited" },
      { x: 68, y: 39,   label: "SURROUNDINGS", text: "A different product occupies the familiar sales slot" },
      { x:  8, y: 43.4, label: "FRAMING",      text: "Your team, your style — addressed to a fan of a different team" },
      { x:  8, y: 55,   label: "FOREGROUND",   text: "Second in order, first to catch my eye" },
      { x:  8, y: 70,   label: "TECHNIQUE",    text: "An NFL and lululemon collection, sold by Fanatics, officially licensed. Four brands in one tile" },
      { x:  8, y: 89,   label: "MEASUREMENT",  text: "The ad: 4.3M views, 75 likes. The post above it: 588K views, 60K likes. Seven times the reach, and almost nobody reacted" }
    ],

    record: "On September 28, 2026, at 10:01 a.m., I captured this at home in my " +
            "kitchen after eating breakfast. I do not follow any of the accounts " +
            "shown. I stayed only briefly, took the screenshot, and left the app.",

    remark: "Song lyrics were a change from the sports posts that had been " +
            "dominating my feed, but the Fanatics advertisement was where my eyes " +
            "went first. The first post still determines what I capture, while the " +
            "size and placement of what follows can determine what I actually " +
            "notice. As a Seahawks fan, being offered Lions gear made the " +
            "advertisement feel broadly relevant and personally off. That mismatch " +
            "makes me question how closely the advertising matches the interests " +
            "reflected elsewhere in my feed, although this screenshot cannot explain " +
            "how the ad was selected. The two sets of counters are the most " +
            "interesting thing here. The advertisement reports four point three " +
            "million views and seventy-five likes. The post above it reports five " +
            "hundred and eighty-eight thousand views and sixty thousand likes. The " +
            "paid item reached seven times as many people and produced almost no " +
            "response at all. It got my attention without giving me much reason to " +
            "stay, let alone shop, and apparently that is true of nearly everyone " +
            "else it reached."
  },
     ,{
    id:    "035",
    week:  6,
    date:  "2026-09-29",
    time:  "19:15",
    title: "Already Sold",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-035.png",
    alt:   "An X feed shows a fan account relaying reported GTA 6 features credited to Game Informer, illustrated with watermarked game imagery, beneath an Al Jazeera live banner and above a partially visible quote post defending the game against criticism.",
    tags:  ["gta6", "gaming", "anticipation", "always-live", "borrowed-frame", "thread"],
    demand:   "sell",
    obscured: false,
    cutOff:   false,

    preview: "I opened X to get a screenshot and found more reasons to want something " +
             "I already wanted. Apparently, even the wind deserves a preview.",

    pins: [
      { x: 86, y: 25.7, label: "SOURCE",       text: "A magazine's preview, relayed by a fan account, illustrated with the magazine's own images" },
      { x:  8, y: 35,   label: "FRAMING",      text: "Technical detail gives my anticipation somewhere to go" },
      { x: 73, y: 43,   label: "ABSENCE",      text: "I captured and annotated a post I had not finished reading" },
      { x:  8, y: 58,   label: "FOREGROUND",   text: "I need very little convincing here" },
      { x:  8, y: 74.3, label: "MEASUREMENT",  text: "263K views, 6.9K likes. Yesterday's paid advertisement reached sixteen times as many people and collected seventy-five" },
      { x: 72, y: 78.8, label: "SURROUNDINGS", text: "The next post gives my enthusiasm an opponent" }
    ],

    record: "On September 29, 2026, at 7:15 p.m., I took this screenshot while " +
            "hanging out at my girlfriend's house. I opened X because I realized I " +
            "still needed a capture. The first post's text was collapsed behind a " +
            "Show more link, and I did not expand it before capturing.",

    remark: "I am already sold on GTA 6, but I am still eager for details that give " +
            "me more to anticipate. A post about its wind system can hold my " +
            "attention because I bring that excitement with me; it does not have to " +
            "build my interest from scratch. None of this is labeled as " +
            "advertising. The information is a magazine's preview, the pictures are " +
            "that magazine's own promotional images, and the account passing both " +
            "along is a fan. Yesterday's capture had an advertisement that announced " +
            "itself, reached four point three million people and collected " +
            "seventy-five likes. This one reached two hundred and sixty-three " +
            "thousand and collected nearly seven thousand. The thing that says it is " +
            "selling gets scrolled past; the thing that does not gets believed. The " +
            "next post shifts from features to defending the game against criticism, " +
            "placing me on a side I am already inclined to support. Capturing the " +
            "whole frame shows two ways of sustaining my interest in the same " +
            "product: give me something to look forward to, then something to defend."
  },
     ,{
    id:    "036",
    week:  6,
    date:  "2026-09-30",
    time:  "11:43",
    title: "Saved by the Doorbell",
    dek:   "A single scroll. A larger story.",
    image: "images/capture-036.png",
    alt:   "An X feed shows a political quote-post exchange about United States intervention in Latin America with a cartoon reaction image, beneath a purple live listening-room banner and above a partially visible Kalshi advertisement.",
    tags:  ["us-foreign-policy", "kalshi", "the-second-item", "always-live", "thread"],
    demand:   "provoke",
    followed: false,
    obscured: false,
    cutOff:   false,

    preview: "X had an argument ready for me, but the store doorbell had other plans. " +
             "When I returned, the post was gone from my feed.",

    pins: [
      { x: 14, y: 6,    label: "RECORD",       text: "Captured on my work break. When I came back, this post was gone from my feed" },
      { x: 50, y: 16.7, label: "INTERRUPTION", text: "The live slot is a listening room today, not a broadcast" },
      { x: 82, y: 25.7, label: "SOURCE",       text: "Three accounts deep, and the first one is not here" },
      { x:  8, y: 33,   label: "FRAMING",      text: "Each caption treats the other position as obvious nonsense" },
      { x:  8, y: 50,   label: "FOREGROUND",   text: "The kind of argument I would normally join" },
      { x:  8, y: 71.5, label: "MEASUREMENT",  text: "1.7M views, 186K likes, 18K reposts, 453 replies" },
      { x: 65, y: 76,   label: "SURROUNDINGS", text: "Politics above, the same $2,000 offer below. Six days unchanged" }
    ],

    record: "On September 30, 2026, at 11:43 a.m., I took this screenshot in the back " +
            "room during my first break at work, with about twenty minutes left in my " +
            "capture window. The doorbell rang, and I returned to work. When I " +
            "reopened X, the post was no longer in my feed. I do not follow the " +
            "accounts in the posts and am unsure whether I follow anyone featured in " +
            "the live banner.",

    remark: "After several sports-heavy captures, my feed returned to a political " +
            "disagreement presented through a mocking cartoon exchange. I would " +
            "normally spend time with something like this, but I had opened X to meet " +
            "my capture deadline, and the doorbell cut that visit short. What makes " +
            "this entry worth keeping is what happened next: when I opened the app " +
            "again, the post was not there. The screenshot is now the only place I " +
            "can look at it. That is the simplest argument for doing any of this. A " +
            "feed is not a thing you can return to, so the only way to examine one " +
            "twice is to take it out of the feed first. Like the pasta timer in an " +
            "earlier capture, the interruption also shows that my attention answers " +
            "to things outside the app. Above the post, the live slot had become a " +
            "listening room rather than a news channel, with forty-three people in it " +
            "and a title I could not finish reading. Below it, Kalshi repeated the " +
            "same two-thousand-dollar offer I captured six days ago, in football " +
            "language, underneath an argument about foreign policy. Neither the " +
            "argument nor the advertisement kept me from getting back to work."
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
