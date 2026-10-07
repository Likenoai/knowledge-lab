# Shared Cognitive State：第三状态原子研究

> 状态：Targeted Concept Research v0.1
>
> 核心问题：第三原子应该是 Commitment State（承诺状态），还是 Control State（控制状态）？

## 1. 结论

当前更支持 Commitment State（承诺状态），而不是 Control State（控制状态）。

同时，原 Intent State 更适合改名为 Objective State（目标状态）。

因此 Shared Cognitive State v0.2 建议写为：

Shared Cognitive State
= Objective State
+ Epistemic State
+ Commitment State

对应三个问题：

1. Objective：我们想实现什么？
2. Epistemic：我们当前认为现实是什么样的？
3. Commitment：我们已经选择并准备持续执行什么？

## 2. 为什么原来的 Intent 命名有问题

在日常中文中，“意图”容易泛指“我想要什么”。

但在 Bratman 的 planning theory，以及 BDI（Belief–Desire–Intention）agent 架构里：

- Desire / Goal：想达到的状态；
- Belief：对现实的认识；
- Intention：已经选定并承诺执行的未来行动路线。

因此 Goal / Objective 与 Intention / Commitment 不是同一个认知状态。

继续把第一原子命名为 Intent，会和第三原子真正需要表达的“Intention as Commitment”发生术语冲突。

## 3. BDI 架构提供了高度接近的成熟结构

BDI Agent 的经典结构：

Beliefs + Desires / Goals + Intentions

其中：

- Beliefs 表示 agent 对环境和自身的信息；
- Goals 表示希望实现或维持的状态；
- Intentions 表示 agent 已经 commit 的 future course of action；
- Plans 是用于执行 intention 的程序 / 手段。

与当前模型映射：

- Desire / Goal → Objective State
- Belief → Epistemic State
- Intention → Commitment State
- Plan → Commitment 的执行结构

这不是说 Shared Cognitive State 必须采用 BDI，而是说明我们的三分结构与一个成熟 agent 架构独立收敛。

## 4. 为什么 Commitment 不能完全从 Objective + Model 即时重算

如果系统已经知道目标和世界模型，表面上似乎可以每一步重新计算最佳行动。

但 planning theory 指出，intention / commitment 具有跨时间协调功能：

- 不必每一步重新打开整个决策；
- 能与未来的自己协调；
- 能执行跨时间复杂项目；
- 能与其他主体协调；
- 能把已作决定作为后续 means–end reasoning 的输入。

因此：

Objective + Model
→ Deliberation
→ Commitment
→ 后续不默认从零重算

Commitment 具有一定 persistence，但应允许在新证据 / 新约束出现时被修正。

## 5. 为什么 Control State 不适合作为第三原子

Cognitive Control 文献通常把 control 描述为一种功能 / 机制：

- 根据目标和情境选择行为；
- 监控正在进行的行为；
- 检测冲突 / 错误；
- 调整 processing configuration；
- 重新配置 task set。

因此 Control 更像操作 Shared Cognitive State 的控制机制，而不是 Shared Cognitive State 的一个基本内容维度。

使用 Control State 容易混入：

- committed intention；
- active plan；
- attention focus；
- task set；
- processing configuration；
- monitoring signal；
- changed constraints。

这些对象并不属于同一层。

## 6. 原 Control State 中各字段重新归位

- Commitments → Commitment State 核心内容。
- Active Plan → Commitment 的执行结构 / procedural representation。
- Current Focus → 当前 commitment / plan 的调度状态，属于 transient execution state。
- Changed Constraints → Epistemic State / Model，因为它描述现实当前允许什么。

所以原 Control State 混合了 Commitment、Execution Metadata、Epistemic Facts 和 Control Mechanism，范围过宽。

## 7. 新的最简模型

Objective State
→ Epistemic State
→ Deliberation
→ Commitment State
→ Action
→ Observation / Feedback
→ Epistemic State Update
→ 循环

Control 不是其中一个状态盒子，而是贯穿 selection、monitoring、switching、revision 的机制。

## 8. 与动态决策 / POMDP 的关系

POMDP 中有一个相邻结构：

- Belief State：对隐藏世界状态的概率表征；
- Reward / Objective：什么结果有价值；
- Policy：从 belief state 映射到 action 的策略。

这与 Epistemic / Objective / Commitment-Policy 存在结构相似性。

但不能直接等同，因为 human intention / commitment 还承担跨时间协调、部分计划和抗反复重议的功能。

因此 Commitment State 比单纯 Policy State 更适合作为 Human–AI Shared Cognitive State 的人类侧概念。

## 9. 当前工作模型 v0.2

正式建议：

> Shared Cognitive State = Objective State + Epistemic State + Commitment State

中文压缩：

> 我们想要什么 + 我们认为现实怎样 + 我们已经决定做什么。

派生项：

- Question = Objective 与 Epistemic 之间的缺口；
- Uncertainty = Epistemic State 属性；
- Evidence = Epistemic provenance；
- Plan = Commitment 的实现结构；
- Focus = 当前 Commitment / Plan 的执行调度；
- Memory = 状态持久化与重建基础设施；
- Control = 对状态进行选择、监控、切换与修正的机制。

## 10. 下一关键问题

如果 Shared Cognitive State 的三原子暂时成立，下一步应研究：

> Shared Cognitive State 如何发生 Update（更新）？

包括：

1. 什么输入有资格改变 Epistemic State？
2. 什么条件触发 Objective 修正？
3. 什么条件允许 Commitment 被重新打开和撤销？
4. Human 与 AI 谁可以提出更新，谁拥有最终写入权？
5. 如何避免系统在“过度稳定”和“过度反复”之间失衡？

这将进入 Cognitive State Transition / Update Rules（认知状态转移 / 更新规则）。
