# Knowledge Capture Policy（长期知识沉淀协议）

> 该文件定义 `Likenoai/knowledge-lab` 的长期用途和聊天研究沉淀规则。

## 1. Source of Truth（权威源）

`Likenoai/knowledge-lab` 是长期知识、研究、方法论与可迁移能力模型的 GitHub Source of Truth（权威源）。

聊天是探究现场，不是最终存档。

## 2. 什么内容必须沉淀

满足下列任意条件时，应进入知识仓库：

- 形成了可复用的 Principle（原则）或 Working Model（工作模型）；
- 完成了具有长期价值的 Research（研究）；
- 对一个概念形成了稳定定义、边界或反例；
- 建立了可以迁移到其他任务的方法论；
- 形成了 Skill（技能）或训练协议；
- 得到了会改变后续判断/行动的重要结论；
- 对旧模型进行了实质修正；
- 用户明确要求长期保留。

不应自动沉淀：

- 临时聊天；
- 一次性事实查询；
- 尚未形成结构的灵感碎片；
- 重复内容；
- 没有长期复用价值的具体事务。

## 3. 存储位置

- `research/`：研究问题、证据地图、Canonical Reference（规范参考）
- `concepts/`：稳定概念与认知模型
- `skills/`：可执行 Skill 与训练协议
- `learning/`：学习过程与阶段性训练记录
- `creative/`：创作相关长期资产
- `components/`：可复用知识组件

研究主题较大时，在 `research/<topic>/` 下独立建目录。

## 4. 成熟度

长期知识应尽量标记成熟度：

1. Seed（种子）
2. Working Model（工作模型）
3. Supported Principle（有支持的原则）
4. Canonical Reference（规范参考）

不得把一次讨论直接包装成最终真理。

## 5. 研究条目的最低要求

一份长期研究文档至少应包含：

- 研究问题；
- 当前命题；
- 关键概念；
- 论证链；
- 证据与来源；
- 反例 / 边界；
- 当前可采取的实践；
- 未解决问题。

## 6. 更新原则

后续出现新证据时：

> 优先修正旧文件，而不是不断创建互相冲突的新文件。

如果原结论被推翻，应保留“为什么修改”的记录。

## 6.1 状态协调更新与复用核验（CI-001）

形成值得持久化的新认知结果时，除 Capture（捕获）外，必须进行 **Impact Check（影响检查）**：

- 确认新结果是否补充、修改、否定或取代现有工作文件、原则或承诺；
- 若有实质影响，优先更新旧文件的有效状态或添加指向后继版本的明确标记，历史快照允许保留原文；
- 将更新原因、受影响文件和未决冲突记录在相关工作日志或修改记录中；
- 写入后重新读取以验证结果，失败则标记为待处理，不能宣称已闭环；
- 下次恢复同一研究时，从更新后的当前有效文件进入，而不是只凭散落对话复原。

**Externalization（外化）≠ Canonization（正式化）**：临时表征与过程态记录默认可修改；不必每条聊天都入库。

原则入口：`principles/认知交互原则注册表.md`（CI-001）；详细操作入口：`frameworks/cognitive-augmentation/认知外化与状态更新闭环_执行协议.md`。

---

## 7. 表达原则

长期知识采用：

> **科研的证据纪律 + 原则化的认知压缩 + 面向行动的表达。**

不要只堆论文，也不要只写漂亮结论。

核心顺序：

```text
Paradigm / Problem
→ Tension
→ Claim
→ Principle
→ Reasoning
→ Evidence
→ Counterevidence / Boundary
→ Practice
→ Open Questions
```

## 8. 对聊天协作的要求

在持续讨论中，一旦某部分已经达到长期知识价值，应主动进行 Knowledge Capture（知识沉淀），而不是等整段对话结束后再重新整理。

Git commit message 使用中文。

## 9. Deep Research（深度研究）使用原则

对于会进入 `research/`、会改变长期 Working Model / Principle，或需要系统文献检索与证据更新的研究任务，默认优先使用 ChatGPT Deep Research（深度研究）作为主要检索与综合工作流。

Knowledge Lab 自己设计的研究框架继续保留，但它的角色是：

> **定义研究问题、约束证据纪律、组织论证、对抗性检验、术语治理与更新长期模型，而不是替代 Deep Research 的系统检索能力。**

因此采用以下协作关系：

```text
Knowledge Lab research frame
定义问题 / 假设 / 边界 / 证据标准
        ↓
ChatGPT Deep Research
系统检索 / 来源比较 / 证据综合
        ↓
Knowledge Lab evaluation
区分 Supported / Plausible / Speculative
识别反证、边界与概念混淆
        ↓
Update Source of Truth
修正既有文件并记录为什么修改
```

对于已经沉淀但仍处于 Working Model、证据基础较薄、对后续体系影响较大，或主要由普通聊天检索形成的结论，应在合适时机用 Deep Research 重新研究。重新研究的目标不是为旧结论寻找支持，而是允许旧结论被加强、缩小、重命名、拆分或推翻。

已经有高质量证据且没有新的实质问题时，不机械重复研究；Deep Research 应优先投入高杠杆、高不确定性和会影响后续推理结构的问题。
