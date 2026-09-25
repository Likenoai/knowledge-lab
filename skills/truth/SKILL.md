---
name: truth
description: 用固定五视角、动态专家、反证挑战和证据裁决，对一个问题进行系统求真。
disable-model-invocation: true
argument-hint: "要调查、验证或求真的问题"
---

# Truth

Use a multi-perspective truth-seeking workflow for questions where a plausible answer is not enough.

## Context pointer

Read:

- `../../concepts/five-lens-truth-seeking.md`

Use the project skills:
- `lenses` for divergence and independent perspective briefs;
- `challenge` for adversarial stress-testing;
- `judge` for evidence adjudication.

## Process

### 1. Frame

Turn the user's question into the smallest set of load-bearing claims that can actually be investigated. Define ambiguous terms and the relevant scope.

**Completion criterion:** the investigation target is specific enough that evidence can support or weaken it.

### 2. Diverge

Run `lenses`: practitioner, scholar, skeptic, economist, historian, plus any required domain specialist.

**Completion criterion:** major blind spots have been surfaced before synthesis.

### 3. Investigate

Gather the evidence needed by each perspective. Prefer source types that fit the claim and preserve independence between evidence chains.

**Completion criterion:** each load-bearing claim has an evidence trail or is explicitly unsupported.

### 4. Challenge

Run `challenge` on the emerging claims and synthesis.

**Completion criterion:** counterevidence, alternative explanations, source dependence, and scope errors have been actively tested.

### 5. Adjudicate

Run `judge`.

**Completion criterion:** every material conclusion has an evidence basis, scope, and epistemic status; unresolved conflicts remain explicit.

## Default output

Lead with the strongest justified answer, then show:
- what supports it;
- where the five lenses disagree;
- strongest counterevidence;
- uncertainty / boundary;
- what evidence would change the conclusion.

## Boundary

Truth seeks the most justified current conclusion. It does not manufacture consensus, equate perspective diversity with evidence quality, or force UNKNOWN into a confident answer.
