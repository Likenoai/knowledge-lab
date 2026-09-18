# Skills

## 定义

Skill 不是知识文档，而是改变 Agent 在特定任务中的决策流程。

Knowledge 回答：

> 世界是什么样？

Skill 回答：

> 面对某类问题，Agent 应该如何判断和行动？

## 设计原则

1. 不重复模型已有通用能力。
2. 只加入会改变决策的信息。
3. 提供判断流程，而不是堆积知识。
4. 使用渐进式加载：
   - SKILL.md 定义任务流程
   - references 存放深层知识
   - templates 存放输出结构

## Skill 目录

- short-drama-diagnostic：短剧诊断
- material-evaluation：素材适配评估
- script-diagnosis：剧本问题诊断
- character-design：人物设计
- value-conflict-design：价值冲突设计
