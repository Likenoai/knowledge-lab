# Knowledge Canvas Engine v1

一个无外部依赖、数据驱动的知识画布组件。

## 设计目标

- 源码层：HTML / CSS / JS / Data 分离，便于长期复用和维护。
- 交付层：通过 `build.py` 打包为单个自包含 HTML，方便 ChatGPT 预览、分享和离线打开。
- 内容层：后续创建新画布时，优先只修改 `*.data.js`，而不是重复写拖拽、缩放、小地图、详情面板等代码。

## 目录

```text
components/knowledge-canvas/
├─ README.md
├─ SCHEMA.md
├─ build.py
├─ src/
│  ├─ canvas-shell.html
│  ├─ knowledge-canvas.css
│  └─ knowledge-canvas.js
└─ examples/
   ├─ question-framing.data.js
   └─ question-framing.dev.html
```

## 开发模式（多文件）

`examples/question-framing.dev.html` 引用：
- `../src/knowledge-canvas.css`
- `./question-framing.data.js`
- `../src/knowledge-canvas.js`

适合源码开发与维护。

## 打包模式（单 HTML）

```bash
python build.py examples/question-framing.data.js dist/question-framing-canvas.html
```

构建时把 Shell + CSS + Data + JS 合并为单个自包含 HTML。

## 新建一个画布

通常只复制一个数据文件，修改：
- `meta`
- `categories`
- `nodes`
- `edges`

Engine 统一负责：
- 画布拖动 / 平移
- 鼠标滚轮缩放
- 节点拖动
- 自动绘制关系线
- 节点详情面板
- 搜索 / 高亮
- Mini Map（小地图）
- Fit View（适配全图）
- Reset Layout（重置布局）
- Save Layout（浏览器本地保存布局）
- Export Layout（导出节点位置 JSON）

## 设计原则

> **Content as data, interaction as engine.**
>
> **内容作为数据，交互作为引擎。**

以后 ChatGPT 创建知识画布时，优先生成知识节点与关系，而不是重新生成整套 HTML / CSS / JS。
