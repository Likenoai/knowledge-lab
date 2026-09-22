# Skills

Skill 负责改变 Agent 在特定任务中的**执行过程**；知识定义、研究结论和完整分类优先保留在 `research/`、`concepts/` 等权威来源中。

## 当前原则

◆ **Process over knowledge（过程优先）**  
Skill 固定“遇到这类任务怎么做”，不复制整套领域知识。

◆ **Single Source of Truth（单一事实来源）**  
分类、定义、证据等级等只保留一个权威位置。Skill 通过 Context Pointer（上下文指针）读取。

◆ **Progressive Disclosure（渐进式披露）**  
SKILL.md 只保留触发条件、稳定步骤、关键边界和完成条件；分支知识按需加载。

◆ **Invocation follows agency（调用方式服从任务性质）**  
模型应自主发现的基础能力使用 Model-invoked（模型可调用）；只有用户明确启动才合理的完整任务编排使用 User-invoked（用户调用）。

## 自研 Skill

### Model-invoked（模型可调用）

◇ [genre-mechanism-research](./genre-mechanism-research/SKILL.md)  
研究“为什么某个题材 / 设定 / 受众偏好有效”，负责定界、现实检查、竞争假设、科学研究、证据映射与研究停点。

◇ [premise-architecture](./premise-architecture/SKILL.md)  
分析一个故事前提改变了哪些初始条件。当前分类体系以 `research/00_短剧题材研究_层级地图.md` 为唯一来源。

◇ [advantage-architecture](./advantage-architecture/SKILL.md)  
当故事前提产生相对正向不对称时，分析这个优势相对于谁成立、是什么优势、具有哪些边界。当前变量定义以研究文档为唯一来源。

◇ [evidence-based-review](./evidence-based-review/SKILL.md)  
对已学知识执行科学复习：先提取，再诊断、纠错、对比、自我解释和迁移；科学依据以 `research/learning-science/01_复习方法的科学证据.md` 为唯一来源。

### User-invoked（用户调用）

◇ [learn-new-domain](./learn-new-domain/SKILL.md)  
系统学习一个新领域的长期编排 Skill。源自 Matt Pocock 的 `teach`，负责 Mission、Resources、Glossary、Learning Records、逐课反馈闭环与学习状态维护；复习阶段委托给 `evidence-based-review`。

◇ [short-drama-diagnostic](./short-drama-diagnostic/SKILL.md)  
启动一次完整的短剧综合诊断。它是 orchestration skill（编排 Skill），负责组织诊断过程；不是注意力、冲突、人物等知识本身的仓库。

## 关系

```text
genre-mechanism-research
题材为什么有效？
        │
        └─ 需要分析前提结构时
           → premise-architecture
                    │
                    └─ 命中 Advantage Architecture（优势架构）
                       → advantage-architecture

learn-new-domain
用户主动启动长期学习
        │
        ├─ 新知识不足 → 研究 / 高可信资源
        └─ 需要巩固 → evidence-based-review

short-drama-diagnostic
用户主动启动综合诊断
        │
        └─ 按作品实际问题调用需要的模型可调用能力
```

## 外部 Skill

`skills/vendor/mattpocock/` 保存 Matt Pocock 的通用 Skill 原版，作为 vendor reference（外部参考）。项目自研 Skill 不直接修改 vendor 目录。
