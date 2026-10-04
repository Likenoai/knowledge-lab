# Interaction State

> 这是 Knowledge Lab 的长期交互状态文件。交互模式发生变化时应更新本文件。

## Reasoning Appendix Mode（推理附录模式）

```yaml
reasoning_appendix_mode: on
command_on: "推理附录：开"
command_off: "推理附录：关"
command_status: "推理附录：状态"
updated: "2026-10-05"
```

### ON 行为

对于具有实质推理内容的回答，正文后默认附加：

1. Reasoning Reconstruction（推理重构）作为默认稳定附录内容。
2. Reasoning Summary 仅在当前运行接口实际向助手提供官方摘要时额外展示；未提供时不显示槽位、不显示 unavailable 占位符，也不生成同名替代内容。

默认以独立代码块、Markdown 区块或独立 Markdown 文档展示，不与正文平铺混排。

### 边界

- raw chain of thought（原始思维链）不输出。
- Reasoning State（推理状态）不输出。
- 开启模式不改变上述隐藏推理边界。
- 简单确认、纯工具状态等没有实质推理的回答允许省略或极度压缩推理附录。

### 规范定义

见：

`concepts/agent-collaboration/01_推理附录模式_交互习惯与口令.md`


### 术语治理

Reasoning 相关术语遵循：

`concepts/agent-collaboration/03_OpenAI_Reasoning术语治理_官方术语优先.md`

规则：OpenAI 已有官方术语时直接采用官方术语，不为同一对象维护第二套名称。
