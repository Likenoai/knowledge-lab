# 推理输出协议：Reasoning Summary 与 Reasoning Reconstruction

> 状态：Working Protocol（工作协议）v0.1
>
> 目的：提高人—Agent 协作中的 Cognitive Transparency（认知透明度），同时严格区分隐藏推理与可共享推理产物。

## 1. 默认输出对象

对于具有实质推理内容的回答，在正文后默认附加两个独立区块：

### Reasoning Summary（推理摘要）
- 以独立代码块或 Markdown 区块展示；
- 输出可共享的推理摘要；
- 不把它表述为 Raw Internal Deliberation（原始内部推演）；
- 不把它表述为 Reasoning State（推理状态）的直接解码；
- 如果当前系统确实提供正式 reasoning summary，则优先原样呈现该可共享摘要；
- 如果系统未提供正式 summary，则明确标记为“Generated Reasoning Summary（生成式推理摘要）”，不得冒充原始内部摘要。

### Reasoning Reconstruction（推理重构）
- 以独立代码块或 Markdown 区块展示；
- 尽量保留完整的关键推理结构：
  问题 → 关键变量 → 候选解释 → 排除/比较 → 证据与边界 → 结论；
- 它是面向解释重新组织的推理结构，不是 Raw Internal Deliberation 的逐字回放。

## 2. 默认展示形式

不采用正文平铺。

优先：

```text
Reasoning Summary
...
```

```text
Reasoning Reconstruction
...
```

当内容较长、具有长期价值时，可另存为 Markdown 文档。

## 3. 术语边界

```text
Raw Internal Deliberation
原始内部推演
→ 隐藏，不输出

Reasoning State
推理状态
→ 隐藏、不透明，用于内部推理连续性

Reasoning Summary
推理摘要
→ 可共享的自然语言摘要；若非系统正式提供，必须标注为生成式摘要

Reasoning Reconstruction
推理重构
→ 为解释“如何从问题走到结论”而重新组织的推理结构

Answer
回答
→ 正文对外输出
```

## 4. “原始”的使用规则

“原始”只能指：
- 系统实际提供且可共享的 Reasoning Summary 原文；
- 或本轮实际生成出的 Reasoning Reconstruction 原文。

不能用“原始”指：
- Raw Internal Deliberation；
- Reasoning State；
- 对隐藏推理进行猜测性还原的文本。


## 5. 概念模型来源

关于 Raw Internal Deliberation、Reasoning State、Reasoning Item、Reasoning Summary、Reasoning Reconstruction、Conversation State 与 Stateful Reasoning 的完整概念边界，见：

`concepts/agent-collaboration/02_ChatGPT_Reasoning概念模型_隐藏推理状态摘要与重构.md`

该文件区分 OpenAI 官方术语与 Knowledge Lab 工作术语，并记录 2026-10-05 的官方 API 行为快照。
