# How I Built a Patent Translation System That Moves My Attention to Judgment

I have spent years reviewing other people's patent translations — more than 10 million words so far, across medical devices, mechanical engineering, and a handful of other technical fields. Somewhere in all that reading, a pattern became impossible to ignore: the translations that failed a client rarely failed because of a hard judgment call. They failed because of something mechanical and small — not a hard call anyone agonized over, but the kind of slip that gets missed when the same document is hundreds of pages long.

That observation is why I built the system I now use for every project. Not to have AI translate my patents for me. To move my attention off the mechanical work entirely, so I can spend it on the 2 things that actually decide whether a translation is filing-ready: is it technically accurate, and is every ambiguity in the source resolved on purpose rather than by accident.

## 3 failure types, one root cause

Reviewing other translators' work for years surfaces the same 3 failure types, in the same order of severity.

Omission comes first. A word, a clause, sometimes a full paragraph goes missing between source and target. For a patent, a dropped limitation can change claim scope — which changes what the claim covers, and what it doesn't, at the exact moment an examiner or a competitor reads it. This is the failure that costs the most trust, and it is also the easiest to prevent mechanically: a machine can compare source and target and flag what's missing far more reliably than a tired human eye at 6pm.

Inconsistency comes second. The same source term rendered 2 different ways inside one document. In a specification, that reads as sloppy. In a claim, it can read as 2 different elements — exactly the kind of ambiguity an examiner can raise as a rejection during prosecution, or opposing counsel can raise in litigation or a post-grant proceeding later. Also mechanically preventable, given a system that tracks every term it has already committed to.

Differentiation failure comes third: the reverse problem, where 2 different source terms — or the same term in 2 genuinely different contexts — get collapsed into one translation when they should stay distinct. This one takes more care to encode than the first 2, but a well-built glossary system still catches most of it before a human ever needs to weigh in.

Catching all 3 doesn't require legal judgment or technical expertise — it requires attention, and attention is a finite resource. A translator typing a first draft by hand tops out at 2,500 to 3,000 words a day before quality starts to slip.

That's the problem I built the system to solve. Not "translate faster." Stop spending review attention on problems a machine can catch, so all of it goes toward the problems only a human can catch.

## The mechanical layer the system now owns

The system carries a multi-sheet glossary, built up over 7 years and now split by domain — medical devices, mechanical engineering, and several others — so a term correct in one field doesn't leak into a case where it's wrong. Each entry also records the wrong translations I have seen used for that term before, not just the right one. Telling a system what not to do turns out to matter as much as telling it what to do.

Before translation starts on a new project, the system extracts every recurring technical term from the source and I lock in the translation for each one — a step I do with the client if they're supplying their own glossary, and on my own judgment if they aren't. That locked list is enforced across the entire document from the first sentence to the last, so a term introduced on page 1 doesn't drift by page 40 — any deliberate exception, where the same source term needs 2 different translations in 2 different contexts, gets tracked as a rule, not left to chance.

The system is also built to carry forward translation memory for a returning client — prior phrasing, term choices, sentence structure — so a fifth filing would benefit from everything captured on the first 4. That's the design intent. Most of my work today is still someone's first project with me; the system is what makes a tenth project as consistent as the first, once there is a tenth.

Underneath all of this sits a rules file that has grown continuously over 7 years of real jobs — every judgment call that came up more than once, recorded so it doesn't have to be re-decided from scratch each time. The system itself now runs to more than 26,000 lines — not because size is the point, but because the mechanical layer keeps getting more complete, which means less of it needs my attention on any given project.

## Confidentiality

This usually means handling an unpublished invention. Everything — source text, drafts, the glossary itself — stays on infrastructure that keeps the data in Japan and out of any model's training set, with an NDA available before anything gets sent. My [process page](/how-i-work/) has the full detail.

## 2 passes before I ever open the document

Once a first draft exists, it goes through 2 rounds of checking before I read a single sentence.

The first pass is mechanical, rule-based, and fast: term consistency across the document, counter-word and numeral formatting, punctuation conventions, and a check against every "do not use this translation" entry in the glossary. Anything a rule can catch gets caught here, before it ever reaches me.

The second pass has the AI re-read the entire document for meaning, not just form — checking whether a translated clause still carries the technical sense of the source, flagging anything uncertain by severity. High-severity issues get re-translated automatically; lower-severity ones get flagged for me to look at, ranked by how much they matter. This isn't "AI checking AI" as a piece of theater — it's triage. By the time a document reaches me, the mechanical noise is gone, and my attention goes to the highest-stakes ambiguity first, not spread evenly across every sentence regardless of how much any one of them matters.

