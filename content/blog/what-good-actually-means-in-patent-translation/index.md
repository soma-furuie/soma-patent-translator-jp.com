---
title: "Four Principles I Never Compromise On in Patent Translation"
seoTitle: "Four Principles I Never Compromise On in Patent Translation"
description: "A good patent translation is not a matter of taste. Four principles define it, and every delivery gets checked against all four before it ships."
heroImage: "/blog-images/2026-08-what-good-actually-means-hero.png"
heroImageAlt: "The words Four Principles, No Exceptions in large serif type, navy and sage green, on a white background"
summary: |
  A patent translation reads like a technical document, is technically accurate, keeps completeness in both directions, and survives a back-translation.

  Break any one of those four principles and the translation fails, no matter how well it satisfies the other three.

  I check every delivery against all four before it ships, because a patent claim does not offer the creative license other translation work rewards.
date: 2026-08-19
draft: false
---

How do you define a good translation? The honest answer changes depending on what the translation is for.

A novel asks a translator to recreate a feeling in a new language, even at the cost of the exact words carrying that feeling in the source. A patent asks for something narrower and less forgiving. What gets filed defines a legal boundary, and a filed boundary has to survive contact with an examiner, a competitor, and eventually a court. In patent translation, good is not a matter of taste. I hold every delivery to four principles, and breaking even one turns a translation into something genuinely harmful, not just imperfect.

## A Technical Document First, Not a Piece of Writing

The first principle is Japanese that reads naturally. Naturalness here has nothing to do with literary elegance or the kind of smooth phrasing that wins praise in other genres. A patent specification only needs to read the way a technical document reads: clearly, without forcing the reader to double back on a sentence to work out what the sentence means.

Japanese patent drafting has its own set of verbs that barely exist outside patent drafting, terms so specific to claim language that a reader outside the field would need a glossary to follow them. I keep this vocabulary to what the technical content actually requires, checking every draft against the same question: would a reader outside this technical field still follow the sentence?

**Break natural readability, and the risk is ambiguity**: a sentence that reads two different ways lets two different examiners land on two different readings of the same claim.

## The Technical Content Has to Be Accurate

The second principle is technical accuracy. A grammatically perfect sentence that misrepresents how a mechanism works is not a good translation, no matter how well the sentence reads. Representing the technical relationship accurately, not just the words describing it, is where subject-matter understanding does the work that [the mechanical parts of a translation workflow](/blog/how-i-built-a-patent-translation-system/) cannot.

Consider a sentence in a specification describing "a primary spring and secondary springs, which provides a biasing force sufficient to overcome friction between a sealing ring and a sleeve during release." In this design, only the secondary springs actually touch the sealing ring. The primary spring belongs to an earlier stage of the mechanism and never contacts the sealing ring at all.

Proximity and grammar disagree with each other here:

- **By position**: "which" reaches back to "secondary springs," the nearer of the two.
- **By verb agreement**: "provides" is singular, and "secondary springs" is plural, so the verb points elsewhere.
- **By mechanism**: only the secondary springs touch the sealing ring, which settles the question grammar alone cannot.

Resolving which spring the sentence actually means takes more than parsing the sentence correctly. It takes knowing which spring touches the sealing ring at all. Getting the claim right meant translating the force to the secondary springs, and flagging the mismatch to the client: "provides" should likely read "provide," agreeing with the plural secondary springs the sentence is actually describing.

A bad source does not excuse a bad translation. When the source itself is wrong, ambiguous, or grammatically defective in a way that changes technical meaning, fixing the defect without a word to the client is not the answer, and neither is translating the defect faithfully into Japanese. The obligation is to catch the defect and report it, so the client decides how to handle it before the translation ships.

**Break technical accuracy, and the claim drifts from what the invention actually does**, and a drifted claim invites an office action or, at worst, a rejection.

## Nothing Added, Nothing Left Out

The third principle is completeness in both directions. Every element in the source has to survive into the target, and nothing gets added that was not there to begin with. I treat all three of the following the same way, as translating that has drifted into rewriting:

- A limitation smoothed over for readability
- A qualifier dropped for feeling redundant
- A clarifying phrase added because it reads easier

**Break completeness, and claim scope moves in a direction nobody intended**: narrower than what the applicant is entitled to, or broader than what the invention actually supports.

## A Translation the Client Can Verify

The fourth principle follows directly from the third. A translation that adds or drops meaning cannot be translated back into the original language and land where the source started. That gap is not a cosmetic flaw. Most of my clients cannot read the Japanese I deliver. A translation capable of surviving a back-translation is the one tool I can hand a client to verify, without reading Japanese, that nothing shifted in transit.

**Break back-translatability, and verification stops being possible**: a client unable to confirm what a translation actually says also cannot tell me what to fix.

## None of the Four Stands on Its Own

The four principles are not independent checkboxes to clear one at a time. A translation can be technically accurate, keep every element intact, and still survive a back-translation, and fail anyway if the Japanese reads like a word-for-word crib instead of a technical document. **Three principles satisfied and one broken is not three-quarters of a good translation.** An examiner still has to read that stilted Japanese without ever seeing the English behind it, and a specification that reads like a translation invites the same scrutiny as one that reads ambiguously.

Meeting the bar takes judgment, sentence by sentence: catching the moment a phrase chosen for readability has drifted from what the source actually said, or the moment fidelity to the source has produced Japanese that no longer reads as a technical document. That judgment, applied to every sentence in a specification, is the actual work.

## Why Patent Translation Does Not Get to Take Creative License

In most translation work, reshaping a sentence for the target reader is a mark of skill. A translator who can drop the source's exact structure and still deliver the same meaning, in language that reads as if written natively, is doing the job well.

A patent claim does not offer that same freedom. The words on the page are the boundary of what the applicant owns. Reshaping the words for elegance risks reshaping the boundary itself, and an examiner, a competitor, or a court will read the filed language, not the intention behind the filed language. That constraint is not a limitation on good translation. For a patent, the constraint is what good translation means.

## What I Check Before Every Delivery Ships

Four principles, checked every time, not consulted occasionally:

1. Does the Japanese hold together as a technical document?
2. Is the technical content right?
3. Does every element survive intact?
4. Could a client trace the translation back to the source without losing anything along the way?

When all four hold at once, a translation is doing its job. When one gives way, I already know where to look.

These four principles are what I check on my own delivery. For what to check on a vendor's, see [four questions to ask before you hire an English to Japanese patent translator](/blog/4-questions-before-you-hire-a-japan-patent-translator/).
