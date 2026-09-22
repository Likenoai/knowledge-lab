---
name: structured-memory
description: Turn a bounded set of learned concepts, terms, categories, relations, or steps into a compact memory scaffold. Use when the user asks to remember, memorize, consolidate terminology, build a memory aid, make flashcard-like recall material, or organize a small concept set for reliable retrieval.
---

# Structured Memory（结构化记忆）

Transform a bounded knowledge set into a memory structure that is easier to retrieve without distorting the underlying domain structure.

This Skill handles **encoding and memory scaffolding**. Long-term review scheduling and repeated testing belong to `evidence-based-review`.

## Context pointer（上下文指针）

Read when evidence or design rationale matters:

- `../../research/learning-science/01_复习方法的科学证据.md`
- `../../research/learning-science/02_结构化记忆与视觉提示的证据基础.md`

When the material belongs to an active learning workspace, also read that workspace's `GLOSSARY.md` and relevant lesson / reference files first.

## Process（执行流程）

### ◆ 1. Bound the Memory Target（限定记忆目标）

Identify the exact items the learner needs to retrieve.

Prefer a small bounded set. If the material mixes “needs understanding” with “needs memorization”, separate them first.

**Completion criterion:** there is a clear target set and no hidden requirement to memorize an entire domain.

### ◆ 2. Verify Understanding First（先确认基本理解）

Do not optimize memorization of a term the learner does not yet understand.

If a concept is still confused, return it to the teaching flow before promoting it into a memory asset.

**Completion criterion:** each target item has at least a minimally understood meaning.

### ◆ 3. Build Meaningful Chunks（建立有意义组块）

Group items into a small number of meaningful chunks.

Prefer semantic grouping over arbitrary acronym tricks.

For every grouping, explicitly classify it as one of:

- `Domain Structure（领域结构）`: intended to represent the actual conceptual organization;
- `Mnemonic Grouping（记忆分组）`: created only to support recall.

**Critical rule:** never present a mnemonic grouping as a formal taxonomy unless the domain evidence supports that structure.

### ◆ 4. Create Retrieval Scaffold（建立提取脚手架）

Compress the target into a recoverable cue structure such as:

```text
2–2–3
对象 → 描述 → 结构
```

The scaffold should allow the learner to reconstruct the full set rather than merely recognize it.

**Completion criterion:** the learner can see a small cue and attempt to regenerate the full answer.

### ◆ 5. Add Semantic Visual Cueing（加入语义视觉提示）

When visual structure is useful, assign stable visual signals:

- color → group / relation;
- shape → node type or category when helpful;
- position → structural role or sequence;
- line / arrow style → relation type when relevant.

Use the same visual code consistently across Answer View and Retrieval View.

Avoid decorative colors, icons, or shapes that do not encode meaning.

### ◆ 6. Produce Two Views（生成答案版 + 提取版）

Always prefer two complementary artifacts for visual memory tasks:

#### Answer View（答案版）

Show the full structure and labels.

#### Retrieval View（提取版）

Keep the same spatial / color scaffolding but blank the target labels.

The learner should attempt Retrieval View before reopening Answer View.

### ◆ 7. Use HTML + SVG When Persistent Visual Assets Help（需要时生成 HTML + SVG）

For concepts that benefit from persistent visual memory:

- create one HTML memory pack;
- create at least one SVG Answer View;
- create one SVG Retrieval View when active recall is useful.

Store them with the learning workspace under:

```text
learning/<topic>/memory/
```

Recommended names:

```text
<topic>-memory-pack.html
<topic>-map.svg
<topic>-retrieval-card.svg
```

Follow the project's SVG bilingual terminology rules when applicable.

### ◆ 8. Immediate Retrieval（立即提取）

After initial encoding, ask the learner to close / ignore the Answer View and regenerate the target from the Retrieval View or a small textual cue.

Give corrective feedback only after the attempt.

### ◆ 9. Hand Off to Review（交给复习 Skill）

If the target needs long-term retention, delegate subsequent spaced retrieval to `evidence-based-review`.

Do not duplicate the full spaced-review procedure here.

## Output（输出）

For a normal memory task, return only:

- Memory Target（记忆目标）
- Mnemonic / Domain Structure status（记忆分组 / 正式结构）
- Retrieval Scaffold（提取脚手架）
- Answer View
- Retrieval View
- immediate retrieval prompt
- persistent asset paths when created

## Boundary（边界）

This Skill is not:

- a substitute for understanding;
- a general note-taking formatter;
- permission to invent false taxonomies for easier recall;
- the long-term review scheduler;
- a reason to create visual assets for every trivial fact.
