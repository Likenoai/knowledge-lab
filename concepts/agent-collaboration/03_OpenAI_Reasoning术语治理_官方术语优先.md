# OpenAI Reasoning 术语治理：官方术语优先

> 状态：Canonical Terminology Policy（规范术语策略）v1.0
>
> 目标：凡是 OpenAI 已有官方术语的对象，Knowledge Lab 直接采用官方术语；不再为同一对象另造同义词。只有在官方术语无法覆盖、且确有独立解释职责时，才允许保留自定义工作术语。

## 1. 最高规则

> **Same Referent, One Term（同一对象，一个术语）。**

如果 OpenAI 官方已经为某一对象提供稳定名称：

- 使用官方英文术语；
- 中文仅作为翻译，不创造第二个英文概念；
- 旧的自定义同义词停止使用；
- 文档中需要保留旧词时，只作为 Deprecated Alias（废弃别名）说明，不继续参与建模。

## 2. 当前规范术语

### Raw chain of thought（原始思维链 / raw CoT）

OpenAI 官方用于描述模型隐藏的原始推理过程。

规范用法：

```text
raw chain of thought（原始思维链，raw CoT）
```

废弃同义词：

```text
Raw Internal Deliberation
```

原因：它与 raw chain of thought 指向同一对象，没有必要维持两套术语。

---

### Reasoning tokens（推理 token）

模型用于内部推理的 token 计量概念。

它与 raw chain of thought 有关，但不是同一对象：

- raw chain of thought：隐藏推理内容 / 过程；
- reasoning tokens：API usage 中对内部推理 token 的计量。

---

### Reasoning item（推理项）

Responses API 中承载 reasoning 的正式 output item。

Reasoning item 可以：

- 拥有 ID；
- 被后续调用继续引用 / 使用；
- 包含 Reasoning Summary；
- 对生产模型保持 raw reasoning text 不透明。

---

### Reasoning state（推理状态）

OpenAI 官方用于区分于 Conversation State 的术语。

它描述：

> persisted reasoning（持久化推理）使兼容的 earlier reasoning items 可以在后续调用中继续参与模型上下文。

不要用下列词替代：

- Stateful Reasoning
- Machine-side Cognitive Continuity
- reasoning-carried-forward

这些最多可以作为解释性短语，不作为正式概念节点。

---

### Persisted reasoning（持久化推理）

OpenAI 官方文档使用的描述，用于表示 reasoning items 被保留并用于后续调用的机制 / 能力。

它与 Reasoning State 有关，但职责不同：

- Reasoning State：状态概念；
- Persisted reasoning：跨调用保存 / 复用 reasoning 的机制描述。

---

### Conversation state（对话状态）

OpenAI 官方术语。

表示多轮对话中可见消息、输出 item、工具结果等被继续传递的上下文状态。

不得与 Reasoning State 混用。

---

### Reasoning Summary（推理摘要）

OpenAI 官方可见输出概念。

定义：

> 通过 reasoning summary 功能生成的、对模型 reasoning 的自然语言摘要。

严格规则：

- 只有系统 / API 实际提供的 summary 才称为 **Reasoning Summary**；
- 不把我们自己重新写出的解释叫 Reasoning Summary；
- 不使用“Generated Reasoning Summary”作为替代，因为它会与官方 Reasoning Summary 混淆。

---

## 3. 允许保留的 Knowledge Lab 自定义术语

### Reasoning Reconstruction（推理重构）

保留。

原因：

OpenAI 当前官方术语中没有一个对象与它完全等价。

定义：

> 基于问题、答案、证据和可共享上下文，为解释“结论是如何形成的”而重新组织出的推理路径。

它不是：

- raw chain of thought；
- Reasoning Summary；
- Reasoning State。

因此它有独立解释职责，可以作为 Knowledge Lab 自定义术语存在。

---

### Reasoning Appendix Mode（推理附录模式）

保留。

原因：

这是我们的人—Agent交互协议，不是对 OpenAI 内部机制的重新命名。

---

### Shared Reasoning Artifact（共享推理资产）

暂时保留。

原因：

它指人和 Agent 共同维护、可检查、可版本化的外部推理资产，例如：
- Principle；
- Working Model；
- Decision Record；
- Argument Map；
- Open Question。

OpenAI 官方 Reasoning 术语没有直接覆盖这一对象。

## 4. 废弃术语

以下术语停止作为正式概念使用：

```text
Raw Internal Deliberation
→ 使用 raw chain of thought

Stateful Reasoning
→ 使用 Reasoning State / Persisted reasoning（根据语境）

Machine-side Reasoning Continuity
→ 仅作解释性短语，不作为正式概念

Generated Reasoning Summary
→ 停止使用；若没有官方 Reasoning Summary，则输出 Reasoning Reconstruction
```

## 5. 当前规范关系

```text
raw chain of thought
隐藏原始推理
        │
        ├── reasoning tokens
        │   内部推理 token 的计量
        │
        ├── Reasoning item
        │   Responses API 中的 reasoning 对象
        │        ↓
        │   Reasoning State / Persisted reasoning
        │   可支持跨调用推理连续性
        │
        └── Reasoning Summary
            若显式请求且模型支持，则可见

Reasoning Reconstruction
= Knowledge Lab 自定义的解释性重构
= 不等于上述任何官方对象
```

## 6. 术语引入准入规则

以后引入新概念前依次检查：

1. OpenAI 官方是否已经有术语？
2. 如果有，是否与我们要表达的是同一个 referent（指称对象）？
3. 如果是同一个对象：直接使用官方术语。
4. 如果不是：新术语必须说明其 Unique Explanatory Role（独特解释职责）。
5. 如果只是“更好听的同义词”：不创建。

## 7. 官方来源

- OpenAI API Docs — Reasoning models  
  https://developers.openai.com/api/docs/guides/reasoning
- OpenAI API Docs — Conversation state  
  https://developers.openai.com/api/docs/guides/conversation-state
- OpenAI — Learning to reason with LLMs  
  https://openai.com/index/learning-to-reason-with-llms/
- OpenAI Cookbook — Reasoning items  
  https://developers.openai.com/cookbook/examples/responses_api/reasoning_items
