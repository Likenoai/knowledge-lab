---
name: learn-new-domain
description: Systematically learn a new domain over multiple sessions using a persistent learning workspace. Use when the user explicitly starts or continues a long-running learning track and wants understanding, identification, diagnosis, and later practical transfer rather than a one-off explanation.
disable-model-invocation: true
argument-hint: "想系统学习的领域或当前学习主题"
---

# Learn New Domain（新领域学习）

This is the project's initial learning orchestration Skill, adapted from Matt Pocock's `teach` Skill.

It manages a persistent learning process. It does not replace domain research or review methods.

## Upstream（上游来源）

Read when changing this Skill's design:

- `../vendor/mattpocock/productivity/teach/SKILL.md`
- `../vendor/mattpocock/productivity/teach/MISSION-FORMAT.md`
- `../vendor/mattpocock/productivity/teach/RESOURCES-FORMAT.md`
- `../vendor/mattpocock/productivity/teach/LEARNING-RECORD-FORMAT.md`
- `../vendor/mattpocock/productivity/teach/GLOSSARY-FORMAT.md`

Do not edit the vendor copy. Project-specific evolution happens here.

## Supporting Skills（支持 Skill）

- When reliable domain knowledge is missing, use `genre-mechanism-research` only for film/genre mechanism research; for other domains, use the best available research workflow/tooling rather than guessing.
- For deliberate review of learned material, use `evidence-based-review`.
- Future domain-specific Skills may be called when the current lesson reaches their scope.

## Learning Workspace（学习工作区）

For each long-running topic, maintain one workspace:

```text
learning/<topic>/
├─ MISSION.md
├─ RESOURCES.md
├─ GLOSSARY.md
├─ NOTES.md
├─ learning-records/
└─ lessons/            # create only when a persistent lesson artifact is useful
```

The conversation is the primary teaching surface. Files preserve state across sessions.

### MISSION.md

Capture why the user is learning the topic and what observable capability counts as success.

One mission per workspace.

### RESOURCES.md

Keep a curated, annotated set of high-trust sources. Prefer primary sources, standards, textbooks, peer-reviewed research, and recognized experts.

Do not teach uncertain domain claims from parametric memory when reliable sources can reasonably be obtained.

### GLOSSARY.md

This is the canonical vocabulary of concepts the user has actually demonstrated understanding of.

Do not add a term merely because it was mentioned in a lesson.

### learning-records/

Record only demonstrated learning, corrected misconceptions, relevant prior knowledge, or mission changes.

Coverage is not evidence of learning.

### NOTES.md

Record stable teaching constraints and preferences specific to this learning track.

## Teaching Goal（教学目标）

Default progression for conceptual domains:

```text
Understand（理解）
→ Identify（识别）
→ Diagnose（诊断）
→ Transfer（迁移）
```

Do not require independent generation when the mission does not need it.

## Process（执行流程）

### ◆ 1. Ground in Mission（回到学习使命）

Read the workspace mission and current learning records.

If the mission is missing but the user's goal is already clear, create a concise mission. Ask only when the goal is materially ambiguous.

**Completion criterion:** the next lesson can be justified by the mission.

### ◆ 2. Locate the Learner State（定位当前能力）

Use prior learning records and a small diagnostic prompt when needed.

Distinguish:

- never encountered;
- familiar but cannot retrieve;
- understands definition;
- can identify examples;
- can diagnose boundary cases;
- can transfer to a new case.

**Completion criterion:** the lesson is neither redundant nor too far above the learner's current state.

### ◆ 3. Acquire Trusted Knowledge（获得可靠知识）

Before teaching a new non-trivial claim, check whether the workspace has an adequate source.

If not, research first and update `RESOURCES.md`.

**Completion criterion:** load-bearing claims have a trustworthy basis, or uncertainty is explicit.

### ◆ 4. Teach One Tight Unit（一次只教一个紧凑单元）

Keep working-memory load low.

Prefer:

```text
Intuitive Problem（直觉问题）
→ Precise Definition（精确定义）
→ Minimal Example（最小正例）
→ Contrast / Counterexample（对比 / 反例）
→ Learner Attempt（学习者尝试）
→ Feedback（反馈）
```

For formal domains, add symbolic or mathematical representation only when it clarifies the current concept.

**Completion criterion:** the user gets one concrete capability gain before branching.

### ◆ 5. Practice Through a Feedback Loop（反馈闭环）

For skills, require the learner to make a judgment or perform a task.

Prefer immediate, diagnostic feedback. When the answer is wrong:

```text
指出问题
→ 给最小提示
→ 再尝试
→ 必要时解释
```

Do not replace the learner's reasoning with a full answer too early.

### ◆ 6. Promote Only Demonstrated Learning（只沉淀真正学会的内容）

When the user demonstrates non-trivial understanding:

- add or refine the canonical term in `GLOSSARY.md`;
- write a short learning record if it changes the floor for future teaching.

Do not create session logs disguised as learning records.

### ◆ 7. Review for Durability（为长期保持复习）

When previously learned material needs consolidation, invoke `evidence-based-review` rather than re-teaching it from scratch.

Use retrieval, feedback, contrast, self-explanation, spacing, and transfer as appropriate.

### ◆ 8. Evolve the Learning Skill Carefully（逐步进化学习 Skill）

During real teaching, note repeated successes or failures in `EVOLUTION.md`.

Do not change the Skill because of one isolated interaction.

Promote a candidate rule into `SKILL.md` only when at least one of the following is true:

- it recurs across multiple lessons;
- it is supported by learning-science evidence;
- it fixes a stable failure mode in the current Skill.

Keep a distinction between:

- user-specific teaching preference → workspace `NOTES.md`;
- general learning principle → Skill / learning-science research;
- domain-specific teaching rule → domain workspace or domain Skill.

## Session End（单次教学结束）

Do not automatically produce a long summary.

Prefer:

- what capability changed;
- what remains unstable;
- the next highest-value node;
- whether a later retrieval session is warranted.

## Boundary（边界）

This Skill orchestrates learning.

It is not:

- a substitute for domain research;
- a repository of all learning-science knowledge;
- a review Skill;
- a requirement to create artifacts after every conversation.
