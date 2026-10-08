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

◆ **Description defines applicability boundaries（Description 定义适用边界）**  
Skill 的 `description` 不只说明“什么时候应该调用”，还应在必要时写清**什么时候不应相信或继续套用该 Skill**。对于存在稳定失配信号的 Skill，description 应包含关键的 negative applicability / fallback 条件，例如：输入明显超出训练分布、关键前提不成立、出现异常证据、低置信度、高风险或需要更广泛推理时，应回退到更通用的 reasoning、验证流程或其他 Skill。description 只放稳定且影响路由的边界，不塞入动态细节与长例外列表。

## 项目运行约定

◆ **Skill Library Root（Skill 库根路径）**  
GitHub：`skills/`

◆ **Task-time Skill Discovery（任务时 Skill 发现）**  
进行非平凡的研究、结构梳理、诊断、学习编排等任务前，先浏览 `skills/` 目录或本 README，识别与当前任务匹配的 Skill；命中后先读取对应 `SKILL.md`，再按 Context Pointer 加载必要 Reference。

◆ **Use, don't merely remember（命中即使用）**  
相关 Skill 存在时，不只把它作为背景知识；应按 Skill 的 Process 与 Completion Criteria 执行。典型映射：
- 题材机制研究 → `genre-mechanism-research`
- 层级 / 节点 / 关系审查 → `knowledge-structure-mapping`
- 前提结构 → `premise-architecture`
- 优势结构 → `advantage-architecture`
- 长期框架迭代 / 防止认知闭合 → `anti-closure`

◆ **Progressive Disclosure（按需加载）**  
“浏览目录”用于发现 Skill，不等于每次加载全部 Skill 正文。只读取当前任务真正命中的 Skill 与必要 Reference，避免上下文污染。

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

◇ [structured-memory](./structured-memory/SKILL.md)  
把已经基本理解的小型知识集整理成可提取的记忆结构：语义组块、稳定视觉提示、答案版 / 提取版，以及必要时的 HTML + SVG 记忆资产；长期间隔复习交给 `evidence-based-review`。

◇ [decision-integration](./decision-integration/SKILL.md)  
把已经稳定的知识挂接到具体 Decision Node（决策节点），定义 Trigger / Decision / Relations / Effect，使知识真正进入可执行系统。

◇ [knowledge-canvas](./knowledge-canvas/SKILL.md)  
将稳定知识结构渲染为可拖动、缩放、搜索、查看详情的交互式 HTML 画布；默认复用 `components/knowledge-canvas/` 引擎，只生成节点 / 关系数据，并可打包成 standalone HTML。

◇ [knowledge-structure-mapping](./knowledge-structure-mapping/SKILL.md)  
构建或审查知识结构：先判 Node Type 与 Relation Type，再检查同级、分面、划分、偏序与多父节点，最后选择 Tree / DAG / Faceted Model / Labeled Graph；操作语义以 `research/structure-mapping/03_层级构建核心参考.md` 为唯一来源。

◇ [anti-closure](./anti-closure/SKILL.md)  
在长期研究、知识体系或框架迭代中主动引入非同构的外部成熟思想，先独立提取其问题结构，再做新颖性 / 冲突映射与证据验证，防止上下文锚定、路径依赖和内部一致性让体系逐渐闭合。

◇ [lenses](./lenses/SKILL.md)  
固定五视角 + 动态领域专家的独立多视角调查；负责扩大问题空间，不负责最终裁决。

◇ [challenge](./challenge/SKILL.md)  
对候选结论执行反证、替代解释、来源独立性和证据范围压力测试。

◇ [judge](./judge/SKILL.md)  
在证据冲突时进行裁决，按来源适配性、质量、独立性、直接性和边界给出 Epistemic Status。

### 高频入口（User-invoked）

◇ [tracks](./tracks/SKILL.md)  
研究路线总览的高频入口。短口令“看路线”，从现有研究记录恢复各线状态、停点与下一步；与 `map` 的知识结构梳理分工，不维护易过期的静态线路清单。

◇ [map](./map/SKILL.md)  
高频结构梳理入口。输出 Map View；实际结构判定复用 `knowledge-structure-mapping`，避免重复维护。

◇ [explain](./explain/SKILL.md)  
高频讲解入口。基于 Knowledge Structure 为当前受众设计 Explanation Path，用连贯表达把复杂内容讲清楚。

### User-invoked（用户调用）

◇ [truth](./truth/SKILL.md)  
启动完整求真工作流：定界 → 五视角 / 动态专家 → 独立取证 → 反证挑战 → 证据裁决。


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

framework / learning-system iteration
当前框架是否正在局部自洽但搜索空间收缩？
        │
        └─ Yes → anti-closure
                  │
                  ├─ 外部非同构视角 → 新问题 / 新变量 / 冲突
                  └─ 重要主张 → truth / challenge / judge

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
