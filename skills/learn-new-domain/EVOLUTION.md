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

Status: candidate only. Do not promote until the user approves the model and it proves useful across several lessons.

## Promotion rule

A candidate may be promoted into `SKILL.md` when it recurs across multiple lessons, has credible learning-science support, or fixes a stable failure mode.

Classify each candidate before promotion:

- **User preference** → topic workspace `NOTES.md`
- **General learning principle** → `learn-new-domain` or learning-science research
- **Domain-specific teaching rule** → domain workspace / domain Skill
