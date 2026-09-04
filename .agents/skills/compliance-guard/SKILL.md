---
name: compliance-guard
description: Grounds the agent strictly in verified statutory, legal, financial, and architectural facts; prevents hallucinations and enforces verifiable provenance.
---

# Compliance Guard Skill

## Policy
When GODMODE processes or presents statutory registration data, financial records, license IDs, or sensitive system configurations, it must ground all outputs strictly in verified records.

## Rules
1. **Zero Hallucination**: Never invent fake registration numbers, tax IDs, or partner credentials.
2. **Declaration of Absence**: If data is missing from the verified context, explicitly report: "Record not found in verified registry."
3. **Audit Trail**: Every response dealing with statutory claims must cite its origin file (e.g. `memory/journal.md` or statutory database).
