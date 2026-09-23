---
name: knowledge-structure-mapping
description: Map, audit, or rebuild knowledge structure when concepts, categories, hierarchy, parent-child placement, siblings, facets, process steps, causes, or mixed relations need to be organized precisely. Use when deciding whether something should be a Tree, DAG, Faceted Model, or Labeled Graph; when a hierarchy feels wrong; or when locating a concept inside a larger knowledge system.
---

# Knowledge Structure Mapping（知识结构梳理）

Build structure from semantics instead of forcing knowledge into a tree.

## Context pointer（上下文指针）

Read `../../research/structure-mapping/03_层级构建核心参考.md` whenever the task requires Node Type（节点类型）, Relation Type（关系类型）, sibling validity（同级资格）, hierarchy validation（层级校验）, or representation choice（结构表示选择）.

It is the Single Source of Truth（单一事实源） for the operational vocabulary and decision rules.

## Process（执行流程）

### ◆ Frame the model（定界）

State the Modeling Purpose（建模目的） and the exact question the structure must answer.

**Completion criterion:** the target scope and comparison / classification question are explicit enough that node roles can be judged relative to one model.

### ◆ Extract candidate nodes（提取候选节点）

Extract semantic units that need independent reference in the current model. Add implicit nodes only when they are required to make the structure explicit, and mark them as inferred.

**Completion criterion:** every retained node is relevant at the chosen granularity; obvious relation words have not been mistaken for ordinary content nodes.

### ◆ Type nodes（节点定型）

Assign each candidate the closest canonical Node Type from the reference. Use the node's role in the current model, not its dictionary meaning.

Mark unresolved cases `UNKNOWN` instead of forcing a type.

**Completion criterion:** every material node is typed or explicitly unresolved.

### ◆ Type relations（关系定型）

Assign an explicit Relation Type to every material edge. Prefer the strongest justified relation; use weaker relations such as BROADER / NARROWER or ASSOCIATED_WITH when stricter claims are unsupported.

**Completion criterion:** no meaningful edge remains an unlabeled generic “parent-child” relation.

### ◆ Validate siblings and axes（校验同级与分面）

For every proposed sibling group, apply Criterion, Node Type, Relation Type, Overlap, and Exhaustiveness checks. Separate different Facets instead of flattening them.

**Completion criterion:** each sibling group answers one comparison / classification question through the same edge semantics, or is split / marked unresolved.

### ◆ Validate hierarchy（校验层级）

Within each hierarchy relation, check direct parents, transitivity, cycles, incomparability, and multiple parents. Keep direct / cover relations and omit redundant ancestor edges.

**Completion criterion:** hierarchy edges are acyclic unless equivalence explains the cycle; multiple-parent structures are not forced into a Tree.

### ◆ Choose representation（选择表示）

Choose the smallest representation that preserves the semantics:

- Tree: single hierarchy + single direct parent;
- DAG: single hierarchy + possible multiple parents;
- Faceted Model: multiple independent descriptive axes;
- Labeled Graph: multiple Relation Types.

**Completion criterion:** the chosen representation preserves every material relation without silently converting one relation family into another.

### ◆ Localize the current node（定位当前节点）

When the user asks where a concept sits, report its Node Type, Parent + Relation, same-axis siblings, children / narrower concepts, orthogonal facets, upstream, downstream, unknowns, and conflicts.

**Completion criterion:** hierarchy position, orthogonal dimensions, and causal / procedural directions are not conflated.

### ◆ Preserve uncertainty（保留不确定性）

Use `UNKNOWN`, `CONFLICT`, `MULTIPLE_CANDIDATES`, or `UNRESOLVED` for relationships the evidence does not settle.

**Completion criterion:** no uncertain relation has been invented merely to make the structure look complete.

## Output（输出）

Default to the smallest useful structure:

```text
Modeling Purpose:

Nodes:
- <node> — <Node Type>

Relations:
- <A> — <Relation Type> → <B>

Structure:
- Tree / DAG / Faceted Model / Labeled Graph

Current Node: <only when relevant>

Unknowns / Conflicts:
- ...
```

Render a tree, graph, table, SVG, or other visual only when it materially improves the user's task or the user requests it.

## Boundary（边界）

This Skill does not decide whether a domain claim is scientifically true. It structures the claims and evidence supplied or retrieved by the active research workflow.

When Relation Type depends on unresolved scientific or domain evidence, preserve the structural uncertainty and delegate the evidence question to the relevant research process.
