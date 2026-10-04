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
