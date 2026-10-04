# 推理输出协议：Reasoning Summary 与 Reasoning Reconstruction

> 状态：Working Protocol（工作协议）v0.2
>
> 术语治理：遵循 `03_OpenAI_Reasoning术语治理_官方术语优先.md`。

## 1. 核心原则

同一对象只使用一个权威术语。

- OpenAI 官方已有术语时，直接采用官方术语；
- 不再使用自造同义词替代官方术语；
- Reasoning Reconstruction（推理重构）仅因官方目前没有等价对象而保留。

## 2. Reasoning Summary（推理摘要）

Reasoning Summary 是 OpenAI 官方术语。

严格规则：

- 只有当前系统 / API 实际提供的 reasoning summary 才使用这个名称；
- 不把我们自己生成的解释称为 Reasoning Summary；
- 不再使用 `Generated Reasoning Summary`；
- Reasoning Summary 不是 raw chain of thought 的逐字节选，也不是 Reasoning State 的直接解码。

## 3. Reasoning Reconstruction（推理重构）

这是 Knowledge Lab 自定义术语。

定义：

> 基于问题、答案、证据和可共享上下文，为解释“如何从问题走到当前结论”而重新组织的推理结构。

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

它不是：
- raw chain of thought；
- Reasoning State；
- Reasoning Summary。

## 4. 默认输出行为

当 Reasoning Appendix Mode（推理附录模式）开启：

- 如果当前接口实际提供 Reasoning Summary：正文后先展示 Reasoning Summary；
- 无论是否提供官方 Summary，只要存在实质推理，可展示 Reasoning Reconstruction；
- 如果当前接口没有官方 Reasoning Summary，不伪造同名内容。

## 5. 隐藏边界

```text
raw chain of thought
→ 隐藏，不直接输出

Reasoning State
→ opaque（不透明），不直接输出

Reasoning Summary
→ 仅在系统 / API 实际提供时输出

Reasoning Reconstruction
→ 可按我们的协作协议生成
```

## 6. 关联文档

- `01_推理附录模式_交互习惯与口令.md`
- `02_ChatGPT_Reasoning概念模型_隐藏推理状态摘要与重构.md`
- `03_OpenAI_Reasoning术语治理_官方术语优先.md`
