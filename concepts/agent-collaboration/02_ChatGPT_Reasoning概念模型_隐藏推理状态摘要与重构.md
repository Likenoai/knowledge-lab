# ChatGPT Reasoning 概念模型：官方术语对齐版

> 状态：Working Concept Model（工作概念模型）v0.2
>
> 术语治理：遵循 `03_OpenAI_Reasoning术语治理_官方术语优先.md`。
>
> 原则：同一对象只保留一个术语；OpenAI 官方已有名称时，直接采用官方名称。

## 1. 核心对象

### raw chain of thought（原始思维链，raw CoT）

OpenAI 官方用于描述模型隐藏原始推理的术语。

- 隐藏；
- 不直接向终端用户展示；
- 不是一个用户可浏览、可逐字导出的公开对象。

废弃旧称：

`Raw Internal Deliberation`

以后不再作为正式术语使用。

---

### reasoning tokens（推理 token）

用于计量模型内部 reasoning 所消耗的 token。

它与 raw chain of thought 有关，但不是同一对象：

- raw chain of thought：隐藏推理内容 / 过程；
- reasoning tokens：使用量中的 token 计量。

---

### Reasoning item（推理项）

Responses API 中正式的 reasoning output item。

它可以：

- 有自己的 ID；
- 被后续调用继续引用；
- 在支持的模型中参与 persisted reasoning；
- 包含 Reasoning Summary；
- 保持 raw reasoning text opaque（不透明）。

---

### Reasoning State（推理状态）

OpenAI 官方术语。

它与 Conversation State（对话状态）不同。

Reasoning State 的作用是：

> 让支持 persisted reasoning（持久化推理）的模型，在后续调用中继续利用兼容的 earlier reasoning items。

Reasoning State 提供 continuity（连续性），但不暴露 raw reasoning。

---

### Persisted reasoning（持久化推理）

OpenAI 官方文档使用的描述。

它表示：

> reasoning items 可以被保留，并在后续调用中继续参与推理上下文。

不要再使用：

`Stateful Reasoning`

来指同一件事。

---

### Conversation State（对话状态）

OpenAI 官方术语。

它表示：

> 多轮交互中可见消息、assistant output、tool results 等对话内容被继续传递。

因此：

```text
Conversation State
≠
Reasoning State
```

前者主要解决“我们公开说过什么”，后者主要解决“此前 reasoning items 是否能继续被模型使用”。

---

### Reasoning Summary（推理摘要）

OpenAI 官方可见输出概念。

定义：

> 在模型支持且显式请求时，系统返回的 reasoning 自然语言摘要。

严格边界：

- Reasoning Summary 不是 raw chain of thought；
- 不是 Reasoning State 的解码；
- 只有系统 / API 实际返回的 summary 才使用这个术语；
- 不再把人工重写的解释叫 `Generated Reasoning Summary`。

---

## 2. Knowledge Lab 自定义术语

### Reasoning Reconstruction（推理重构）

该术语保留，因为 OpenAI 当前没有一个官方对象与它完全等价。

定义：

> 基于问题、答案、证据与可共享上下文，为解释“当前结论是怎样形成的”而重新组织出的推理路径。

典型结构：

```text
问题
↓
关键变量
↓
候选解释 / 方案
↓
比较、排除、修正
↓
证据与边界
↓
当前结论
```

Reasoning Reconstruction 不等于：
- raw chain of thought；
- Reasoning State；
- Reasoning Summary。

---

## 3. 当前规范模型

```text
User Input
   ↓
raw chain of thought
隐藏原始推理
   │
   ├────────→ Answer
   │
   ├────────→ Reasoning Summary
   │           （仅在系统 / API 实际提供时可见）
   │
   └────────→ Reasoning item(s)
                 ↓
           Reasoning State
                 ↓
         Persisted reasoning
         可支持后续调用继续利用
```

Reasoning Reconstruction 位于这个内部机制之外：

```text
Question + Answer + Evidence + Visible Context
↓
Reasoning Reconstruction
↓
面向用户的解释性推理结构
```

---

## 4. raw chain of thought 与 Reasoning State 的区别

```text
raw chain of thought
= 当前隐藏推理内容 / 过程

Reasoning State
= 可让后续调用继续使用 compatible reasoning items 的内部状态
```

二者不是同一对象。

也不能未经证据写成：

```text
raw CoT
→ 压缩
→ Reasoning State
```

OpenAI 官方只明确说明 persisted reasoning 提供连续性，同时保持 reasoning items opaque。

---

## 5. Reasoning Summary 与 Reasoning Reconstruction 的区别

