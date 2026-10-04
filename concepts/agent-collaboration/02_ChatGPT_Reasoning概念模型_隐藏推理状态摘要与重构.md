# ChatGPT Reasoning 概念模型：隐藏推理、推理状态、摘要与重构

> 状态：Working Concept Model（工作概念模型）v0.1  
> 记录日期：2026-10-05  
> 目的：把我们关于 ChatGPT / OpenAI reasoning（推理）机制的讨论整理为可长期复用的概念边界，服务于人—Agent 协作、Anchor 设计与推理附录模式。  
> 重要说明：本文同时包含 **OpenAI 官方术语** 与 **我们为了协作引出的工作术语**，两者必须明确区分。

---

## 1. 为什么需要这组概念

用户希望更准确地理解 Agent：

- 一次回答内部发生了什么；
- 哪些内部内容会继续影响下一轮；
- 哪些内容能够被用户看到；
- 哪些只能被重新解释或重构；
- 为什么长期协作仍然需要外部知识资产，而不能只依赖模型“内部记得”。

如果只使用“思维链”“上下文”“推理”几个宽泛词语，会把不同对象混在一起。

因此需要建立一个分层概念模型。

---

# 2. 核心概念

## 2.1 Raw Internal Deliberation（原始内部推演）

> **工作术语，不是 OpenAI API 的正式字段名。**

定义：

> 模型在一次生成过程中发生的隐藏推理活动，包括候选生成、比较、排除、修正、中间推断、规划以及其他内部计算。

它强调的是：

> **Process（过程）**

即：

> “这一轮推理是怎样展开的？”

OpenAI 官方通常使用：
- raw chain of thought（原始思维链）
- chain of thought / CoT（思维链）
- reasoning tokens（推理 token）

等概念描述隐藏推理。

### 当前边界

OpenAI 明确表示，生产模型的 raw chain of thought 不直接展示给用户。

因此：

```text
Raw Internal Deliberation
= 隐藏推理过程
≠ 用户可读取的逐字思考日志
```

同时，也不应该把它想象成：

> “模型内部存在一份整洁、连续、可以随时打开的文字日记。”

隐藏推理参与生成答案，不等于模型拥有对其完整、逐字、可浏览的 introspective access（自省访问）。

---

## 2.2 Reasoning State（推理状态）

> **OpenAI 官方文档使用的概念。**

定义：

> 能够在后续调用中继续提供 reasoning continuity（推理连续性）的内部推理状态。

OpenAI 当前 Responses API 文档明确区分：

- Conversation State（对话状态）
- Reasoning State（推理状态）

官方说明：

> persisted reasoning（持久化推理）可以把兼容的早期 reasoning items 带入后续模型上下文，但不会暴露 raw reasoning；reasoning items 保持 opaque（不透明）。

因此 Reasoning State 强调的是：

> **State（状态）**

即：

> “哪些内部推理信息仍然能够被后续推理继续利用？”

### Raw Internal Deliberation 与 Reasoning State 的差异

```text
Raw Internal Deliberation
= 当前推理活动
= Process

Reasoning State
= 可支持后续推理连续性的内部状态
= State
```

不能未经证据写成：

```text
Raw Internal Deliberation
→ 压缩
→ Reasoning State
```

因为官方并没有说明它就是对原始推演文本的压缩文件。

更稳妥的表述是：

> 二者相关，但内部编码与映射机制对用户保持不透明。

---

## 2.3 Reasoning Item（推理项）

> **OpenAI Responses API 的正式对象。**

Responses API 中 reasoning model 可以产生 reasoning item。

reasoning item：

- 有自己的 ID；
- 可以参与后续调用；
- 可以在支持的模型中提供推理连续性；
- 原始 reasoning text 对生产模型保持 opaque；
- 可以包含一个可共享的 `summary` 字段。

因此：

> Reasoning State 是一个更高层的“状态”概念；  
> Reasoning Item 是 API 中承载 / 引用推理连续性的具体对象之一。

---

## 2.4 Reasoning Summary（推理摘要）

> **OpenAI API 的正式可见输出概念。**

定义：

> 对隐藏 reasoning / chain-of-thought 生成的自然语言摘要。

重要边界：

> **Reasoning Summary ≠ Raw Internal Deliberation 的逐字节选。**

它更适合被理解为：

> **generated natural-language representation（生成式自然语言表征）**

即：

```text
Hidden reasoning
↓
生成可共享描述
↓
Reasoning Summary
```

而不是：

```text
Raw CoT
↓
删掉一部分
↓
剩下原文
```

### 与 Reasoning State 的关系

必须避免一个常见误解：

```text
Reasoning State
→ 解码
→ Reasoning Summary
```

目前没有依据支持这种说法。

更稳妥的概念关系：

```text
                  Hidden Reasoning
                   /            \
                  /              \
                 ↓                ↓
       Reasoning State      Reasoning Summary
       内部推理连续性          可共享摘要
       opaque                visible
```

---

