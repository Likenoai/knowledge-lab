---
name: knowledge-canvas
description: 将知识结构渲染为可拖动、缩放、搜索、查看详情的交互式 HTML 画布。用于用户要求知识画布、关系图、可拖拽结构化 HTML，或当复杂知识结构用线性页面表达损失明显时。
---

# Knowledge Canvas（知识画布）

## Context pointers（上下文指针）

执行前读取：
- `../../components/knowledge-canvas/README.md`
- `../../components/knowledge-canvas/SCHEMA.md`

当底层概念关系本身不清楚时，先执行：
- `../knowledge-structure-mapping/SKILL.md`

## Process（执行流程）

### ◆ Secure the structure（先确认知识结构）
明确节点、关系、分区和当前建模目的。不要用漂亮画布掩盖结构错误。

### ◆ Generate data, not a new engine（优先生成数据，不重写引擎）
默认只生成 / 修改：
- meta
- categories
- nodes
- edges

除非用户明确要求改变交互能力，否则不要重复生成 Canvas Engine。

### ◆ Use semantic edges（关系边要有语义）
重要边应尽量标注真实 Relation Type，例如 CAUSES / ENABLES / CONSTRAINS / PART_OF / PRECEDES / ≠。

### ◆ Maintain two delivery forms（维护两种交付形态）
- Source form（源码形态）：多文件，便于维护与复用；
- Standalone form（展示形态）：通过 `build.py` 打包成单个 HTML，优先用于 ChatGPT 预览与分享。

### ◆ Validate before handoff（交付前校验）
至少确认：
- JavaScript 语法通过；
- build 成功；
- 占位符已全部替换；
- 核心节点和关系存在；
- standalone HTML 可独立打开。

## Completion criterion（完成标准）

用户得到的不是“一次性 HTML”，而是：
1. 可复用的知识数据；
2. 可长期维护的 Canvas Engine；
3. 可直接预览的 standalone HTML。

## Boundary（边界）

Knowledge Canvas 负责呈现与交互，不负责替代知识求真、关系判定或研究本身。
