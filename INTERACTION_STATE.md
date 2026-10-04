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

1. Reasoning Summary；如果当前系统未提供正式可共享摘要，则标记为 Generated Reasoning Summary（生成式推理摘要）。
2. Reasoning Reconstruction（推理重构）。

默认以独立代码块、Markdown 区块或独立 Markdown 文档展示，不与正文平铺混排。

### 边界

- Raw Internal Deliberation（原始内部推演）不输出。
- Reasoning State（推理状态）不输出。
- 开启模式不改变上述隐藏推理边界。
- 简单确认、纯工具状态等没有实质推理的回答允许省略或极度压缩推理附录。

### 规范定义

见：

`concepts/agent-collaboration/01_推理附录模式_交互习惯与口令.md`
