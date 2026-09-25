---
name: map
description: 把一个主题、概念集合或复杂问题整理成准确的知识结构。
disable-model-invocation: true
argument-hint: "要梳理的主题或内容"
---

# Map

用于显式输出 **Knowledge Structure（知识结构）**。

## Context pointers

执行前读取：

- `../knowledge-structure-mapping/SKILL.md`
- `../../concepts/knowledge-structure-and-explanation-path.md`

`knowledge-structure-mapping` 是结构判定过程的 Single Source of Truth；本 Skill 只是一个高频、短名称入口，不复制其完整规则。

## Process

1. 明确当前 Modeling Purpose。
2. 按 `knowledge-structure-mapping` 执行节点提取、节点定型、关系定型、同级 / 分面 / 层级检查。
3. 选择最小但不丢语义的 Tree / DAG / Faceted Model / Labeled Graph。
4. 用 **Map View** 显式呈现结构；重要关系必须有 Relation Type。
5. 标记 UNKNOWN / CONFLICT / UNRESOLVED，不为了结构完整而猜测。

## Output

默认给出：
- 当前建模目的；
- 核心节点；
- 核心关系；
- 最合适的结构表示；
- 必要的 Unknowns / Conflicts。

当用户只需要简洁地图时，压缩解释，但不要牺牲关系准确性。

## Completion criterion

读者可以从输出中回答：

> “有哪些关键对象？它们分别是什么角色？它们之间到底是什么关系？”

而不是只得到一组无标签的层级标题。
