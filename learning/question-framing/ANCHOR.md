# Question Framing — 最小充分定界锚点

## 核心停止规则

**Minimum Sufficient Framing（最小充分定界）**：
把问题细化到继续增加精度已不太可能实质改变以下任一项时，就可以停止：

1. Answer（答案）：不同合理解释不会导向 materially different answers（实质不同的答案）；
2. Evidence（证据）：已经知道该找什么证据、什么结果会改变判断；
3. Decision（决策）：继续补充细节不太可能改变行动方案排序；
4. Interpretation（理解）：对话双方对问题的理解已足够一致；
5. Cost（成本）：进一步拆解的边际收益低于时间、认知和沟通成本。

一句话：
> **问题不是越细越好，而是细到足以支撑当前目的。**

## 情境决定所需精度

- Casual Conversation（闲聊）：避免明显误解即可，不要求完整操作化。
- Learning / Diagnosis（学习 / 诊断）：需要把关键概念和关系拆到能够区分、判断、纠错。
- Research（研究）：需要明确 Construct、Operationalization、Scope、Relation、Evidence Condition。
- High-stakes Decision（高风险决策）：除上面内容外，还要明确 Objective、Constraint、Actions、Consequences、Uncertainty / Risk。
- Expert Communication（专家沟通）：共享背景越多，可压缩表达越多；精确不等于冗长。
- Novice Communication（新手沟通）：共享背景少，需要显式补足关键定义和前提。

## Question Type → Evidence Path

| Question Type | 主要想知道什么 | 典型证据路径 |
|---|---|---|
| Description（描述） | 现实是什么样 | 代表性测量、分布、频率、比例、状态 |
| Comparative（比较） | A 与 B 是否不同 | 可比对象、同一测量、差异估计 |
| Association（关联） | X 与 Y 是否共同变化 | 相关 / 回归 / 协变模式，并处理混杂解释 |
| Causal（因果） | 改变 X 是否导致 Y 改变 | 随机干预，或能够识别因果的准实验 / 因果推断设计 |
| Mechanism（机制） | X 通过什么过程影响 Y | 时间顺序、中介过程、机制变量、过程证据与竞争机制区分 |
| Prediction（预测） | 未知 / 未来 Y 会是什么 | 独立验证、样本外预测、准确性与校准 |
| Decision（决策） | 在目标约束下该采取什么行动 | 各行动后果预测 + 不确定性 + 价值 / 损失 + 目标 / 约束 |

> Comparative（比较）可以叠加在描述、因果等问题上，不是完全互斥的推断类别。

## 快速诊断顺序

面对一个自然语言问题时，不必机械地每次走完整流程。只检查会改变当前任务的部分：

**Purpose（目的） → Construct（构念） → Relation（关系） → Scope（范围） → Operationalization（操作化） → Evidence Condition（证据条件） → Stop（停止）**

若某一步继续细分不会改变答案、证据、决策或理解，就停止。
