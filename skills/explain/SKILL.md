---
name: explain
description: 把复杂内容沿一条自然的理解路径讲清楚，而不是直接展示知识架构。
disable-model-invocation: true
argument-hint: "要讲清楚的内容"
---

# Explain

用于输出 **Explanation Path（讲解路径）**。

## Context pointer

先读取：

- `../../concepts/knowledge-structure-and-explanation-path.md`

当底层概念关系本身不清楚、存在混轴或层级争议时，再读取并执行：

- `../knowledge-structure-mapping/SKILL.md`

## Process

### 1. Locate the audience state

判断：
- 对方现在知道什么；
- 当前卡在哪里；
- 最终需要理解到什么程度。

能从上下文判断时直接判断；只有缺失会显著改变讲解时才提问。

**Completion criterion:** 能明确“从什么认知状态走向什么目标状态”。

### 2. Secure the knowledge map

确认支撑讲解的概念、关系和边界足够稳定。

如果底层结构不稳，先做 Map；不要用流畅表达掩盖概念混乱。

**Completion criterion:** 讲解不会依赖一个已知错误或混轴的知识结构。

### 3. Choose the entry point

不要机械从最高层概念讲起。

优先选择最容易让当前受众建立抓手的入口：
- 当前问题；
- 直观现象；
- 最小例子；
- 冲突 / 误区；
- 已有经验。

**Completion criterion:** 第一段让受众知道“现在为什么要理解这件事”。

### 4. Build one cognitive move at a time

每一段只推进一个主要认知变化。

常见路径：

```text
问题
→ 直觉
→ 例子
→ 区分
→ 概念命名
→ 更深机制
→ 回到原问题
```

这不是固定模板；顺序服从受众理解。

**Completion criterion:** 相邻两段之间存在自然的问题—回答或前提—结果关系。

### 5. Reveal structure only when it helps

内部可以有完整 Map，但默认不把整张 Map 念给受众。

只有当局部结构能减少混淆时，才显式使用：
- 小表格；
- 小图；
- 少量层级；
- 对比框架。

**Completion criterion:** 结构帮助理解，而不是成为理解负担。

### 6. Name after intuition when useful

对于陌生、抽象概念，可以先让受众形成直觉，再给术语和定义。

对于必须先精确定义才能继续的正式概念，可以提前命名。

**Completion criterion:** 术语出现时，受众已经有足够的语义抓手，或定义本身就是后续理解的必要前提。

### 7. Close the loop

最后回到最初的问题，说明刚才的内容究竟改变了什么理解。

不要为了“完整”额外展开新的大分支。

**Completion criterion:** 受众能用自己的话复述核心机制，而不只是记住一组标题。

## Default style

- cohesive prose（连贯叙述）优先；
- 标题只用于真正的认知转折；
- 少用“一级 / 二级 / 三层 / 四端”式架构展示，除非它本身就是用户要理解的对象；
- 术语用于精确，不用于制造形式感；
- 先保证理解连续，再决定是否展示完整结构。

## Boundary

Explain 不修改底层事实来换取“好懂”。

当流畅性和语义准确发生冲突时，先修正 Knowledge Structure，再重新设计 Explanation Path。
