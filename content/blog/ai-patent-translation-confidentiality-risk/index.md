---
title: "Feeding an Unpublished Patent Into Free AI Translation Can Cost You the Patent"
seoTitle: "Why Free AI Translation Can Cost You a Patent"
description: "Free AI translation can train on your unpublished patent and destroy its novelty. My workflow keeps data in Japan, never used to train, and NDA-covered."
heroImage: "/blog-images/2026-07-ai-patent-translation-confidentiality-hero.jpg"
heroImageAlt: "A red padlock resting on a backlit Japanese-layout computer keyboard"
summary: |
  Free AI translation tools can retain or train on what you submit, and for an unpublished patent, that can count as public disclosure before the application is ever filed.

  That exact risk has already played out, from a 2015 Japanese translation-site leak to Samsung's 2023 ChatGPT incident, and U.S. patent counsel now write about it directly.

  This is what that risk looks like, and why it matters for a Japanese filing.

  My own workflow answers it directly: Japan-only processing, no model training, and an NDA on request, so every project stays on the safe side of it.
date: 2026-07-27
draft: true
---

In **2015**, a free Japanese translation site called **Love Honyaku** exposed a stream of confidential documents online, and no one had to hack anything to make it happen. A checkbox that made submitted text publicly viewable was turned on by default, and most users never noticed it was there. Central government ministries, banks, and automakers had internal correspondence indexed by search engines within weeks, alongside personal loan applications, recruiting details, and seminar schedules submitted by ordinary users. Japan's Information-technology Promotion Agency (IPA) issued a formal warning once the scale of the leak became clear.

**A single unchecked default setting, not an attacker, is what turned typed-in text into a public leak.** The fact that a setting, not malicious intent, caused the exposure is what matters here, because the same exposure route is still active today, just wearing a different name: AI translation.

## The same mistake, a modern version

8 years later, the same underlying mistake showed up again, this time inside a company with far more security resources than a free translation site ever had: in **2023**, **Samsung's** semiconductor division allowed employees to use ChatGPT internally, and within 20 days, engineers had caused 3 separate confidentiality incidents:

- Source code from a semiconductor database, submitted to ask ChatGPT for a bug fix
- Yield and defect-detection code, submitted to ask for an optimization
- An internal meeting recording, transcribed and then fed into ChatGPT to draft the minutes

Samsung's response was to ban generative AI tools across the company. The pattern is the same as 2015: a tool built to be helpful, and no one stopping to ask where the input actually goes once it is submitted.

## Why this becomes a patent-novelty problem, not just a confidentiality one

For most business data, an incident like that is a compliance headache. **When an AI tool's retention makes an unpublished invention's text accessible outside the applicant's control, it is the patent's novelty that is actually at risk, not just its confidentiality.**

The 2015 and 2023 incidents above are not identical cases, and the difference matters here. Love Honyaku's exposure was indexed by search engines: genuinely public, accessible to anyone. Samsung's ChatGPT incident is different in kind; there is no confirmed evidence the submitted code ever became accessible outside OpenAI. It demonstrates the retention risk itself, not a proven public disclosure. An AI translation tool sits on the same spectrum: whether using one actually destroys novelty depends on whether the text it retains, logs, or trains on ever becomes accessible outside the applicant's control, not simply on the fact that a copy exists somewhere.

Patent systems, including Japan's, generally require an invention to be novel at the time of filing: not already publicly known or described anywhere, by anyone, in any form. Reasoning from U.S. disclosure and prior-art principles, U.S. patent counsel have already put the more serious end of this risk into writing, in an analysis titled [Accidental AI Forfeiture: How Inputting Data Into AI Can Destroy Patent Rights](https://www.losey.law/accidental-ai-forfeiture-how-inputting-data-into-ai-can-destroy-patent-rights/):

> "an AI platform that retains, logs, or trains on submitted inventor disclosures could constitute a prior disclosure, potentially invalidating the application before it's ever examined."

{{< linkpreview url="https://www.losey.law/accidental-ai-forfeiture-how-inputting-data-into-ai-can-destroy-patent-rights/" title="Accidental AI Forfeiture: How Inputting Data Into AI Can Destroy Patent Rights" domain="losey.law" desc="Legal analysis on how an AI platform that retains, logs, or trains on inventor disclosures can constitute a prior disclosure under patent law." >}}

Japan's Patent Act does offer a partial safety net. **[Article 30](https://www.jpo.go.jp/e/system/laws/rule/other/patent/hatumei_reigai.html)** gives an applicant a 12-month grace period to file after a disclosure made by the inventor or applicant themselves, provided the applicant states the intent to claim the exception at the time of filing, then submits supporting proof within 30 days of the filing date. That can help if the disclosure traces back to the applicant's own AI tool use and the paperwork is filed correctly and on time. It does not help everywhere: the European Patent Convention's novelty standard has no equivalent broad grace period, only narrow exceptions for recognized exhibitions or evident abuse of the applicant's rights, so the same AI-tool exposure that Japan or the US might forgive can still sink the European half of the same filing.