| 维度 | Reasoning Summary | Reasoning Reconstruction |
|---|---|---|
| 术语来源 | OpenAI 官方 | Knowledge Lab 自定义 |
| 来源 | 系统 / API 针对 reasoning 返回的 summary | 根据可共享信息重新组织 |
| 是否 raw CoT | 否 | 否 |
| 是否一定可用 | 取决于模型 / 接口 / 设置 | 可以按需生成 |
| 目标 | 提供官方 reasoning summary | 解释“为什么得到当前结论” |

---

## 6. “模型是否知道自己的 raw chain of thought？”

需要避免把“参与推理”和“拥有完整自省接口”混为一谈。

更准确的说法：

```text
raw chain of thought 参与输出生成
≠
模型拥有一个可以任意浏览、回放和逐字导出的自省界面
```

所以：

> “输出你的 raw chain of thought”

与：

> “解释你为什么得到这个结论”

不是同一个请求。

后者可以通过 Reasoning Summary（若系统提供）与 Reasoning Reconstruction 满足。

---

## 7. 对长期人—Agent协作的意义

Reasoning State / Persisted reasoning 解决的是：

> 模型侧推理连续性。

但长期协作仍需要外部、可共同维护的显式知识对象。

因此我们保留：

### Shared Reasoning Artifact（共享推理资产）

定义：

> 人与 Agent 共同可查看、修改、引用、版本化的推理成果。

例如：

- Principle（原则）
- Working Model（工作模型）
- Decision Record（决策记录）
- Argument Map（论证图）
- Open Question（开放问题）
- GitHub Markdown 文档

这与 OpenAI 官方 reasoning 内部对象不是同一个 referent，因此允许保留自定义术语。

---

## 8. 与 Anchor 的关系

不再使用 “Machine-side Reasoning Continuity” 作为正式术语。

直接表达为：

```text
Reasoning State / Persisted reasoning
→ 支持模型跨调用继续利用 reasoning items

Anchor
→ 让人与 Agent 共享可见的目标、结构、结论、开放问题和认知位置
```

两者不是同一个对象。

Reasoning State 不能替代 Anchor，因为它是 opaque 的内部状态；Anchor 关注可共享、可检查、可维护的显式认知结构。

---

## 9. 当前协作协议

Reasoning Appendix Mode（推理附录模式）开启时：

- 若当前系统实际提供 Reasoning Summary，则原样展示；
- 若没有官方 Reasoning Summary，不制造同名内容；
- 对有实质推理的回答，可附加 Reasoning Reconstruction。

口令：

```text
推理附录：开
推理附录：关
推理附录：状态
```

---

## 10. 废弃术语表

```text
Raw Internal Deliberation
→ raw chain of thought

Stateful Reasoning
→ Reasoning State / Persisted reasoning

Machine-side Reasoning Continuity
→ 不作为正式概念

Generated Reasoning Summary
→ 停止使用
```

---

## 11. 官方资料

- OpenAI API Docs — Reasoning models  
  https://developers.openai.com/api/docs/guides/reasoning
- OpenAI API Docs — Conversation state  
  https://developers.openai.com/api/docs/guides/conversation-state
- OpenAI — Learning to reason with LLMs  
  https://openai.com/index/learning-to-reason-with-llms/
- OpenAI Cookbook — Reasoning items  
  https://developers.openai.com/cookbook/examples/responses_api/reasoning_items

> 本文件中的产品 / API 行为属于当前版本快照，未来如 OpenAI 官方术语或行为变化，应以官方文档为准并更新本文件。


## 12. ChatGPT 产品界面与 Responses API 的可用性边界

Reasoning Summary 不是像 raw chain of thought 那样“原则上隐藏”的对象。OpenAI Responses API 明确支持通过 `reasoning.summary` 显式请求摘要，摘要会出现在 reasoning output item 的 `summary` 数组中。

但这不意味着每个 OpenAI 产品表面都会把这个对象暴露给当前助手运行时。

需要区分：

```text
Responses API
→ 开发者可显式设置 reasoning.summary
→ 支持时可读取返回的 summary

ChatGPT 产品界面
→ 可能向用户展示某种 thinking / reasoning overview
→ 但当前聊天中的助手不一定获得一个可读取、可再次输出的 Reasoning Summary 对象
```

因此，在本协作环境中：

- 不能因为模型进行了 reasoning，就推断助手一定能读取官方 Reasoning Summary；
- 不能把 ChatGPT UI 中可能出现的 thinking 展示，自动等同于当前助手可访问的 API `reasoning.summary` 字段；
- 当当前运行接口没有向助手提供 Reasoning Summary 时，Reasoning Appendix Mode 不再显示无意义占位符，只输出 Reasoning Reconstruction。