## 2.5 Reasoning Reconstruction（推理重构）

> **我们的工作术语，不是 OpenAI 的正式 API 概念。**

定义：

> 为了让用户理解“为什么得到这个结论”，基于当前问题、答案、证据与可共享信息，重新组织出关键推理结构。

典型形式：

```text
问题
↓
关键变量
↓
候选解释 / 候选方案
↓
比较、排除、修正
↓
证据与边界
↓
当前结论
```

### 最关键的边界

```text
Reasoning Reconstruction
≠ Raw Internal Deliberation replay
```

它不是隐藏推理的录像回放。

它是：

> **explanatory reconstruction（解释性重构）**

因此即使它写得很完整，也不能声称：

> “这就是模型当时逐字思考的全部内容。”

---

## 2.6 Answer（回答）

Answer 是默认的对外输出对象。

它可能包含：

- Conclusion（结论）
- Explanation（解释）
- Evidence（证据）
- Recommendation（建议）
- Reasoning Summary（若接口提供）
- Reasoning Reconstruction（若协作协议要求）

因此：

```text
Reasoning Reconstruction
不是 Answer 本身

而是：
Answer 中可能附加的一种解释性内容
```

---

# 3. 一次推理的工作模型

当前最稳妥的模型是：

```text
User Input
    ↓
Raw Internal Deliberation
隐藏的当前推理过程
    ↓
    ├──────────────→ Answer
    │                 用户可见
    │
    ├──────────────→ Reasoning Summary
    │                 若系统 / 接口提供，则可共享
    │
    └──────────────→ Reasoning State / Reasoning Items
                      opaque
                      ↓
                后续推理可以继续利用
```

这里的箭头表示功能关系，不表示已知的底层实现细节。

---

# 4. 跨轮连续性：Stateful Reasoning，而不是 Continuous Thought

我们曾讨论：

> 人类往往具有主观连续的思维体验；模型是否也是“一直连续地想”？

当前更准确的工作术语是：

# **Stateful Reasoning（有状态推理）**

而不是：

# Continuous Thought（连续思维）

工作模型：

```text
Turn 1

Current Context
↓
Internal Deliberation₁
↓
Answer₁
+
available Reasoning State₁


Turn 2

Conversation State
+ available Reasoning State
+ Memory
+ External Knowledge
+ New Input
↓
Internal Deliberation₂
```

所以不能简单理解为：

> “同一个意识从上一句话无缝继续往下想。”

更准确是：

> 新一轮生成可以基于已有状态继续推理，但它仍然是一次新的推演活动。

---

# 5. Conversation State 与 Reasoning State

OpenAI 官方特别区分这两个概念。

## Conversation State（对话状态）

主要包含：

- 用户输入；
- 助手可见输出；
- 工具结果；
- 被继续传递的对话对象。

它解决：

> **模型知道我们公开说过什么。**

## Reasoning State（推理状态）

用于：

> **让模型继续利用之前可用的内部推理项。**

它解决：

> **模型能否延续此前的推理工作，而不是完全重新计算。**

因此：

```text
Conversation State
≠
Reasoning State
```

但两者都可能成为下一轮推理的输入条件。

---

# 6. 当前 OpenAI API 的实现边界（2026-10-05 快照）

根据 OpenAI 当前官方文档：

- Responses API 支持 reasoning items；
- persisted reasoning 可以用于跨调用推理连续性；
- reasoning items 保持 opaque，不返回 raw reasoning text；
- `reasoning.context` 可以控制哪些可用 reasoning items 被带入后续推理；
- GPT-5.6 family 当前支持 `all_turns`，并默认使用该模式；
- `previous_response_id`、conversation 或完整 replay 都可以用于延续上下文；
- reasoning item 可以带有 `summary`；
- raw chain of thought 在 OpenAI 生产模型中不直接向终端用户展示。

这些属于产品 / API 行为快照，未来可能变化，因此不应上升为永久本体论。

---

# 7. “模型知道自己的原始内部推演吗？”

需要区分两个概念：

## Computation Participation（计算参与）

模型的隐藏推理参与了当前输出生成。

这个意义上：

> 是。

## Introspective Access（自省访问）

模型是否像人打开日记一样：

- 浏览；
- 回放；
- 逐字复制；
- 任意访问；

自己的完整 raw internal deliberation？

不能这样理解。

因此：

```text
参与内部推理
≠
拥有完整的自省读取接口
```

这也是为什么：

> “请把刚才 raw CoT 全部打印出来”

与：

> “请解释你为什么得到这个结论”

是两个不同请求。

前者要求访问隐藏推理本体；后者可以通过 Reasoning Summary / Reconstruction 满足。

---

# 8. Reasoning Summary 与 Reasoning Reconstruction 的关键区别

