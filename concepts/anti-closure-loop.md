# Anti-Closure Loop（反闭合循环）

> 状态：Canonical Working Concept（规范工作概念）  
> 用途：在长期研究、框架迭代与知识体系建设中，防止已有框架因为上下文锚定、路径依赖和内部一致性而逐渐变成封闭搜索空间。

## 1. Definition（定义）

**Anti-Closure Loop（反闭合循环）**：

> 当一个框架已经足够连贯、成熟或长期被反复使用时，主动引入来自外部成熟思想、不同学科、不同实践传统或反对立场的独立问题结构，以扩大搜索空间；随后再执行冲突检测、证据验证与框架修正。

压缩表达：

> **不要只在已有地图上继续修路，要周期性寻找地图之外的大陆。**

## 2. Why it exists（为什么需要）

长期协作中，AI 与人都可能出现类似的局部认知闭合：

- Context Anchoring（上下文锚定）：已有概念更容易继续被复用；
- Path Dependence（路径依赖）：早期选择的框架影响后续搜索方向；
- Consistency Pressure（一致性压力）：倾向于维护已经形成的体系；
- Local Search（局部搜索）：持续优化当前模型，而不是寻找异质模型；
- Confirmation-Oriented Retrieval（确认导向检索）：只找支持现有结构的资料。

因此：

> 一个越来越完整的框架，可能因为太完整而降低发现框架外问题的概率。

## 3. External sources have two roles（外部来源的双重作用）

外部资料不只有 Evidence Source（证据来源）这一种价值。

### Evidence Source（证据来源）
回答：当前问题的答案是什么？现有主张是否成立？

### Search-Space Expander（搜索空间扩张器）
回答：**还有哪些问题、变量、关系和解释，是我们根本没有想到要问的？**

Anti-Closure Loop 主要处理第二种作用。

## 4. Canonical Loop（规范循环）

~~~text
Current Framework（当前框架）
        ↓
Closure Risk Check（闭合风险检查）
        ↓
External Perspective Injection（外部视角注入）
        ↓
Independent Extraction（独立提取）
        ↓
Novelty / Conflict Mapping（新问题 / 冲突映射）
        ↓
Evidence Validation（证据验证）
        ↓
Framework Revision（框架修正）
        ↓
New Current Framework
        ↺
~~~

关键约束：

> **先按外部来源自己的语言理解它，再映射到我们的框架。**

如果一开始就把新资料塞进旧分类，最容易把真正的新东西“翻译没了”。

## 5. What counts as good external injection（什么是好的外部注入）

优先选择能够改变问题空间的来源，而不是只提供更多同类答案。

例如：
- 成熟书籍 / 专著；
- 经典理论或不同理论传统；
- 领域内长期实践者；
- 相邻学科；
- 与当前框架有明确冲突的作者；
- 历史上曾被替代的旧框架；
- 不同任务环境形成的专家传统。

好的外部来源至少应贡献以下之一：
- 一个当前框架没有提出的问题；
- 一个遗漏的变量或机制；
- 一个不同的基本单位；
- 一个不同的因果结构；
- 一个当前框架无法解释的案例；
- 一个新的训练 / 决策方法；
- 一个迫使我们重新划边界的冲突。

## 6. Relation to existing project systems（与现有系统的关系）

### Anti-Closure ≠ Lenses
`lenses` 在同一个问题上切换固定认知视角，主要防止“看漏”；`anti-closure` 主动寻找外部成熟框架，目标是发现“我们连问题都没想到”。

### Anti-Closure ≠ Challenge
`challenge` 对已有主张找反证、替代解释和边界；`anti-closure` 在结论之前或框架成熟之后扩大搜索空间，不要求外部来源一定反对当前结论。

### Anti-Closure ≠ Knowledge Acquisition
普通 Knowledge Acquisition：已有问题 → 找答案。  
Anti-Closure：已有框架 → 找新的问题空间。

### Anti-Closure → Truth
外部框架提出的新主张不因为“新”就更真。当新观点会改变项目稳定知识或重要决策时，应进入 truth / challenge / judge 再修正框架。

## 7. Trigger（触发条件）

出现以下任一迹象时，应考虑触发：
- 同一框架连续多轮只是在补节点；
- 新资料总能被轻松归入旧分类，没有真正改变结构；
- 大量结论彼此高度一致，却很少出现异质问题；
- 研究检索词主要来自当前框架自身；
- 已经很久没有遇到“原来还可以这样问”的材料；
- 框架越来越完整，但现实问题仍反复卡住；
- 用户明确要求“找新的观点 / 不同体系 / 外部成熟思想”；
- 一个重要体系进入阶段性版本冻结前。

## 8. Stop Rule（停止规则）

Anti-Closure 不是无限阅读。

当新增外部来源连续无法产生以下任一项时，可以停止本轮：
- 新的 load-bearing question（承重问题）；
- 新变量 / 新关系；
- 对现有结构的实质冲突；
- 新的边界条件；
- 会改变后续行动的框架修正。

如果只是增加更多案例、措辞或同义观点，则边际收益已低。

## 9. Core Principle（核心原则）

> **Internal synthesis creates coherence; external injection prevents coherence from becoming closure.**
>
> **内部综合负责形成体系，外部注入负责防止体系变成认知封闭。**