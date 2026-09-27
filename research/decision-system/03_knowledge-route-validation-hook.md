# Knowledge Route + Validation → Decision System Hook

## Purpose

把“知道该问什么”之后的下一步编译进 Decision System：
决定应从哪里获得候选知识，以及什么时候必须进入更强验证。

---

## Hook A — Knowledge Route（知识路径选择）

### Trigger
Question Framing 已达到 Minimum Sufficient Framing，且当前任务需要事实、解释、预测、机制或决策依据。

### Decision
当前问题应主要走：
- Parametric Knowledge（参数化知识）；
- External Knowledge（外部知识）；
- 或二者结合。

### Route Rule

优先 Parametric Knowledge 的典型条件：
- 概念成熟、稳定；
- 不依赖最新数据；
- 风险低；
- 主要用于快速建立初步模型、候选解释或搜索方向。

优先 External Knowledge 的典型条件：
- 当前 / 时效性事实；
- 精确数字；
- 法规、政策、价格、产品能力；
- 科学因果或机制主张；
- 存在争议；
- 高影响 / 高风险判断；
- 用户提供的文件、数据库、实验或一手材料是任务核心。

### Effect
选择知识源和研究成本，不把“模型能回答”误当成“答案已验证”。

---

## Hook B — Validation Depth（验证深度选择）

### Trigger
已经获得 Candidate Knowledge / Claims（候选知识 / 主张），但其可靠性会影响后续选择。

### Decision
需要哪一级验证，而不是默认每个问题都跑完整 Truth 流程。

### Levels

#### Level 0 — Direct Use（直接使用）
适用于稳定、低风险、边界清楚的成熟知识。

#### Level 1 — Source Check（来源核验）
检查关键来源、时效、定义和范围。

#### Level 2 — Challenge（反证压力测试）
当存在因果跳跃、替代解释、范围外推、来源依赖或高影响主张时：
→ 调用 `challenge`。

#### Level 3 — Multi-perspective + Adjudication（多视角 + 裁决）
当问题复杂、争议明显、多个 Frame 合理、证据冲突时：
→ `lenses` → independent evidence → `challenge` → `judge`。

### Effect
验证深度由风险、争议、可逆性和证据不确定性决定，而不是由“问题看起来复杂”决定。

---

## Hook C — Epistemic Closure（认知收束）

### Trigger
已经完成必要验证，需要形成可供后续决策调用的结论。

### Decision
当前知识应被标记为：
- High confidence（高可信）
- Moderate confidence（中等可信）
- Tentative（暂定）
- Working hypothesis（工作假设）
- Unknown（未知）

### Effect
把 Claim（主张）和 Epistemic Status（认知状态）一起交给下游决策节点。

未知和冲突不得为了推进流程被强行压平。

---

## Graph Integration

```text
Question Framing complete
        │
        ▼
[Decision Node: Which knowledge route?]
        │
        ├─ Parametric Knowledge
        ├─ External Knowledge
        └─ Hybrid
        │
        ▼
Candidate Claims
        │
        ▼
[Decision Node: How much validation is warranted?]
        │
        ├─ Direct Use
        ├─ Source Check
        ├─ Challenge
        └─ Lenses → Challenge → Judge
        │
        ▼
Claim + Epistemic Status
        │
        ▼
[Decision Node: What choice changes now?]
```

## Stop Rule

停止验证，当继续增加证据的预期价值已不足以改变：
- 当前 Epistemic Status；
- 下游 Decision（决策）；
- Claim Scope（主张边界）；
- 或值得付出的研究成本。
