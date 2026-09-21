---
name: short-drama-diagnostic
description: Run a full short-drama diagnostic.
disable-model-invocation: true
argument-hint: "作品、剧本、剧情摘要或你希望诊断的片段"
---

# Short Drama Diagnostic（短剧综合诊断）

Run a structured diagnosis of the supplied work. This is an orchestration skill: diagnose the work, then use narrower model-invoked skills only when their scope is actually relevant.

## Process（执行流程）

### ◆ Establish the diagnostic target（确定诊断对象）

Identify the exact material and the user's current question. If the user has not named a narrower goal, diagnose why the work does or does not sustain attention as a short drama.

**Completion criterion:** the analysis target and material boundary are explicit.

### ◆ Reconstruct observable story state（重建可观察故事状态）

Extract only what the material supports: protagonist, current state, immediate goal, obstacles, information distribution, relationship changes, and major state changes.

**Completion criterion:** later diagnosis is grounded in observable story evidence rather than assumed author intent.

### ◆ Locate the viewing engine（定位观看驱动力）

Identify the concrete mechanisms currently creating forward pull, such as unresolved information, risk, status change, relationship change, expectation, or impending consequence.

**Completion criterion:** every claimed attraction mechanism points to a specific moment or structure in the material.

### ◆ Diagnose failure points（诊断失效点）

Identify where the work loses force and state the mechanism-level reason. Separate symptoms from causes.

Examples of symptoms include slow feeling, weak conflict, repetitive reversals, or low information density; the diagnosis must explain what structural condition produces the symptom.

### ◆ Delegate narrower analysis（分派窄能力）

If the diagnosis turns on a high-concept premise, call the Skill tool with `premise-architecture`. If that analysis identifies an advantage premise, that skill may continue into `advantage-architecture`.

Use future narrower skills in the same way when they become stable enough to exist independently.

### ◆ Propose minimum repair direction（提出最小修复方向）

Preserve the intended dramatic effect while changing the mechanism that causes the problem. Prefer the smallest structural intervention that addresses the diagnosed cause.

**Completion criterion:** each proposed repair maps back to a diagnosed failure point.

## Output（输出）

Return:

- diagnostic target;
- observable story state;
- current viewing engine;
- primary failure points and causes;
- narrower Skill findings when invoked;
- minimum repair directions;
- unresolved questions.
