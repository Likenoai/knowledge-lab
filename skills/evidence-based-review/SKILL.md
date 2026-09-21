---
name: evidence-based-review
description: Run an evidence-based review session for previously learned material. Use when the user asks to 复习, review, quiz, revisit, consolidate, or test their understanding of concepts, methods, frameworks, or prior lessons.
---

# Evidence-Based Review（科学复习）

Use this Skill to strengthen previously learned material. Do not turn the review into a new lecture unless a diagnosed gap requires a brief correction.

## Context pointer（上下文指针）

Read `../../research/learning-science/01_复习方法的科学证据.md` when the scientific basis or review-method choice matters. That document is the single source of truth for the project's current evidence on Retrieval Practice（提取练习）, Spacing（间隔练习）, Self-Explanation（自我解释）, Interleaving（交错练习）, Feedback（反馈）, and Transfer（迁移）.

When the user names specific notes, files, concepts, or prior lessons, review from those materials first. Preserve their terminology and boundaries.

## Process（执行流程）

### ◆ Set the review target（确定复习目标）

Identify the exact material to review and the target performance level.

Default target for conceptual learning:
`Understand（理解） → Identify（识别） → Diagnose（诊断）`.

**Completion criterion:** the session has one bounded review target; unrelated material is parked.

### ◆ Blind Retrieval（盲提取）

Ask the user to retrieve the core idea before showing the answer.

Use a small round: usually 1–3 prompts. Do not preload the answer inside the question.

**Completion criterion:** the user has attempted retrieval from memory.

### ◆ Diagnose（诊断）

Classify the response:

- correct and stable;
- incomplete;
- concept boundary confusion;
- causal/mechanistic misunderstanding;
- recognition without independent retrieval.

Do not treat “sounds familiar” as mastery.

### ◆ Corrective Feedback（纠错反馈）

Give the minimum feedback needed to repair the diagnosed error.

If the error is substantive, prefer:
`指出问题 → 给提示 → 再尝试 → 再解释`

rather than immediately replacing the user's answer with a full model answer.

**Completion criterion:** the user can restate the corrected idea accurately enough to continue.

### ◆ Contrast（对比辨别）

Only when nearby concepts are easy to confuse, ask the user to distinguish them.

Prefer paired contrasts such as:
`A vs B`, boundary cases, or “what changes if this condition changes?”

**Completion criterion:** the user can state the discriminating feature, not merely two separate definitions.

### ◆ Self-Explanation（自我解释）

Ask for the reason or mechanism behind the answer when deeper understanding matters.

Useful prompts:
- 为什么？
- 哪个条件决定这个判断？
- 如果这个条件改变，结论会怎么变？

**Completion criterion:** the explanation contains the relevant relation or mechanism rather than only the conclusion.

### ◆ Transfer（迁移）

Give one novel case that preserves the mechanism but changes the surface form.

For diagnostic knowledge, ask the user to identify and diagnose the mechanism in the new case.

**Completion criterion:** the user can apply the concept without relying on the original example.

### ◆ Review State（复习状态）

End by compressing the result into:

- Stable（稳定）
- Fragile（脆弱）
- Confused（混淆）
- Not yet learned（尚未掌握）

For Fragile or Confused items, recommend a later retrieval round. Do not invent a rigid universal spacing interval; adapt spacing to the desired retention horizon and prior performance.

## Interaction rule（交互规则）

Keep review rounds cognitively narrow.

Do not continuously introduce new concepts while the user is still resolving the current one. One unresolved distinction should not spawn several new branches.

## Output（输出）

During the session, prefer interaction over summary.

At the end, report only:

- reviewed target;
- stable concepts;
- remaining confusions;
- one highest-value next review target;
- whether a later spaced retrieval round is warranted.
