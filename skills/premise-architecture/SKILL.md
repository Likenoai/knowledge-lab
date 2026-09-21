---
name: premise-architecture
description: Analyze what a film or short-drama premise changes at the Premise Architecture（故事前提架构） layer. Use when the user asks what a high-concept setup, genre premise, rebirth/system/transmigration rule, relationship setup, threat, or world rule structurally changes before downstream plot actions are considered.
---

# Premise Architecture（故事前提架构）

Analyze the initial-condition change created by a premise.

## Context pointer（上下文指针）

Read `../../research/00_短剧题材研究_层级地图.md` before classification. It is the single source of truth for the current Premise Architecture（故事前提架构） taxonomy and research boundary.

## Process（执行流程）

### ◆ Normalize（规范化）

State the premise in one sentence without importing downstream plot outcomes.

**Completion criterion:** the sentence describes the setup itself, not what the protagonist later accomplishes with it.

### ◆ Classify（分类）

Apply the current premise taxonomy from the research map. Allow multiple mechanisms when the same premise changes several initial conditions.

**Completion criterion:** every material premise effect is mapped to the current taxonomy or explicitly marked as not yet represented by it.

### ◆ Explain the delta（解释变化量）

For every matched mechanism, state the baseline condition and what the premise changes.

**Completion criterion:** the analysis identifies the changed initial condition rather than merely repeating the market genre label.

### ◆ Delegate specialization（分派专门分析）

When the premise creates Advantage Architecture（优势架构）, call the Skill tool with `advantage-architecture`.

### ◆ Guard the layer（守住层级）

Keep Goal / Action（目标 / 行动）, Plot Causality（剧情因果）, Story Progression（故事推进）, Payoff（收益）, and Audience Reward（观众心理奖励） outside the active analysis unless the user explicitly switches layers.

## Output（输出）

Return:

- normalized premise;
- matched premise mechanisms;
- what changed under each mechanism;
- overlaps between mechanisms;
- current boundary / deferred layers.
