# Learn New Domain｜Evolution Log

> Purpose: record candidate improvements discovered while using `learn-new-domain`.
> Rule: do not promote a one-off preference directly into the Skill.

## Current baseline

Initial design is adapted from Matt Pocock's `teach` Skill and combined with this repository's evidence-based review workflow.

## Candidate improvements

### Candidate: Audience-aware teaching delivery layer

Observed repeatedly in long-form conceptual teaching: semantic accuracy alone is insufficient. The learner also needs an explanation that manages attention, actively handles objections, and maintains a live model of the learner's state.

Proposed teaching-delivery capabilities:
- **Attention / Hosting:** use concrete tension, pacing, transitions, examples, and selective reveal to keep the explanation cognitively alive without sacrificing accuracy.
- **Argument / Debate:** surface the strongest competing interpretation, objection, or failure case; show why the current claim survives or needs qualification instead of merely asserting it.
- **Audience Model / Teaching:** continuously infer what the learner currently knows, what they are likely to misunderstand, and what the next smallest useful cognitive move is; use attempts and feedback to update that model.
- **Epistemic Guardrail:** entertainment and persuasion must remain subordinate to evidence, definitions, boundaries, and uncertainty.

Candidate integration:
- Extend `explain` with a delivery pass after the explanation path is secured.
- Extend `learn-new-domain` so each tight teaching unit has a live audience-state check and, when useful, one genuine objection/contrast rather than only exposition.

Status: **approved for trial by the user**. The next step is not to imitate a presenter/teacher persona, but to identify the underlying cognitive mechanisms and test a mechanism-based teaching loop across several lessons before promotion.

## Promotion rule

A candidate may be promoted into `SKILL.md` when it recurs across multiple lessons, has credible learning-science support, or fixes a stable failure mode.

Classify each candidate before promotion:

- **User preference** → topic workspace `NOTES.md`
- **General learning principle** → `learn-new-domain` or learning-science research
- **Domain-specific teaching rule** → domain workspace / domain Skill


### Research direction: mechanism-based teaching loop

Working hypothesis for trial:

```text
Elicit current model
→ Create a meaningful knowledge gap / conflict
→ Require prediction or generation
→ Supply the minimum resolving model
→ Stress-test with counterexample / competing explanation
→ Learner explains or transfers
→ Update the audience model
→ Choose the next cognitive move
```

Guardrails:
- curiosity/attention is an entry mechanism, not evidence of learning;
- cognitive conflict should be meaningful and resolvable, not merely confusing;
- argumentation is used as an epistemic stress test, not as persuasion;
- instructional support should adapt to prior knowledge rather than remain fixed;
- active generation and self-explanation are tools with boundary conditions, not universal requirements.

Research basis to verify before promotion: curiosity/information-gap theory, generation effect, self-explanation, conceptual change/cognitive conflict, adaptive instruction/expertise reversal, and argumentation evidence.


### Candidate: Scaling / recursive organization for complex teaching

User observation: complex subjects should not be reduced to a small set of flat modules. For some domains, the more faithful organization is recursive and scale-sensitive: the same generative relation can reappear across levels, while its effects change with scale.

Working distinction:
- **Flat modular decomposition** asks: what parts does the topic contain?
- **Scaling view** asks: what relation changes systematically as scale changes, what remains invariant, and where does the regime change?
- **Recursive / self-iterative view** asks: what transformation, feedback, or self-model update is repeatedly applied to generate the next state or level?

Important guardrail:
- A literal power law (Y = aX^b) is a mathematical claim requiring evidence.
- “Scaling thinking” may be used more broadly as a structural lens, but must not falsely imply that every complex system follows a power law.

Teaching implication:
For complex material, prefer identifying generative relations, feedback loops, invariants, scale changes, and recursive transformations before forcing the content into a fixed list of modules.
