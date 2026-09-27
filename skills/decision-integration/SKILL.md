---
name: decision-integration
description: 将已经稳定理解或验证的知识编译进项目的 Decision System。用于回答“这条知识在什么时候触发、影响哪个决策、与什么知识关系、如何改变选择”，避免知识只停留在笔记或讨论层。
---

# Decision Integration（决策整合）

## Context pointers（上下文指针）

执行前读取：
- `../../concepts/decision-integration-principle.md`
- `../../research/decision-system/01_决策系统_v0.1.md`

## Process（执行流程）

### ◆ Identify stable knowledge（识别稳定知识）
只整合已经基本理解、验证或明确标注不确定性的知识。

**Completion criterion:** 知识不是刚出现的临时说法。

### ◆ Locate the Decision Node（定位决策节点）
问：

> 这条知识会在什么选择点真正改变下一步？

如果找不到 Decision Node，不强行写入系统。

**Completion criterion:** 能指出明确的判断 / 选择 / 路由节点。

### ◆ Build Decision Hook（建立决策挂钩）
至少填写：

```text
Trigger:
Decision:
Relations:
Effect:
```

必要时增加 Evidence / Boundary / Stop Rule。

**Completion criterion:** 未来 Agent 能根据 Trigger 知道何时调用，并知道调用后要改变什么。

### ◆ Connect, don't duplicate（建立连接，不复制知识）
知识定义保留在 Canonical Concept / Research / Learning workspace 的 Single Source of Truth。

Decision System 只保存执行挂接和指针。

**Completion criterion:** 没有为了决策系统重复维护整套知识正文。

### ◆ Feedback update（反馈更新）
实际任务中若发现 Hook：
- 触发过早 / 过晚；
- 没改变选择；
- 与其他 Hook 冲突；
- 缺少关键上下文；

则更新 Hook，而不是只修补一次输出。

## Boundary（边界）

Decision Integration 不等于：
- 添加更多 checklist；
- 把所有知识强行程序化；
- 把复杂任务固定成单一路径。

系统应保持 Graph / Network（图 / 网络）结构，并允许反馈、分支和递归。