{{< linkpreview url="https://www.jpo.go.jp/e/system/laws/rule/other/patent/hatumei_reigai.html" title="Procedures for Seeking the Application of Exceptions to Lack of Novelty of Invention" domain="jpo.go.jp" desc="Japan Patent Office's official guidance on the Article 30 grace period for novelty-destroying disclosures made by the applicant." >}}

## Regulators and bar associations are reaching a similar conclusion

This is not a risk one law firm invented on its own, even though the frameworks involved are not the same as each other, or as the novelty question above. Patent regulators and bar associations are independently treating AI-tool data handling as a live concern, each from its own angle.

In March 2026, China's patent office (CNIPA) [formally warned against using AI agents to draft patent applications](https://natlawreview.com/article/cnipa-warns-against-using-ai-agents-including-openclaw-drafting-patent-application), citing risks of technical information leakage, AI-generated errors, and bad-faith filings. That warning is about AI-assisted drafting specifically, and it applies to China's own system, not Japan's, but it is still a patent office treating AI-tool data handling as a real risk rather than a theoretical one.

{{< linkpreview url="https://natlawreview.com/article/cnipa-warns-against-using-ai-agents-including-openclaw-drafting-patent-application" title="CNIPA Warns Against Using AI Agents, Including OpenClaw, in Drafting Patent Applications" domain="natlawreview.com" desc="China's patent office formally warns against AI-agent-assisted patent drafting, citing information leakage and accuracy risks." >}}

The American Bar Association reached a related conclusion from the confidentiality side. In [Formal Opinion 512](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf), issued July 29, 2024, the ABA states that lawyers must evaluate the risk that client information could be disclosed to or accessed by others before inputting it into a generative AI tool. For a self-learning tool specifically, the opinion is direct:

> "a client's informed consent is required prior to inputting information relating to the representation into such a GAI tool."

{{< linkpreview url="https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf" title="ABA Formal Opinion 512: Generative Artificial Intelligence Tools" domain="americanbar.org" desc="The American Bar Association's ethics guidance on lawyers' confidentiality duties when using generative AI tools." >}}

The same practical logic extends to anyone working with outside counsel on a filing. If a patent attorney has an ethical duty to evaluate this risk before typing a client's invention into an AI tool, **the translator handling the same invention is a reasonable place to hold to the same practical standard, even without a bar rule requiring it.**

## What "no data retention" actually means in my workflow

This is exactly the mechanism my own translation workflow is built to avoid, and it is worth being specific about how, instead of just asserting it.

- Every draft runs through Claude on AWS Bedrock's Tokyo region
- The text stays in Japan throughout processing; it never crosses a border
- Nothing submitted is ever used to train the underlying model

Staying inside Japan matters for the same reason the rest of this article does: every border a document crosses adds another legal jurisdiction, another set of access rules, and another way the same accessibility risk described above could apply. Keeping translation inside Japan keeps the number of parties who could ever touch the text as small as it can be.

**Amazon Bedrock keeps the input data it processes out of model training entirely and out of model providers' hands**, a policy [AWS documents directly](https://aws.amazon.com/bedrock/security-privacy-responsible-ai), and it can also be [configured for zero data retention](https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html), not just no training use. None of what I translate becomes someone else's training data, and none of it sits around afterward.

{{< linkpreview url="https://aws.amazon.com/bedrock/security-privacy-responsible-ai" title="Security, Privacy, and Responsible AI on Amazon Bedrock" domain="aws.amazon.com" desc="AWS's official documentation on how Amazon Bedrock handles customer data, including its no-training-use policy." >}}

Bedrock is only part of the pipeline, so a mutual NDA, on request, yours or mine, before a project starts, covers the rest of it: the human review and file-delivery steps that happen outside Bedrock itself. The rest of the workflow, glossary handling included, is covered in [how I built my own patent translation system](/blog/how-i-built-a-patent-translation-system/).

## What this means if you're filing in Japan

None of this means every AI translation tool is unsafe, or that AI-assisted translation itself is the problem. The mechanism above only fires when a tool's data policy allows it, and that is a question you can actually ask and get a straight answer to, before an unpublished invention's novelty is the thing at stake.

Before an unpublished invention goes anywhere near a translation tool, ask:

1. Does the tool's terms of use state whether submitted text is used to train its models?
2. Is your data processed and stored in a specific, named location, or is that undocumented?
3. Is a written NDA available before you submit anything confidential?
4. Is there a stated retention period, or does the vendor simply not say?

If a vendor cannot answer those four questions clearly, that non-answer is itself the answer.

The same blind spot often sits one layer further back. An agency's NDA with you says nothing about whether it reaches the actual translator, reviewer, or AI tool working underneath it. A confidentiality promise that stops at the agency's front door is not much different from no promise at all.

If you're evaluating a translator for a Japan filing, run those same four questions past me directly. My [process page](/how-i-work/) already has the answers written out in detail, and if it's easier to just ask, [reach out](/contact/) and I'll walk through it project by project.
