# Skills

## 定义

Skill 不是知识文档，而是改变 Agent 在特定任务中的决策流程。

Knowledge 回答：

> 世界是什么样？

Skill 回答：

> 面对某类问题，Agent 应该如何判断和行动？

---

## 设计原则

◆ **Small（小）**

一个 Skill 只负责一个稳定、可复用的判断流程。不要把整个“编剧体系”塞进一个 Skill。

◆ **Composable（可组合）**

上层 Skill 可以调用更小的模型可调用 Skill。复杂任务由多个独立判断模块组合完成。

◆ **Progressive Disclosure（渐进式披露）**

- SKILL.md 放必须执行的步骤、边界和完成条件；
- 深层知识留在 research/、concepts/ 或 skill 内 references；
- 只有进入对应分支时才加载深层材料。

◆ **Context Pointer（上下文指针）**

description 和文档链接必须同时说明：

- 这是什么；
- 什么时候需要读取。

弱指针会导致正确资料没有被调用。

◆ **Completion Criterion（完成条件）**

每个重要步骤要定义“什么时候算完成”，避免 Agent 过早结束分析。

◆ **Single Source of Truth（单一事实来源）**

知识结论只保留一个权威位置。Skill 应引用研究文档，不复制整套知识形成平行版本。

◆ **Layer Discipline（层级纪律）**

Skill 必须明确自己工作在哪一层。题材、Premise（故事前提）、Audience（观众侧价值）、Plot（剧情）等不同层级不能无提示地混写。

---

## Invocation（调用方式）

当前新建 Skill 默认采用 **Model-invoked（模型可调用）**：

- 用户可以直接要求使用；
- Agent 在任务匹配时也可以自动调用；
- Skill 之间可以组合调用。

如果未来出现只应由用户明确触发的编排型 Skill，再单独使用 User-invoked（用户调用）模式。

---

## 当前 Skill 地图

### 已建立

◇ [short-drama-diagnostic](./short-drama-diagnostic/SKILL.md)  
短剧诊断。现有 v1.0，后续需要按新 Skill 规范重构。

◇ [genre-mechanism-research](./genre-mechanism-research/SKILL.md)  
题材机制研究。负责从市场事实、竞争假设、语义邻域文献检索推进到证据停点或实验待执行。

◇ [premise-architecture](./premise-architecture/SKILL.md)  
Premise Architecture（故事前提架构）分析。判断一个题材/设定改变了“主角—世界关系”的哪些基础条件。

◇ [advantage-architecture](./advantage-architecture/SKILL.md)  
Advantage Architecture（优势架构）分析。拆解角色在故事前提层获得的相对优势，不进入 Payoff（收益）和 Plot Causality（剧情因果）。

### 候选，尚未建立

◇ material-evaluation  
素材适配评估。

◇ script-diagnosis  
剧本问题诊断。

◇ character-design  
人物设计。

◇ value-conflict-design  
价值冲突设计。

---

## 当前组合关系

~~~text
genre-mechanism-research（题材机制研究）
        │
        ├─ 可读取 Premise Architecture（故事前提架构）研究
        │
        └─ 对题材机制建立证据链

premise-architecture（故事前提架构）
        │
        ├─ Advantage Architecture（优势架构）
        ├─ Constraint / Disadvantage Architecture（约束 / 劣势架构）
        ├─ Trade-off Architecture（交换 / 代价架构）
        ├─ Transformation Architecture（状态转换架构）
        ├─ World-Rule Architecture（世界规则架构）
        ├─ Epistemic Architecture（信息 / 认知架构）
        ├─ Problem / Threat Architecture（问题 / 威胁架构）
        └─ Relationship Architecture（关系架构）

premise-architecture
        │
        └─ 当检测到 Advantage Architecture
           调用 advantage-architecture
~~~

---

## Skill 与知识库的关系

~~~text
research/
提出问题、收集证据、保留不确定性
        ↓
concepts/
沉淀较稳定认知模型
        ↓
skills/
把稳定认知转成 Agent 的判断流程
        ↓
workflows/
多个 Skill 组合成实际创作/研究工作流
~~~

Skill 不应该抢占 research 的工作。

当一个机制仍处于明显研究演进中时：

> Skill 只引用当前研究状态和边界，不把工作假设伪装成稳定事实。
