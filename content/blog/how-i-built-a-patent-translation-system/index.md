---
title: "Why I Built My Own Patent Translation System, and What Only I Can Still Do"
seoTitle: "Why I Built My Own Patent Translation System"
description: "With 7 years of patent translation experience, I built my own AI-assisted system this year, and my own judgment still has to take over where it stops."
heroImage: "/blog-images/2026-07-how-i-built-a-patent-translation-system-hero.jpg"
heroImageAlt: "A person typing on a laptop keyboard, working at a desk"
summary: |
  I built an AI-assisted patent translation system this year to eliminate the mechanical errors and inconsistencies behind most translation failures.

  The system owns that mechanical layer completely, but a mismatched reference sign, final technical accuracy, and legal ambiguity in claim language still require my judgment.

  This is what the system does, what it still can't do, and why about 6 years spent reviewing other translators' work is what makes the difference now.
date: 2026-07-21
draft: false
---

I have spent years reviewing other people's patent translations, **more than 10 million words** so far, across medical devices, mechanical engineering, and a handful of other technical fields. Somewhere in all that reading, a pattern became impossible to ignore: the translations that failed a client rarely failed because of a hard judgment call. They failed because of something mechanical, not a hard call anyone agonized over, but the kind of slip that gets missed when the same document is hundreds of pages long.

That observation is why I built the system I now use for every project. The goal was not to have AI translate my patents for me, but to move my attention off the mechanical work entirely, so I can spend it on the two things that actually decide whether a translation is filing-ready:
- Is it technically accurate?
- Is every ambiguity in the source resolved on purpose, not by accident?

## 3 failure types, one root cause

Reviewing other translators' work for years surfaces the same three failure types, in the same order of severity.

**Omission** comes first. A word, a clause, sometimes a full paragraph goes missing between source and target. For a patent, a dropped limitation can change claim scope, which changes what the claim covers, and what it doesn't, at the exact moment an examiner or a competitor reads it. **This is the failure that costs the most trust**, and it is also the easiest to prevent mechanically: a machine can compare source and target and flag what's missing far more reliably than a tired human eye at 6pm.

**Inconsistency** comes second. The same source term rendered two different ways inside one document. In a specification, that reads as sloppy. In a claim, it can read as two different elements: exactly the kind of ambiguity an examiner can raise as a rejection during prosecution, or opposing counsel can raise in litigation or a post-grant proceeding later. Also mechanically preventable, given a system that tracks every term it has already committed to.

**Differentiation failure** comes third: the reverse problem, where two different source terms, or the same term in two genuinely different contexts, get collapsed into one translation when they should stay distinct. This one takes more care to encode than the first two, but a well-built glossary system still catches most of it before a human ever needs to weigh in.

Catching all three doesn't require legal judgment or technical expertise. It requires attention, and attention is a finite resource.

That's the problem I built the system to solve, not to translate faster, but to **stop spending review attention on problems a machine can catch**, so all of it goes toward the problems only a human can catch.

## The mechanical layer the system now owns

The system carries a multi-sheet glossary, built this year on top of **7 years of patent translation experience**, now split by domain: medical devices, mechanical engineering, and several others, so a term correct in one field doesn't leak into a case where it's wrong. Each entry also records the wrong translations I have seen used for that term before, not just the right one. Telling a system what not to do turns out to matter as much as telling it what to do.

Before translation starts on a new project, the system extracts every recurring technical term from the source and I lock in the translation for each one, a step I do with the client if they're supplying their own glossary, and on my own judgment if they aren't. That locked list is enforced across the entire document from the first sentence to the last, so a term introduced on page 1 doesn't drift by page 40. Any deliberate exception, where the same source term needs two different translations in two different contexts, gets tracked as a rule, not left to chance.

**The system is also built to carry forward translation memory for a returning client**: prior phrasing, term choices, sentence structure, so a fifth filing would benefit from everything captured on the first four. That's the design intent. Most of my work today is still someone's first project with me, but the system is what makes a tenth project as consistent as the first, once there is a tenth.

Underneath all of this sits a rules file, written this year but drawing on 7 years of real jobs: every judgment call that came up more than once, finally recorded so it doesn't have to be re-decided from scratch each time. The mechanical layer keeps getting more complete with every project, which means less of it needs my attention on the next one.

None of it (source text, drafts, or the glossary itself) ever touches a model's training set; my [process page](/how-i-work/) covers the data-security setup in full.

## 2 passes before I ever open the document

Once a first draft exists, it goes through two rounds of automated checking before I read a single sentence:
- **Mechanical pass**: term consistency, numeral and punctuation formatting, and a check against every "do not use this translation" entry in the glossary
- **AI re-read**: checks whether each clause still carries the technical sense of the source, flags anything uncertain by severity, and auto-corrects the highest-severity issues

**By the time a document reaches me, the mechanical noise is gone, and my attention goes to the highest-stakes ambiguity first.**

A glossary, a translation memory, a 2-pass check: none of this is unusual by itself. **What actually separates one translator's output from another's is what happens once the mechanical work is done.**

## Where the system stops, and I start

Here is the part that matters most to anyone deciding whether to trust this workflow: what the system does not do.
- Cross-checking reference signs against the drawings
- Confirming the translation represents the invention the way the inventor meant it
- Resolving referential ambiguity in claim language that changes claim scope

