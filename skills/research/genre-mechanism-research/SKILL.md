---
name: genre-mechanism-research
description: Research why a short-drama genre or premise works by decomposing market labels into Premise Architecture（故事前提架构） mechanisms, tracing each mechanism to high-trust research, separating evidence from inference, and designing deferred experiments only after semantic-neighborhood search. Use when investigating genres such as 重生、系统、穿越、神豪、霸总、甜宠, comparing premise mechanisms, or extending the genre research map.
---

# Genre Mechanism Research

Use this skill for **题材 / Premise（故事前提）层研究**. Keep Plot / Story Dynamics（剧情 / 故事动力） out of the active thread unless the user explicitly switches layers.

## Context pointers

Before researching, read:

- `research/00_短剧题材研究_层级地图.md` when you need the current layer map, Premise Architecture（故事前提架构） categories, or the boundary between premise, audience value, and plot.
- `research/02_研究执行协议_证据推理与实验停点.md` for evidence labels, Semantic Neighborhood Search（语义邻域检索）, literature saturation, and experiment stopping rules.
- `research/genre-studies/<题材>/` when that topic already has a research trail. Continue the existing model instead of restarting from general knowledge.

These files are the source of truth. Do not duplicate their full contents here.

## Research loop

### ◆ Fix the current layer

State the active layer before doing legwork:

- Market Genre Label（市场题材标签）
- Premise Architecture（故事前提架构）
- Audience-side Value（观众侧价值）
- Population Need State（群体需求状态）

If the question drifts into Plot / Story Dynamics（剧情 / 故事动力）, mark it as a deferred branch unless the user explicitly wants to change layers.

**Completion criterion:** the research question has one active layer and any adjacent-layer questions are explicitly parked.

### ◆ Define the phenomenon before explaining it

Write the smallest observable claim that needs explanation.

Examples:

- “重生”是否真是头部题材？
- “重生”主要提供 Information Advantage（信息优势）还是 Counterfactual Contrast（反事实对照）？
- “系统”和“重生”是否共享同一个 Advantage Architecture（优势架构）底盘？

Do not begin from a preferred explanation.

Create at least two plausible competing explanations whenever the question is causal or motivational.

**Completion criterion:** the phenomenon is stated without explanation embedded inside it, and at least two live competing hypotheses exist when appropriate.

### ◆ Verify market and story facts first

For a market claim, check recent platform / industry data before psychological explanation.

For a story-structure claim, inspect multiple real works or reliable summaries. Distinguish:

- label frequency;
- supply volume;
- ranking / playback / revenue;
- actual story structure.

A market label is not automatically a psychological mechanism.

**Completion criterion:** every load-bearing market or work-structure premise is either supported or explicitly marked unknown.

### ◆ Run Semantic Neighborhood Search（语义邻域检索）

Never conclude “this requires our own experiment” after searching only the user's wording.

Translate the question across relevant semantic neighborhoods:

◇ Structure  
What formally changes in the premise?

◇ Decision / control  
What changes in information, choice, agency, reversibility, uncertainty, or power?

◇ Self  
What changes in identity, possible self, self-discrepancy, self-expansion, or temporal self?

◇ Narrative / media  
What changes in transportation, identification, suspense, causal coherence, character knowledge, or outcome evaluation?

◇ Adjacent behavioral fields  
Check decision science, social psychology, motivation, cognition, communication, media psychology, reading, games, or consumer behavior when the psychological structure is isomorphic.

Prefer Meta-analysis（元分析）, Systematic Review（系统综述）, direct experiments, and primary research over secondary summaries.

**Completion criterion:** at least the original term, one upper-level concept, one lower-level mechanism, and one adjacent-domain phrasing have been searched; new searches are beginning to repeat existing mechanisms or a clear next layer has become more valuable.

### ◆ Decompose before synthesizing

When a concept becomes broad, split it into variables that can be judged separately.

For Advantage Architecture（优势架构）, currently prefer premise-layer variables such as:

- Advantage Source（优势来源）
- Advantage Legitimation（优势合理化）
- Advantage Type（优势类型）
- Relative Asymmetry（相对不对称）
- Magnitude（优势强度）
- Scope（优势范围）
- Cost（代价）
- Exclusivity（独占性）
- Stability（稳定性）

Do not pull Advantage Conversion（优势转化） into the active analysis unless the user explicitly enters the plot layer.

**Completion criterion:** no key conclusion rests on an overloaded term that still combines distinct causal variables.

### ◆ Label evidence status

Use the repository's evidence vocabulary exactly:

- `[已验证事实]`
- `[迁移性推断]`
- `[工作假设]`
- `[文献检索未完成]`
- `[实验问题]`
- `[实验待执行]`
- `[机制层阶段性暂停]`
- `[创作启发]`

Do not promote a bridge inference into a direct short-drama fact.

**Completion criterion:** every major conclusion has an evidence status and the wording matches that status.

### ◆ Choose the correct stopping condition

There are three legitimate stops:

◇ Continue research  
Use `[机制层继续研究]` when nearby literature still has meaningful unanswered branches.

◇ Stage pause  
Use `[机制层阶段性暂停：非文献穷尽]` when the current layer already has several supported mechanisms and the next layer now has higher information value.

◇ Experiment-ready stop  
Use `[实验待执行]` only after the literature-saturation gate in the research protocol is satisfied and existing evidence still cannot distinguish competing explanations.

Designing an experiment is valuable even when it will not be run now, but experiment design does not substitute for literature search.

**Completion criterion:** the stop status follows from the evidence state, not from fatigue or convenience.

## Experiment design when required

Only design the minimum experiment needed to distinguish remaining hypotheses.

Specify:

- manipulated variable;
- control condition;
- variables held constant;
- primary outcome;
- manipulation check;
- main confounds;
- result patterns that would support, weaken, or fail to distinguish each hypothesis.

Mark it `[实验待执行]`. Do not proceed to participant recruitment, power analysis, or data collection unless explicitly requested.

## Repository update

Research is not complete until the knowledge base is updated.

Prefer:

- one topic folder under `research/genre-studies/<题材>/`;
- incremental numbered Markdown files for substantial new research;
- updating `research/00_短剧题材研究_层级地图.md` only when the hierarchy itself changes;
- updating the SVG map when its structure changes, following `research/visualization/SVG_图示规范.md`.

Preserve existing terminology. If a new term is needed, define it and state whether it is an established academic term or a project working concept.

## Response contract

When reporting back to the user, keep the visible answer focused on:

◇ Current Node（当前节点）  
What exact question and layer were researched?

◇ What changed  
Which earlier assumption was supported, weakened, split, or renamed?

◇ Evidence map  
What is fact, bridge inference, hypothesis, or experiment question?

◇ Knowledge assets  
Which repo files were created or updated?

◇ Next branch  
What is the highest-value next question, and why is it higher-value than nearby alternatives?

Do not bury the current conclusion under a literature dump.
