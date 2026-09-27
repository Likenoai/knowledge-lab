# Knowledge Canvas Data Schema

数据文件形式：

```js
window.KNOWLEDGE_CANVAS_DATA = {
  meta: {...},
  categories: {...},
  nodes: [...],
  edges: [...]
};
```

## meta

```js
meta: {
  id: "question-framing",
  title: "Question Framing（问题定界）",
  subtitle: "把模糊问题转换成现实可回答的问题",
  worldWidth: 4200,
  worldHeight: 2800,
  initialScale: 0.78
}
```

`id` 用于 localStorage 保存布局，必须稳定。

## categories

```js
categories: {
  core: {
    label: "Question Framing Core",
    color: "#5b8cff"
  }
}
```

## nodes

```js
{
  id: "causal",
  x: 1660,
  y: 1550,
  category: "type",
  variant: "default",
  title: "Causal（因果）",
  summary: "改变 X 是否导致 Y 改变？",
  details: {
    quote: "可选高亮句",
    points: ["要点1", "要点2"]
  }
}
```

必填：`id / x / y / category / title / summary`。

`variant` 可选：
- `default`
- `root`
- `group`

## edges

```js
{
  from: "association",
  to: "causal",
  label: "≠",
  strong: true
}
```

必填：`from / to`。

可选：`label / strong`。

## 关系语义建议

边标签尽量写出真实 Relation Type，而不是无语义的“父子关系”。

例如：
- `CAUSES`
- `ENABLES`
- `CONSTRAINS`
- `PRECEDES`
- `PART_OF`
- `VALUE_OF`
- `ASSOCIATED_WITH`
- `≠`

## 内容与引擎的边界

数据文件负责：
- 节点是什么；
- 节点放在哪里；
- 节点之间有什么关系；
- 节点详情是什么。

Engine 负责：
- 拖动；
- 缩放；
- 平移；
- 搜索；
- 连线；
- 详情面板；
- 小地图；
- 本地布局保存。
