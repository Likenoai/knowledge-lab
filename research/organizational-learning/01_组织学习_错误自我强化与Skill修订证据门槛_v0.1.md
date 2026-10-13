# 组织学习：避免错误自我强化，以及 Agent Skill 修订需要什么证据

> 日期：2026-10-13  
> 状态：**Working Model（工作模型）**；并非正式标准或已验证最佳实践  
> 研究路线：Organizational Learning × Agent Evaluation × Skill Trust & Revision  
> 关联：`KNOWLEDGE_CAPTURE_POLICY.md`、`frameworks/cognitive-augmentation/认知外化与状态更新闭环_执行协议.md`  
> 本轮研究性质：已核对代表性原始论文、综述与产品评测文档；将组织理论移植到 Agent 的部分属于**工程推断与待验证提案**。

## 0. 研究起点与对话进展

连续讨论由 Hinton 的表征学习进入 LLM 的上下文适应，再从 Agent 的 Memory / Skill 外部知识转向反馈治理：

1. **能力调用 ≠ 长期学习**：冻结参数的 LLM 可以通过上下文适应任务；并不意味着权重被更新。
2. **存储经验 ≠ 验证经验**：Trace、Memory、Skill 的增加并不保证 Agent 改进。
3. **单环/双环学习**：在既定目标和基本假设下修正行动；必要时检验并修订支配行动的基本假设。
4. **发现反馈回路的双刃性**：系统可能从经验中改善，也可能因错误归因、指标污染或过早固化而形成自我强化。
5. **本轮研究问题**：有哪些组织学习理论解释这种陷阱？什么证据可以授权一条经验升级为长期 Skill 规则？

核心研究问题（保留用户原句）：

> **Agent 什么时候应该相信已有 Skill，什么时候应该质疑 Skill 本身？**

衍生问题：

> 什么样的反馈，具有足够的证据强度，能够支持我们修改系统未来的行为规则？

## 1. 当前工作命题

> **候选原则 P-01｜证据治理的 Skill 演化**  
> Agent 可以从运行经验中提出规则修订建议，但只有当反馈经过可信来源核验、结果验证、竞争解释比较、基线对照、独立数据检验和相应风险审查后，才可以改变长期运行规则。证据不足时允许临时适应或发起调查，不能直接晋升为普遍原则。

限定：本条是综合组织学习、实验设计与现代 Agent Eval 实践提出的工作模型，不是被单篇实验证实的普适定律。

### 三个概念不可混淆

- **Feedback（反馈）**：有关结果或过程的新信息；可能真实、错误、有偏、延迟、缺上下文。
- **Learning（学习）**：利用信息形成能影响未来判断或行为的改变；改变不必正确。
- **Improvement（改进）**：在明确目标、适用条件和独立测量下，表现发生可信的有利变化，且重要副作用受控。

逻辑上，Feedback 不保证 Learning；Learning 不保证 Improvement；一次 Improvement 也不保证跨任务的 Generalization。

## 2. 六条组织学习研究路线：每一条解决什么

### 2.1 Argyris & Schön｜单环、双环与组织防御

