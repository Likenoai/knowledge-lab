# Node Typing 边界案例：当前混淆集中在 Instance vs Concept 与 Dimension vs Value

用户完成第三课边界案例后，表现出以下状态：

## 已稳定
- 能识别剧情流程中的“重生”为 Process / Stage。
- 能识别流程中的 Research 为 Process / Stage。
- 已形成“同一个词的 Node Type 取决于当前建模目的”的正确元认知。
- 对 Cost / High Cost 已主动察觉“如果 Cost 是 Dimension，则 High Cost 是 Value”，说明开始建立 Dimension–Value 边界意识。

## 当前混淆
### Instance vs Class / Concept
用户把“题材分类中的重生”和“作为抽象方法讨论的 Research”判断成 Instance。
需要强化：
- Instance = 某个具体个体 / 个案 / 一次具体发生。
- Class / Concept = 一类对象或抽象概念。
- “重生题材”是一个类别；“Research 是一种系统获取知识的方法”中的 Research 是抽象概念，不是某一次具体研究。

### Dimension vs Value
用户把“年龄”和“22岁”判断为同类 Value，也把 Cost 初步判断为 Value。
需要强化：
- Dimension = slot / axis（槽位 / 观察轴），回答“我们在描述哪个方面？”
- Value = filler / state（填充值 / 状态），回答“这个方面当前是什么？”
- 年龄 → Dimension；22岁 → Value。
- Cost → 在 Advantage Architecture 中是 Dimension；High Cost → Value。

## 下一步
不要扩展新 Node Type。继续用 contrastive boundary cases 训练：
1. 具体实例 vs 抽象概念；
2. 维度 / 槽位 vs 取值 / 填充值；
3. 同一词在不同 modeling purpose 下的重新定型。