I did not come to this from engineering. I studied English at Sophia University's Faculty of Foreign Studies, no technical background at all. A part-time clerical job at a patent firm in my last year of university, taken deliberately to strengthen my job search, gave me an early, light brush with patents before I joined a Japanese patent translation company in 2019. **About 80% of my time there was reviewing** translations by colleagues and outside contractors, not translating myself. That's where the 10 million words in the opening paragraph actually comes from. It's also where I learned, case by case, what a system can flag and what it can't: a reading skill, not a technical one, is what catches an antecedent slipping loose or a modifier drifting onto the wrong noun.

![A hand holding a pen circles a reference sign on a technical patent drawing, checking it against the printed specification beside it](/blog-images/2026-07-how-i-built-a-patent-translation-system-reference-check.jpg "Cross-checking a reference sign against the drawing by hand")

**Cross-checking reference signs against the drawings**, confirming that "12" in the text is the same "12" that the figure shows, consistently, throughout the document, is not automated. I do that **by hand, on every project**. Get it wrong and two different reference signs get read as two different elements, or the reverse: one element quietly split into two. Either version typically surfaces as a drawing or specification objection during prosecution and, if the confusion is severe enough to affect how a claim term itself gets read, a definiteness dispute later. It is one of the two or three failure points that cause real damage in mechanical and medical device patents, and I have not found a version of automating it that I trust enough to remove myself from the loop.

**Final technical accuracy**, whether the translation actually represents the invention in the way the inventor meant it, **is my call, not the system's**. The system can tell me a sentence is grammatically sound and terminologically consistent. It cannot tell me whether the underlying technical relationship is correctly represented; that judgment stays with me.

The same is true for legal nuance in claim language, where a single word choice changes the scope of a claim. Here is the kind of case that reading experience catches and a system alone would not: a claim introduces "a plurality of fastening members," and three paragraphs later the source refers back to "the aforementioned fastening member," singular, with no clear signal whether it means one specific member from the plurality or the group as a whole. A mechanical translation carries that ambiguity straight into English, where it becomes a genuine antecedent-basis problem in prosecution. Catching it means **reading the surrounding claims for what the inventor actually meant**, then choosing Japanese phrasing that preserves the intended scope instead of just mirroring the ambiguity. That's not a rule a glossary can encode. It's the kind of decision the system flags for my attention, and **it's a call I've made hundreds of times before**.

## Where the judgment actually lives

It would be easy to point to the translation notes I deliver with every project, the source issues I caught, the passages that could have gone more than one way, and call that the judgment. It isn't, not really. Flagging a source typo or an ambiguous passage is a report, not a decision.

The real judgment lives in the delivered translation itself, in every sentence of it. The first draft comes from the system, but I read the entire document, start to finish, before it ships: every sentence checked against every other sentence in the same specification, the same claims, the same drawings, so the whole document holds together as one coherent invention instead of a pile of individually correct fragments. That read-through is what turns a machine's output into a translation I put my name on, and the consistency it produces isn't something I write a note about. It is the translation.

That judgment has one name attached to it, not a team's: **one accountable signature instead of a queue of interchangeable reviewers, and that's a tradeoff, not a hidden risk**. Worth being upfront about it, including the practical side: **I'm one practitioner, not a bench of them**, so a hard deadline is a conversation to have before the project starts, not after.

## Where my time actually goes now

The mechanical part is fast. **A first draft, drafted and machine-checked, comes back in about 30 minutes, regardless of document length**: a recent 10,000-word medical device patent took roughly 25 minutes. Before the system, a manual first draft topped out at 2,500 to 3,000 words a day before quality started to slip.

What actually takes time now is the review, and I build in more of it on purpose. **A 5,000-word project ships in 1.5 business days**: the draft and a first review finish the same day, but I hold delivery until the next morning so a second read happens with a clear head instead of a tired one. **A 12,000-word project ships in 3 business days**: review runs at roughly 6,000 to 8,000 words a day, so even at the slower end, two days covers it, and the third day is reserved for that same kind of cooled-off final pass.

None of that extra time is padding. **It's the same discipline the system was built to protect: don't decide something twice, and don't decide it in a hurry, either.**

I should be honest about what the fast part doesn't fix: **the AI drafting layer can still produce a wrong answer with total confidence**. The 2-pass check and the rules file reduce how often that happens; they don't eliminate it. That's exactly why **the human review step carries the final responsibility**.

## What this means if you're evaluating a translator

If you're deciding how to handle a Japan filing from outside Japan, the choice gets framed as human translation versus AI translation, which I don't think is a real choice.

The real choice is whether the mechanical layer of a translation is handled by a system built specifically for patents and refined over years of real cases, or improvised project by project, and whether the person behind it has the specific background to catch what the system can't. Mine is 5 years and 9 months spent reading other translators' work before I ever billed for my own, at a company handling roughly 2 million words of patent content a year. That's not a résumé line I keep by accident. It's the reason **I catch what the system is built to miss**.

Where a translator's attention goes is the actual product. Mine goes to technical accuracy and ambiguity, backed by a specific kind of reading experience most translators in this field haven't put in. If that's the kind of translator you're looking for, my [process page](/how-i-work/) walks through the workflow in more detail, my [background](/about/) has the full track record behind it, and I'm glad to answer questions directly before you commit to anything.
