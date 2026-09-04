---
name: redesign-existing-projects
description: Upgrading existing interfaces without breaking business logic, contracts, or route schemas.
---

# Redesign Existing Projects Skill

## Non-Destructive Refactoring Protocol
1. **Preserve API Contracts**: Never alter endpoint parameters, response types, or query strings during a visual refactor.
2. **Component Wrapping**: Wrap existing legacy inputs and forms in new styled container primitives rather than rewiring data bindings.
3. **Progressive Token Migration**: Extract hardcoded colors into semantic tokens without disrupting existing CSS class names.
4. **Zero Regression Test**: Validate that all existing user flows (forms, submit actions, validation errors) function identically post-redesign.
