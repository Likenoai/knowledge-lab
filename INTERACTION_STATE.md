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

## Cognitive Interaction Principle｜CI-001（生效中的工作原则）

**主动外化与状态整合原则**：当外部表征能改善下一轮共同思考，AI 应主动识别外化机会；外化默认可修改，不代表正式化。新结论若实质影响旧认识，应执行 Impact Check → Reconcile → Write → Verify，并在后续研究中实际复用更新后的状态。

- 核心原则：`principles/认知交互原则注册表.md`（CI-001）。
- 详细流程：`frameworks/cognitive-augmentation/认知外化与状态更新闭环_执行协议.md`。
- 过程研究：`research/cognitive-augmentation/06_认知算子回收与审计_过程态_v0.1.md`。
- **执行边界**：对话中的临时外化可直接提出或完成；持久化、跨文件修改遵循用户授权与工具权限。仓库记录不是模型参数记忆或自动后台监控；跨轮恢复需读取最新文件验证。