None of this is unusual by itself — a glossary, a translation memory, a 2-pass check. What actually separates one translator's output from another's is what happens after.

## Where the system stops, and I start

Here is the part that matters most to anyone deciding whether to trust this workflow: what the system does not do.

Cross-checking reference signs against the drawings — confirming that "12" in the text is the same "12" that the figure shows, consistently, throughout the document — is not automated. I do that by hand, on every project. Get it wrong and 2 different reference signs get read as 2 different elements, or the reverse — one element quietly split into 2. Either version typically surfaces as a drawing or specification objection during prosecution and, if the confusion is severe enough to affect how a claim term itself gets read, a definiteness dispute later. It is one of the 2 or 3 failure points that cause real damage in mechanical and medical device patents, and I have not found a version of automating it that I trust enough to remove myself from the loop.

Final technical accuracy — whether the translation actually represents the invention the way the inventor meant it — is my call, not the system's. The system can tell me a sentence is grammatically sound and terminologically consistent. It cannot tell me whether the underlying technical relationship is correctly represented; that judgment stays with me.

The same is true for legal nuance in claim language, where a single word choice changes the scope of a claim. A common example: a claim introduces "a plurality of fastening members," and 3 paragraphs later the source refers back to "the aforementioned fastening member" — singular, no clear signal whether it means one specific member from the plurality or the group as a whole. A mechanical translation carries that ambiguity straight into English, where it becomes a genuine antecedent-basis problem in prosecution. Catching it means reading the surrounding claims for what the inventor actually meant, then choosing English phrasing that preserves the intended scope instead of just mirroring the ambiguity. That's not a rule a glossary can encode. It's the kind of decision the system flags for my attention and I make.

## The judgment I write down

The same principle applies to source-text problems generally. When the system suspects a typo or an ambiguous passage in the original, it flags the suspicion. It does not decide what the source actually meant. I do, and I write that decision down.

That written record becomes translation notes, delivered with every project: the source issues I caught, and how I read the passages that could have gone more than one way. A client reading those notes sees exactly where I exercised judgment, and my reasoning for it — not a black box, and not a claim that everything in the source was perfectly clear.

That judgment has one name attached to it, not a team's — one accountable signature instead of a queue of interchangeable reviewers. That's a tradeoff, not a hidden risk, and it's worth being upfront about — including the practical side of it: I'm 1 practitioner, not a bench of them, so a hard deadline is a conversation to have before the project starts, not after.

## Where my time actually goes now

I have not stopped doing the mechanical work. I have moved my attention off of it.

Before, a meaningful share of my working hours went to typing, to hunting for how I translated a term 3 pages earlier, to catching my own inconsistencies before a second reviewer had to. Now that time goes to the 2 things that were always the real job: technical accuracy, and running down every place the source leaves something unstated, until I'm confident it's been resolved on purpose. In practice, that means more time re-reading claims against the specification and the drawings, not less — the system gave that time back; it didn't take it away.

I should be honest about what this doesn't fix. The AI drafting layer can still produce a wrong answer with total confidence — that risk doesn't go to zero, and I don't pretend it does. The 2-pass check and the rules file reduce how often that happens; they don't eliminate it. That's exactly why the human review step isn't optional.

That's why I built it this way: not because the system is smart, but because I wanted a way to not have to re-decide, under deadline pressure, something I'd already worked out once.

## What this means if you're evaluating a translator

If you're deciding how to handle a Japan filing from outside Japan, the choice gets framed as human translation versus AI translation. I don't think that's the real choice.

The real choice is whether the mechanical layer of a translation — term consistency, formatting, catching what a machine can catch — is handled by a system built specifically for patents, refined over years of real cases, or improvised project by project. And whether the attention that frees up gets spent on technical accuracy and ambiguity resolution, or gets absorbed back into typing.

Most patent translators handle that layer the informal way: a glossary in a spreadsheet, consistency tracked by memory. I built a dedicated system instead, because memory alone doesn't survive a 12,000-word claim set.

Where a translator's attention goes is the actual product. Mine goes to technical accuracy and ambiguity, not typing. If that's the kind of translator you're looking for, my [process page](/how-i-work/) walks through the workflow in more detail, and I'm glad to answer questions directly before you commit to anything.
