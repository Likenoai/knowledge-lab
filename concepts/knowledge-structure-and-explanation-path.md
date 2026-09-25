# Knowledge Structure & Explanation Path

> 状态：Canonical Working Concepts（规范工作概念）
> 用途：区分“为了准确思考而组织知识”和“为了让人理解而组织表达”。
> 适用：教学、解释、研究总结、口播、文档、知识库、AI 输出设计。

---

## 1. Knowledge Structure（知识结构）

### Definition

**Knowledge Structure（知识结构）**：以领域语义为中心，对知识中的概念、节点、维度与关系进行组织的模型。

它回答的主要问题是：

> **这个领域里有什么，以及它们之间到底是什么关系？**

它优先优化：
- semantic fidelity（语义准确）；
- relation correctness（关系正确）；
- boundary clarity（边界清楚）；
- completeness relative to the modeling purpose（相对建模目的的完整性）。

它**不负责**决定读者应该先看到什么、后看到什么。

### Typical forms

- Tree
- DAG
- Faceted Model
- Labeled Graph
- Matrix / taxonomy / causal model 等局部表示

### Boundary

Knowledge Structure ≠ Explanation Order。

一个概念在知识结构中是上位节点，不代表解释时必须先讲它。
一个概念在知识结构中很重要，也不代表第一次解释时必须完整展示。

---

## 2. Explanation Path（讲解路径）

### Definition

**Explanation Path（讲解路径）**：以特定受众的当前认知状态和目标理解为中心，从知识结构中选择必要内容，并安排其出现顺序，使受众能够连续建立正确心智模型的一条信息路径。

它回答的主要问题是：

> **为了让这个人真正理解，我下一步应该让他接触什么？**

它优先优化：
- comprehension continuity（理解连续性）；
- prerequisite fit（前置知识匹配）；
- cognitive load（认知负荷）；
- question flow（问题推进）；
- relevance to the audience goal（与受众目标的相关性）。

### Typical moves

- 先给现象，再命名；
- 先给问题，再给机制；
- 先给最小例子，再扩展边界；
- 先解决当前疑问，再补上位框架；
- 用对比、反例、类比帮助形成边界。

### Boundary

Explanation Path ≠ Knowledge Structure。

它不是领域分类树，也不声称展示完整知识空间。
它可以跳过知识结构中的节点，也可以暂时从一个下位例子开始，只要不扭曲原有语义。

---

## 3. Relation between them（两者关系）

两者不是父子层级，也不是两种互斥知识。

更准确的关系是：

```text
Knowledge Structure
  ├─ CONSTRAINS → Explanation Path
  │  讲解不能违背已有知识关系
  │
  └─ ENABLES → Explanation Path
     提供可选择的概念与关系空间

Audience State
  └─ CONSTRAINS → Explanation Path
     决定从哪里进入、讲多少、先讲什么

Explanation Path
  └─ PRECEDES → 内部的信息呈现顺序
```

因此：

> **同一个 Knowledge Structure 可以产生多条不同的 Explanation Path。**

面对专家、初学者、短视频观众、项目合作者，路径可以完全不同，但底层知识结构不能随意改变。

---

## 4. Two output views（两种输出视图）

### Map View（地图视图）

把 Knowledge Structure 显式呈现出来。

适合：
- 研究；
- 建模；
- 查错；
- 比较概念；
- 判断层级；
- 建知识库。

特点：
- 关系标签明确；
- 允许表格、树、DAG、Facet、Graph；
- 优先准确，不追求自然口语连续性。

### Explain View（讲解视图）

沿 Explanation Path 进行自然表达。

适合：
- 给人讲清楚；
- 教学；
- 回答复杂问题；
- 口播；
- 面向读者的文章。

特点：
- 结构主要藏在幕后；
- 一次推进一个认知问题；
- 让“为什么下一句是这一句”自然成立；
- 必要时再暴露局部结构，而不是把知识地图直接念出来。

---

## 5. Core Principle（核心原则）

> **Think in maps, explain in paths.**
>
> **思考时用地图，表达时走路径。**

进一步说：

> 内部结构要尽可能准确；外部表达要尽可能连续。  
> 讲解不是删掉结构，而是为受众设计一条进入结构的路。