- **单环（Single-Loop）**：结果偏离预期时，在既定 governing variables（支配变量，目标、规则、假设）下修正行动。
- **双环（Double-Loop）**：检验并必要时修订 governing variables，而不仅是修改行动。
- **组织防御性惯例**：表面上承诺欢迎反馈，实际结构却让成员避免揭露失败或验证威胁既有规则的信息。
- **Agent 映射（类比）**：重试工具、补检索是执行层调整；改变 Skill 适用前提或评测目标更接近规则层检验。两类修订不等于训练 LLM 权重。
- **风险**：所谓“反思”仍可能是在原框架内部自我辩护，必须引入独立检验。
- 证据：[Auqui-Caceres & Furlan, 2023 系统综述（128 项研究）](https://doi.org/10.1111/emre.12615)；[Argyris 2004 干预研究](https://doi.org/10.1093/acprof:oso/9780199268078.003.0006)。

### 2.2 Levitt & March｜迷信式学习、能力陷阱与组织记忆

- 组织把历史经验编码为 Routine（惯例），可能保存真正有效的能力，也可能保存错误的因果解释。
- **Superstitious Learning**：行动与结果之间的实际因果关系被错判；仅因时间相邻便推断“我的修改带来了成功”。
- **Competency Trap**：早期有效的操作获得更多实践和优化机会，替代路线被忽略，形成路径依赖。
- **Agent 映射**：一次 Skill 变更后成功率上涨，不等于 Skill 变更是原因；高度频繁调用的 Skill 不一定最优。
- 证据：[Levitt & March, Organizational Learning, 1988](https://doi.org/10.1146/annurev.so.14.080188.001535)。

### 2.3 James G. March｜Exploration / Exploitation

- **Exploitation（利用）**：精炼已有策略，短期反馈迅速、收益容易测量。
- **Exploration（探索）**：尝试新策略，成本即时、收益延迟且不确定。
- 模型揭示：过于偏重利用可能在短期变得高效、长期损害适应性；组织规范可能过早消灭少数异议和策略多样性。
- **Agent 映射**：既要维护稳定生产 Skill，也要保留隔离环境中的候选 Skill；防止测试集饱和与重复优化同一场景。
- 证据：[March, 1991](https://doi.org/10.1287/orsc.2.1.71)。

### 2.4 Crossan / Lane / White｜4I：从经验到制度化

- **Intuiting → Interpreting → Integrating → Institutionalizing**，跨越个体、群体、组织。
- **Agent 功能类比**：单次 Trace 中的异常 → 结构化失败解释 → 多案例整合和竞争解释检验 → 经过审批的 Skill/工作流版本。
- **提醒**：写入 Memory 只是 Retention；是否变为持久组织能力，取决于下一次真实行为与评价。
- 证据：[Crossan, Lane & White, 1999](https://doi.org/10.5465/amr.1999.2202135)。

### 2.5 Senge / 系统动力学｜增强环、平衡环、延迟

- Reinforcing loop（增强反馈）可以放大有效经验，也可以放大错误和选择偏差。
- Balancing loop（平衡反馈）抑制偏离，但也可能把系统锁在过时目标上。
- 时间延迟使短期得分与长期效果脱钩，局部优化可能带来跨流程副作用。
- **Agent 映射**：Skill 被频繁调用→留下更多成功样例→优先级提高→继续频繁调用；必须独立评价未被选中的替代策略。
- 证据：[Kim & Senge, 1994](https://doi.org/10.1002/sdr.4260100213)；[系统动力学反馈概念参考](https://onlinelibrary.wiley.com/doi/abs/10.1007/s11213-011-9201-0)。

### 2.6 Edmondson / Deming｜失败类型与 PDSA

- Edmondson 区分可预防错误、复杂系统中的失败、探索前沿的智能失败：不能把所有失败视为同一类反馈。
- **PDSA（Plan–Do–Study–Act）** 要求先写明预测，执行，再核对实际数据是否支持原假设。
- **Agent 映射**：执行违规应优先修复约束/流程；探索性新 Skill 失败要分析收益信息，不应自动处罚；发布规则前先明确可证伪预测。
- 证据：[Edmondson, 2011](https://pubmed.ncbi.nlm.nih.gov/21510518/)；[Deming Institute PDSA](https://deming.org/explore/pdsa/)。

### 横向警告：Goodhart 风险（指标被优化后失去代表性）

如果 Agent 反复优化“LLM 裁判评分”，可能学会迎合评分器而不改善真实任务。必须让指标映射到真实目标，并辅以环境结果、人工审阅、未知测试集与副作用指标。

参考：[Goodhart 定律在评估中的应用综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7901608/)。

## 3. 什么是“足够强”的反馈？先说明判断对象

**没有跨所有任务通用的“一次失败 / N 次失败 / 置信度 90% 即可修改 Skill”门槛。**

所谓证据充足，是针对一个**明确范围的修订主张**作出的判断：

- 要改哪条规则？原版本和候选版本是什么？
- 声称改进哪些任务/哪些分布？主指标是什么？
- 比较基线是谁？产生了哪些副作用？
- 假如改错了，影响范围、成本、可逆性是什么？
- 现有证据能否排除同样合理的竞争解释？

### 3.1 证据强度阶梯（工程工作框架，不是统一科学量表）

| 阶段 | 证据 | 可以授权的动作 | 不应得出的结论 |
|---|---|---|---|
| E0 异常报告 | 一次投诉、LLM 自评、单条成功或失败 Trace | 记录异常、暂停高风险动作 | 不证明 Skill 有错 |
| E1 可复核事实 | 完整输入、环境终态、工具响应、独立核验 | 建立缺陷案例，修复明显执行错误 | 不证明规则缺陷是根因 |
| E2 重现与分层 | 同类独立案例、复现步骤、失败按任务类别聚类 | 提出竞品假设和 Skill 修订候选 | 重复出现仍非因果证明 |
| E3 对照实验 | 相同测试任务下比较基线 Skill 与候选 Skill，控制模型/工具/环境，重复多次 | 在非生产条件下做择优 | 同一开发集上的胜出不保证泛化 |
| E4 独立与边界测试 | 未参与改写的留出集、反例、非适用样本、风险指标、统计不确定性 | 对低风险领域审慎试运行 | 不能保证未来分布不变 |
| E5 渐进发布证据 | Shadow/Canary、小范围上线的真实终态、回滚验证和长期监测 | 按权限发布新版本 | 上线成功不代表永久有效 |

E0–E5 是一套**用于管理修订权限的提案**，不是对客观证据的万能排序；例如安全关键场景，单次已核实越权即可直接暂停使用，而无需等 E3。

### 3.2 七个检验维度

1. **来源与权限**：谁提供了反馈？是否有可信环境记录？外部文档可能是恶意或错误输入；涉及安全必须先隔离。
2. **测量有效性（Construct Validity）**：评分真正在测用户目标，还是测表面格式/自我评价？
3. **结果真实性（Outcome Verification）**：Agent 声称成功，与数据库、测试、外部状态是否一致？
4. **归因（Causal Attribution）**：同一失败是否也能用模型升级、数据变化、工具故障、随机采样解释？
5. **可重复性（Replication）**：在同条件重复运行、多随机种子、多组样本中是否复现？
6. **外推（Generalization）**：未见案例、边界情形、负例、反向场景是否仍有效？
7. **决策风险与可逆性**：即使平均效果更好，是否带来少见但严重的误操作？能否回滚？

最重要的差别：**“这个反馈是真实的”只是事实判断；“应永久修改 Skill”还需要行动决策的风险证据。**

### 3.3 评测闭环的防污染原则

- 优先检查真实环境终态（测试是否通过、数据是否写入、预期动作是否实现），不以 Agent 自己的结论为终态。
- 采用代码检查、明确 rubric 的 LLM Judge、人审组合；用人审校准自动裁判。
- 评测集分成开发集（可迭代）、冻结留出集（不得参与候选改写）、挑战/反例集和真实流量监测。
- 同题对照基线与候选时，尽可能成对比较；固定或记录模型版本、工具、输入、提示上下文、环境和随机性。
- 多次运行并提供置信区间或其他不确定性表达；关注效果量而非仅看“有所提高”。
- 预先设定主要成功指标、不得退化的关键指标和风险护栏；避免挑选有利子集后才宣布有效。
- 因为真实环境经常变化，对照结果只是限定环境下的证据，不应冻结为永恒规则。

参考：[Anthropic, Demystifying Evals for AI Agents, 2026](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)；[OpenAI, Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)。

## 4. Skill 失效的竞争解释：先归因，再决定改哪里

观察：“Agent 在任务中失败”至少有这些不同原因：

| 候选原因 | 需要的区分证据 | 优先修改层 |
|---|---|---|
| 任务表述不清 / 上下文缺信息 | 补完整输入后能稳定完成 | 当前上下文、提问、检索 |
| Skill 未被正确触发 | 具备适用条件却未调用；不同路由策略对照 | Skill description / Router |
| 选错 Skill | 任务不满足 applicability/non_applicability | Skill 选择条件与拒绝策略 |
| 执行步骤有误 | 正确 Skill、足够信息下仍反复执行错误 | execution policy / 工具错误处理 |
| 模型能力或工具局限 | 不同模型/工具组合的受控对照 | 模型、工具、任务拆分 |
| Skill 基本假设错误 | 在控制执行错误后，对规则前提的独立反例仍成立 | governing assumptions / 目标或评价标准 |

**触发双环式修订**需要证据表明支配变量本身出了问题，而不是仅凭任务多次失败。执行步骤更新不等于双环学习。

## 5. 示例：剧本评价 Skill 的证据实验（全部是假设）

原规则 R0：“开头三秒必须有直接冲突，缺少则降分。”

观察：某些悬疑短剧没有直接冲突但获得良好观众响应。

竞争假设：
- H1：Agent 漏读了隐含冲突，属于执行或表征问题。
- H2：R0 仅适用于某些强冲突题材，属于适用范围错误。
- H3：R0 过度代理化，真正重要的是观众快速形成关注问题或预期，属于治理变量/评价目标错误。

候选 R1：“先识别开头建立关注的机制（冲突、异常、谜题、关系张力等），按题材与目标评价；不把直接冲突当作唯一指标。”

**可证伪预测**：在已有人类独立标注或更接近真实用户反馈的测试集上，R1 能减少特定题材的误报，同时不明显降低原适用题材表现。

实验设计：
1. 设计分层样本：强冲突、悬疑、情感与对抗性反例；标注题材、黄金标准或较可靠代理。
2. 保持模型、工具、基础上下文、运行预算一致；A/B 在同题比较 R0 和 R1。
3. 比较：真正问题识别率、误报率、证据引用准确率、延迟/成本、负例误触发率。
4. 对同题重复多次；报告分层效果和不确定性；不能只看总体平均值。
5. 用冻结留出集验证，必要时盲审；不让同一组产生候选的模型评价自身的修改作为唯一证据。
6. 若成立，先限定题材 Canary 发布；若失败，保留旧版并记录具体反例。
7. 若观众行为指标受投流/发行/渠道影响，要将这些混杂因素显式记录；“真实播放高”也不等于评价规则具有直接因果性。

**判断**：一两部剧的反例可以触发质疑和实验，不能直接晋升为普适规则；违反安全边界则应立即暂停，无需等待大样本。

## 6. Agent 工程提案：分开“运行内环”与“规则修订外环”

### 内环：单次任务（低时延，偏单环）

`Input → Skill Gate → Execute → Environment Feedback → Verify → Replan/Stop`

- 只更新上下文、计划或当前调用；可停止 Skill；**默认不直接改写永久 Skill 文件**。
- 记录 task_id / trace_id / model_id / prompt_hash / skill_id / skill_version / tool outputs / environment outcome / evaluator version。

### 外环：跨任务的知识晋升（慢回路，含双环可能）

`Traces → Failure Mining → Competing Hypotheses → Candidate Revision → Paired Offline Evals → Held-out/Counterexamples → Approval → Canary → Monitor / Rollback`

- `hypotheses` 字段容纳不同错误原因；单一自我解释不是结论。
- `skill_contract` 至少含 applicability、non_applicability、assumptions、preconditions、execution_policy、success_criteria、known_failures、evidence_refs、risk_class、version、rollback_to。
- 持久修改必须由受控发布策略约束；自动提案不等于自动批准。
- 保留探索预算与挑战集；防止高频 Skill 垄断经验来源。

### 改版决策简式（待实测）

`Decision = f(scope, evidence_quality, causal_support, uncertainty, generalization, expected_benefit, downside_risk, reversibility)`

不是线性统一分数；不同风险等级采用不同的批准门槛。
- **E0–E1**：记录 / 立即保护性暂停（若风险高） / 触发检查。
- **E2–E3**：提出候选、沙箱实验、人工审查。
- **E4–E5**：满足具体风控和发布要求后，进入受控晋升。
- 若出现严重的权限、安全或不可逆操作风险：立即禁用或隔离，不需等待一般统计样本量。

## 7. 当代工具与证据（与理论的关系）

- [Anthropic Skill Creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)：明确支持创建、修改、评估 Skill，衡量触发准确性、运行效果和改版差异。
- [Anthropic Agent Evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)：区分 trace、trial、grader、outcome 与多次试验，强调真实环境终态和人工校验评分器。
- [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals)：trace grading、datasets、graders 与 eval runs，可用于定位工作流级别回归。

边界：这些工具提供了工程能力，但没有自动证明本工作模型的完整性或最佳性。

## 8. 研究过程中的明确结论、争议和后续入口

### 当前较稳固的理论认识（Supported by literature）

- 组织可将历史推断编码为规则，规则也可能固化错误因果（Levitt & March）。
- 只精炼旧策略而不探索新策略，可能损害长期适应性（March）。
- 不检验支配行动的目标与基本假设，反馈可能停留在单环（Argyris & Schön）。
- 单次个体经验要转化为组织能力，存在跨层整合与制度化过程（Crossan 4I）。
- 延迟反馈与系统相互作用使简单的局部归因容易失真（系统动力学）。
- Agent 评测需要区分模型输出、执行轨迹和环境终态（现代 Agent Eval 实践）。

### 尚未验证的工程推断（Working Model）

- E0–E5 的门槛是否比更简单的验收工作流有效。
- 何种错误聚类频度、触发规则最能降低过度修订成本。
- 每个 Skill 是否都值得单独维护完整的 assumptions 和 evidence_refs。
- 采用专门的 Skill Critic / Revision Agent，是否比人工定期审阅有净收益。

### 后续研究问题（Research Backlog）

1. **反事实与因果归因**：如何让 Agent 证明“改 Skill”比“补证据/换工具”更能修复问题？
2. **统计决策**：如何根据错误代价、样本量和不确定性，为不同风险等级定义晋升规则？
3. **反馈污染**：如何检测 LLM-as-Judge 的偏差、指标作弊与自评自证？
4. **探索保留**：如何防止高调用率 Skill 的反馈垄断？
5. **组织理论向多 Agent 的迁移边界**：治理变量/防御例程的比喻何时成立，何时会误导？
6. **跨版本证据失效**：模型、工具、业务环境改变后，旧 Skill 的证据何时应作废或降权？

## 9. Impact Check / Reconciliation

- 与已有 `research/02_研究执行协议_证据推理与实验停点.md` **互补**：该文件偏向外部研究的证据与文献检索停点；本文偏向 Agent Skill 持久规则更新的证据门槛，不替代旧文件。
- 与 `frameworks/cognitive-augmentation/认知外化与状态更新闭环_执行协议.md` **兼容**：两者强调 Capture → Reconcile → Verify → Reuse；本文件把反馈治理扩展到 Agent 系统。
- 未发现必须推翻既有研究结论的冲突。本文应保持 Working Model，不进入 Supported Principle / Canonical Reference。
- 本轮计划：新建研究文件，增加 README 的研究分支入口，回读核验；后续重大证据优先修订本文件而不是无界新增版本。

## 10. 主要来源索引

1. Argyris / Schön 的单环与双环概念以及 128 项研究系统回顾：https://doi.org/10.1111/emre.12615
2. Levitt, B. & March, J. G. (1988). Organizational Learning：https://doi.org/10.1146/annurev.so.14.080188.001535
3. March, J. G. (1991). Exploration and Exploitation in Organizational Learning：https://doi.org/10.1287/orsc.2.1.71
4. Crossan, M. M., Lane, H. W., White, R. E. (1999). An Organizational Learning Framework：https://doi.org/10.5465/amr.1999.2202135
5. Kim, D. H. & Senge, P. M. (1994). Putting Systems Thinking into Practice：https://doi.org/10.1002/sdr.4260100213
6. Edmondson, A. C. (2011). Strategies of Learning from Failure：https://pubmed.ncbi.nlm.nih.gov/21510518/
7. Deming Institute. PDSA：https://deming.org/explore/pdsa/
8. Goodhart 风险与评估：https://pmc.ncbi.nlm.nih.gov/articles/PMC7901608/
9. Anthropic (2026). Demystifying Evals for AI Agents：https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
10. OpenAI. Evaluate Agent Workflows：https://developers.openai.com/api/docs/guides/agent-evals
11. Anthropic Skill Creator：https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md

---

> 下一轮恢复入口：先问“反馈足够支持修改**哪一条**规则、覆盖**哪一类**任务、承担**多大**风险？”，然后从一个真实 Skill 的 A/B Trace 数据开始建实验；不要只凭一次对话完成证据晋升。


## 11. 暂缓研究标记｜反馈中的因果证据与偶然相关（2026-10-13）

> **状态：Deferred / 待恢复**。用户明确要求“这部分记录下来，以后研究”，本轮不继续展开，避免与当前主线“Prompt 如何调用已有能力”混淆。

**暂缓的研究焦点**：Agent 怎样分辨“修改 Skill 后恰好成功”和“修改 Skill 确实导致成功”？何种反馈强度允许把一次经验晋升为未来行为规则？

恢复时的入口问题：
1. 怎样构造反事实：如果 Skill 没修改，同一任务会怎样？
2. 如何使用成对 A/B、冻结留出集、多次试验、独立环境终态与盲审，排除模型随机性、数据分布与工具故障？
3. 什么条件下单例反证足以立即暂停高风险 Skill；什么条件下必须使用多样本支持永久修改？
4. 如何识别 Goodhart 式指标污染、确认偏误、迷信式学习（Superstitious Learning）和能力陷阱（Competency Trap）？
5. 如何将证据门槛接入 Skill 的 applicability / assumptions / evidence_refs / version / rollback，形成发布治理？

**不要提前定论**：E0–E5 只是待检验的工程工作模型；不应将其视为统一统计学证据标准。

**当前会话转向**：Prompt 何以在不修改模型权重的情况下，改变已有能力的表达——考察 Task-Conditioned Computation、任务向量（Task Vectors）、Function Vectors、任务竞争与模型内部因果机制。

### 转向研究的参考入口
- Hendel et al. (2023), In-Context Learning Creates Task Vectors: https://aclanthology.org/2023.findings-emnlp.624/
- Yang et al. (2026), Shared Lexical Task Representations Explain Behavioral Variability in LLMs: https://proceedings.mlr.press/v306/yang26al.html
- Min et al. (2022), Rethinking the Role of Demonstrations: https://aclanthology.org/2022.emnlp-main.759/

### Impact Check
- 本次属于已有研究的 **延期状态与研究入口补充**，不改变此前工作模型的有效边界。
- 下一次用户恢复“反馈证据/Skill 修订”时，应回读本文第 3–6 节和本节，不能把当前 Prompt 研究误作已完成的因果反馈研究。
