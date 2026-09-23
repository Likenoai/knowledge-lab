# Knowledge Structure Mapping：归档与 Skill 构建完成

日期：2026-09-23

## Canonical Reference

已创建：

`research/structure-mapping/03_层级构建核心参考.md`

定位：
- 纯知识；
- 高浓度；
- 不保留练习、教学对话、临时类比与错误过程；
- 明确 formal concept、project working definition 与 representation heuristic 的边界；
- 作为 Skill 的 Single Source of Truth。

前置研究文件保留为证据与理论来源：
- `01_知识结构梳理的形式基础.md`
- `02_结构关系词表与判定规则.md`

## Skill

已创建：

`skills/knowledge-structure-mapping/SKILL.md`

`skills/knowledge-structure-mapping/agents/openai.yaml`

Invocation：Model-invoked。

原因：这是多个研究、产品、Agent / Skill 设计任务都会复用的基础结构能力，模型需要能够自主发现并调用。

## Skill 设计

按 Matt Pocock `writing-for-agents` / `SKILL-MECHANICS` 原则：

- SKILL.md 只保留 procedure、steps、completion criteria、boundary 与 context pointer；
- 领域知识全部放在 Canonical Reference；
- 使用 progressive disclosure，避免把完整关系词表复制进 Skill；
- 每一步均有可检查 completion criterion；
- Reference 作为 Single Source of Truth；
- 默认输出最小必要结构，不把视觉产物作为必选步骤。

## 理论收尾

当前 v1 理论范围已经冻结，足以处理大多数常见：
- 知识层级；
- 概念分类；
- 分面模型；
- Tree / DAG / Graph 选择；
- 研究地图；
- 产品 / Agent / Skill 架构；
- Current-node localization；
- Unknown / Conflict handling。

除非未来真实任务反复暴露稳定失败模式，否则不继续扩展集合论、格论、FCA 或更重型本体工程。
