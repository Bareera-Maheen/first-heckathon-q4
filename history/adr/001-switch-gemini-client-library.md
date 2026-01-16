# ADR-001: Switch Gemini Client Library

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Proposed
- **Date:** 2025-12-23
- **Feature:** 001-gemini-client-switch
- **Context:** The existing chat backend uses the `google.generativeai` Python client library, which is now deprecated according to `FutureWarning` messages. This decision documents the switch to the recommended `google.genai` client library and the necessary code and dependency updates.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Migrate from `google.generativeai` to `google.genai` for Gemini API interactions.
- Update `requirements.txt` to replace `google-generativeai` with `google-genai`.
- Modify imports in `main.py` and `ingestion.py` from `import google.generativeai as genai` to `from google import genai`.
- Update API key configuration from `genai.configure(api_key=...)` to `genai.Client(api_key=...)`.
- Adjust model instantiation and method calls (e.g., `genai.GenerativeModel('model')` to `client.models.generate_content(model='model', contents=...)` and `genai.embed_content` to `client.embed_content`).

## Consequences

### Positive

- Utilize the actively supported and recommended Google Gemini Python client library (`google.genai`).
- Ensure future compatibility and access to the latest features and bug fixes.
- Improve code maintainability by aligning with current best practices from Google.

### Negative

- Requires code changes in `main.py` and `ingestion.py` to adapt to the new library's API.
- Potential for minor breaking changes if `google.genai` API differs significantly, requiring testing.

## Alternatives Considered

- **Stay with `google.generativeai`**: Risk using a deprecated library that will no longer receive updates or bug fixes. Potential for future compatibility issues or security vulnerabilities.
- **Manual API calls**: Implement direct HTTP requests to the Gemini API. This offers maximum control but significantly increases code complexity and maintenance overhead.

## References

- Feature Spec: `specs/001-gemini-client-switch/spec.md`
- Implementation Plan: `specs/001-gemini-client-switch/plan.md`
- Related ADRs: N/A
- Evaluator Evidence: N/A <!-- link to eval notes/PHR showing graders and outcomes -->