| 维度 | Reasoning Summary | Reasoning Reconstruction |
|---|---|---|
| 来源 | 系统 / 模型针对隐藏推理生成摘要 | 为解释结论而重新组织推理 |
| OpenAI 正式概念 | 是 | 否，我们的工作术语 |
| 是否 raw CoT | 否 | 否 |
| 目标 | 压缩描述隐藏推理 | 提供可检查的论证结构 |
| 是否一定存在 | 取决于接口 / 设置 | 可以按需生成 |
| 忠实性问题 | 摘要本身也是生成式表征 | 更明确属于重构 |

---

# 9. 我们的人—Agent协作模型

对长期协作而言，可以区分：

```text
               Human-visible layer
┌─────────────────────────────────┐
│ Conversation State              │
│ Answer                          │
│ Reasoning Summary               │
│ Reasoning Reconstruction        │
│ Shared Reasoning Artifacts      │
└─────────────────────────────────┘

               Hidden layer
┌─────────────────────────────────┐
│ Raw Internal Deliberation       │
│ Reasoning State / Reasoning     │
│ Items (opaque)                  │
└─────────────────────────────────┘
```

长期重要知识不应只依赖隐藏层。

如果某个判断以后还需要：

- 检查；
- 修改；
- 引用；
- 版本管理；
- 与人共同维护；

就应该 Externalize（外化）为：

# Shared Reasoning Artifact（共享推理资产）

例如：

- Principle（原则）
- Working Model（工作模型）
- Decision Record（决策记录）
- Argument Map（论证图）
- Open Question（开放问题）
- GitHub Markdown 文档

---

# 10. 与 Anchor 的连接

Reasoning State 和 Anchor 服务不同对象。

工作区分：

```text
Reasoning State
≈ Machine-side Reasoning Continuity
模型侧推理连续性

Anchor
≈ Human–Agent Shared Cognitive Continuity
人—Agent共享认知连续性
```

即使模型拥有 reasoning continuity，人依然未必知道：

- 当前目标是什么；
- 已经确认了什么；
- 哪些问题仍开放；
- 为什么某个方向被放弃；
- 当前讨论处于哪个结构节点。

因此 Reasoning State 不能替代 Anchor。

Anchor 的价值恰恰在于：

> 把值得共享的认知状态变成人与 Agent 都能检查的显式对象。

---

# 11. 当前协作协议

我们已经建立：

## Reasoning Appendix Mode（推理附录模式）

开启：

```text
推理附录：开
```

关闭：

```text
推理附录：关
```

查询：

```text
推理附录：状态
```

开启状态下，具有实质推理内容的回答默认在正文后附加：

1. Reasoning Summary；若当前系统没有提供正式 summary，则使用：
   **Generated Reasoning Summary（生成式推理摘要）**
2. Reasoning Reconstruction（推理重构）

当前状态由：

`/INTERACTION_STATE.md`

作为 Knowledge Lab 中的显式协作状态源。

---

# 12. 当前最稳定的概念关系

```text
Raw Internal Deliberation
原始内部推演
= 隐藏的推理过程
= Process
        │
        ├────────→ Answer
        │
        ├────────→ Reasoning Summary（若提供）
        │
        └────────→ Reasoning State / Items
                      = opaque state
                      = 可支持后续推理连续性

Reasoning Reconstruction
= 对“问题如何走到结论”的解释性重构
= 不是隐藏推理的逐字回放
```

---

# 13. 仍需继续研究的问题

1. Reasoning Summary 的 faithfulness（忠实性）应该如何评估？
2. Reasoning State 在产品层与 API 层的实际实现是否完全一致？
3. Reasoning Item 与更抽象的 Reasoning State 应如何严格区分？
4. 哪些内部推理结果值得 Externalize（外化）？
5. 如何定义 Externalization Criterion（外化准则）？
6. Anchor 应保存：
   - 结论？
   - 当前假设？
   - 已排除路径？
   - 决策理由？
   - 开放问题？
   - 当前认知位置？
7. Cognitive Inspectability（认知可检查性）能否形成独立的人—Agent 协作设计原则？

---

# 14. 官方资料

- OpenAI, *Learning to reason with LLMs*  
  https://openai.com/index/learning-to-reason-with-llms/

- OpenAI API Docs, *Reasoning models*  
  https://developers.openai.com/api/docs/guides/reasoning

- OpenAI API Docs, *Conversation state*  
  https://developers.openai.com/api/docs/guides/conversation-state

- OpenAI API Cookbook, *Better performance from reasoning models using the Responses API*  
  https://developers.openai.com/cookbook/examples/responses_api/reasoning_items

- OpenAI API Reference, *Responses / Reasoning Item*  
  https://developers.openai.com/api/reference/

---

# 15. 术语性质速查

```text
OpenAI / API 官方概念：
- Reasoning State
- Reasoning Item
- Reasoning Summary
- Conversation State
- raw chain of thought
- reasoning tokens

我们的工作术语：
- Raw Internal Deliberation
- Reasoning Reconstruction
- Stateful Reasoning
- Shared Reasoning Artifact
- Cognitive Inspectability
- Reasoning Appendix Mode
```

后续如果官方术语发生变化，应更新本文件，而不是让工作术语覆盖官方定义。
