# LLM-Assisted Software Development Workflow

Here's an optimized workflow for LLM-based software development that addresses your specific challenges:

## 1. Planning & Architecture Phase

**Prompt:**
```
Design a software architecture for [project description]. Include:
- Main components and their relationships (with unique module IDs)
- Data models and flows (with interface contracts)
- Technology stack recommendations with justification
- Implementation roadmap with clear milestones
- Potential technical challenges and mitigation strategies
- Maximum module size constraints (≤200 lines recommended)
- Module dependencies diagram (Mermaid format preferred)
- Security considerations and threat model
- Performance requirements and constraints
- Concurrency considerations and thread-safety requirements
- Data privacy and compliance requirements (GDPR, HIPAA, etc.)
- Versioning strategy and backward compatibility plan

Format using diagrams, bullet points, and concise explanations.
```

## 2. Knowledge Management & Context Strategy

**Prompt:**
```
Create a context management strategy for [project name]:
1. Define a project context document structure to maintain continuity between sessions
2. Create a module reference system with unique IDs and standardized summaries (≤100 words per module)
3. Establish interface contracts and schema definitions (using OpenAPI/Swagger, GraphQL, or similar IDL)
4. Design a knowledge graph showing key relationships between components
5. Create a design decisions log to track architectural choices and rationales
6. Define a mechanism to handle context handoff between development sessions
7. Establish a standardized logging and observability strategy
8. Create a project glossary for domain-specific terminology

Prioritize information density and retrievability.
```

## 3. Prompt Engineering & Optimization

**Prompt:**
```
Create a prompt engineering strategy for [project name]:
1. Design a prompt template structure with clear sections for:
   - Context and background information
   - Specific requirements and constraints
   - Expected output format
   - Examples (where helpful)
2. Establish a prompt versioning and tracking system
3. Define metrics to evaluate prompt effectiveness
4. Create a feedback loop for continuous prompt improvement
5. Develop a prompt library organized by development task types
6. Identify common failure modes and mitigation strategies
7. Design specialized prompts for complex logic and edge cases

Focus on creating prompts that produce consistent, high-quality outputs.
```

## 4. Modular Development

**Prompt:**
```
Develop the [specific module ID] with these constraints:
- Maximum 300 lines per file
- Fully functional in isolation with clear interfaces
- Include comprehensive error handling for all edge cases
- Document all public methods and interfaces
- Add unit tests for critical functionality
- Start with pseudocode outline before implementation
- Implement validation for all inputs
- Use consistent error handling patterns
- Address security concerns: input validation, authentication, data protection
- Avoid hard-coded secrets or sensitive information
- Follow established logging standards
- Include performance considerations and optimizations
- Manage external dependencies cautiously

Focus on quality over quantity. This module must work independently before integration.
```

## 5. External Dependency Management

**Prompt:**
```
Evaluate external dependencies for [module/feature]:
1. Assess each proposed dependency:
   - Community adoption and support level
   - Security vulnerability history
   - License compatibility with our project
   - Maintenance activity and release frequency
   - Performance characteristics
   - Size and impact on overall bundle
2. Consider alternatives for each dependency
3. Establish version pinning strategy
4. Create a dependency update policy
5. Document integration points and potential risks

Prioritize security, maintainability, and minimal dependency footprint.
```

## 6. Integration Strategy

**Prompt:**
```
Create an integration plan for connecting [module A] with [module B]:
- Define exact interface requirements and contracts
- List potential integration points and dependencies
- Specify required data transformations
- Outline testing strategy for the integration
- Identify potential failure points
- Provide rollback mechanisms
- Create integration verification checklist
- Define integration sequence for all system modules
- Address thread safety and concurrency concerns
- Plan for backward compatibility with existing interfaces

Prioritize resilience and error recovery.
```

## 7. Testing Framework

**Prompt:**
```
Design a testing strategy for [component]:
- Unit tests for core functions (covering all branches)
- Integration tests for component interactions
- User journey tests for critical flows
- Performance benchmarks (with metrics)
- Test data generation approach (including edge cases)
- UI/UX testing checkpoints for human verification
- Create visual test guides for UI components
- Define acceptance criteria for each test
- Include mutation testing for test quality validation
- Visual regression tests for UI components
- Concurrency and load testing for multi-threaded components
- Security and penetration testing approach

Include specific test cases with expected inputs/outputs and validation methods.
```

## 8. Human Verification Checkpoints

**Prompt:**
```
Create a human verification checklist for [module/feature]:
1. Core functionality verification steps
   - List specific actions to verify the feature works as intended
   - Include expected outcomes for each action
2. UI/UX validation points
   - Visual consistency checks
   - Interaction flow verification
   - Responsiveness and performance observations
   - Cross-device and cross-browser compatibility
3. Edge case scenarios to manually test
4. Potential error conditions to validate
5. Usability assessment criteria
6. Accessibility verification points
7. User feedback collection guidance

Design this checklist to be completed in 10-15 minutes by a human tester.
```

## 9. Bug Fixing Protocol

**Prompt:**
```
Fix the bug where [description] following this protocol:
1. Identify the root cause through analysis, not symptoms
2. Explain your diagnosis with evidence
3. Propose targeted fix with minimal code changes
4. Explain potential side effects of the fix
5. Add tests to prevent regression
6. List all potentially affected modules
7. Provide verification steps to confirm fix effectiveness
8. Submit changes as isolated patches
9. Update documentation to reflect the fix

DO NOT modify unrelated functionality.
```

## 10. Root Cause Analysis Framework

**Prompt:**
```
Perform a comprehensive root cause analysis for [problem description]:
1. Gather all observable symptoms and error messages
2. Identify at least 3 possible underlying causes
3. Design targeted diagnostic tests for each hypothesis
4. Evaluate the evidence for each potential cause
5. Determine the most likely root cause with supporting evidence
6. Explain the causal chain from root cause to observed symptoms
7. Recommend system-level fixes, not just symptom mitigation
8. Suggest preventative measures for similar issues
9. Share findings that might affect other system components

Focus on finding the true origin of the problem, not just addressing visible symptoms.
```

## 11. Code Review Checklist

**Prompt:**
```
Review this code implementation against these criteria:
- Functional completeness
- Security vulnerabilities
- Performance bottlenecks
- Error handling coverage
- Maintainability issues
- Alignment with requirements
- Interface contract compliance
- Test coverage adequacy
- Consistent naming conventions
- Documentation quality
- Code complexity and readability
- Proper use of comments
- Adherence to coding standards
- Resource management (memory, connections, etc.)

Provide specific improvement recommendations with code examples.
```

## 12. UI/UX Validation Protocol

**Prompt:**
```
Create a validation protocol for the [UI component/page]:
1. Key user scenarios (list 3-5 specific workflows)
2. Visual checkpoints (what elements should appear in each state)
3. Interaction validation points (user actions and expected responses)
4. Edge case user behaviors to test
5. Accessibility requirements
6. Visual test guide with annotated screenshots
7. Performance expectations (load times, responsiveness)
8. Cross-device/browser compatibility checks
9. User testing plan with feedback collection method
10. Iterative improvement process based on user feedback

Provide human-verifiable test steps for each scenario.
```

## 13. Project Review & Improvement

**Prompt:**
```
Conduct a comprehensive review of the [project/codebase]:
1. Naming convention consistency across modules
2. File structure and organization assessment
3. Identification of duplicated logic or patterns
4. Opportunities for abstraction and reusability
5. Documentation completeness and quality
6. API consistency and usability
7. Error handling consistency
8. Performance optimization opportunities
9. Security practice assessment
10. Technical debt identification and prioritization
11. Logging and observability implementation

Focus on maintainability and consistency without changing core functionality.
```

## 14. Deployment & Operations Strategy

**Prompt:**
```
Design a deployment and operations strategy for [project]:
1. Containerization approach (Docker, etc.)
2. Environment configuration management
3. Deployment pipeline stages and gates
4. Monitoring and alerting setup
5. Performance tracking metrics
6. Logging and observability implementation
7. Rollback procedures
8. Disaster recovery planning
9. Scaling strategy (horizontal/vertical)
10. Security scanning and compliance verification

Include configuration examples and operational runbooks.
```

## 15. Continuous Integration & Deployment

**Prompt:**
```
Design a CI/CD pipeline for this project:
1. Automated build process steps
2. Test automation strategy (unit, integration, UI)
3. Deployment procedures with verification
4. Rollback mechanisms
5. Version management approach
6. Monitoring and alerting recommendations
7. Performance testing integration
8. Security scanning integration
9. Environment parity maintenance
10. Post-deployment verification steps

Include example configuration for popular CI tools.
```

## Implementation Recommendations

1. **Context Management**
   - Split development into self-contained modules (≤200 lines)
   - Create a "project context document" for continuity between sessions
   - Use consistent naming conventions across prompts
   - Assign unique IDs to each module for reference
   - Maintain a code map or index for quick reference
   - Record design decisions and their rationales
   - Use interface definition languages for contract specification
   - Establish standardized logging formats across the system

2. **Testing Discipline**
   - Implement automated testing early
   - Create user story validation criteria before development
   - Maintain a test-first mentality
   - Combine automated tests with human validation checkpoints
   - Generate test data covering edge cases
   - Create visual validation guides for UI components
   - Use mutation testing to verify test effectiveness
   - Implement visual regression testing for UI components
   - Perform load and stress testing for production readiness

3. **Bug Management**
   - Isolate and document bugs before fixing
   - Create regression tests for each identified bug
   - Limit code changes to the minimum required for fixes
   - Submit changes as isolated patches
   - Document impact analysis for each fix
   - Implement verification plans for each fix
   - Perform root cause analysis before attempting fixes
   - Track related issues to identify patterns
   - Update documentation to reflect bug fixes

4. **Progress Tracking**
   - Maintain a project board with component status
   - Document all LLM limitations encountered
   - Create pre/post conditions for each development task
   - Use structured commit messages (Conventional Commits)
   - Track version changes and API compatibility
   - Record effectiveness of prompts for continuous improvement
   - Measure development velocity and quality metrics
   - Conduct regular retrospectives to improve the process

5. **Development Cycle**
   - Implement a "Generate-Validate-Solidify" pattern for each module
   - Keep development cycles under 30 minutes
   - Regularly sync code with version control
   - Set clear completion criteria for each module
   - Add human verification checkpoints at key stages
   - Conduct retrospectives to improve process
   - Maintain prompt versioning alongside code versioning
   - Iterate prompts based on effectiveness metrics

6. **Security & Performance**
   - Include security considerations in early design phases
   - Perform regular security reviews with dedicated prompts
   - Establish performance metrics and benchmarks early
   - Test performance under varying load conditions
   - Document security and performance decisions
   - Implement secure coding practices from the start
   - Conduct regular vulnerability assessments
   - Establish performance budgets for critical paths

7. **Knowledge Transfer**
   - Create design decision documents explaining architectural choices
   - Maintain a glossary of domain-specific terms
   - Document LLM limitations and workarounds
   - Create onboarding guides for new team members
   - Record successful prompt patterns for reuse
   - Schedule regular knowledge sharing sessions
   - Build a team knowledge base of best practices
   - Document external dependencies and their usage

8. **Dependency Management**
   - Evaluate each external dependency for security and maintenance
   - Pin dependency versions for reproducible builds
   - Regularly audit dependencies for vulnerabilities
   - Consider vendoring critical dependencies
   - Document dependency update procedures
   - Test compatibility when updating dependencies
   - Minimize dependency footprint when possible
   - Create backup plans for critical dependencies

9. **Prompt Engineering**
   - Design prompts with clear structure and expectations
   - Maintain a library of effective prompts
   - Version and track prompt effectiveness
   - Create specialized prompts for complex logic
   - Establish prompt testing criteria
   - Document prompt patterns and anti-patterns
   - Continuously improve prompts based on outcomes
   - Share successful prompts across the team

10. **Deployment & Operations**
    - Containerize applications for environment consistency
    - Implement comprehensive monitoring and alerting
    - Create runbooks for common operational tasks
    - Design with observability in mind
    - Establish clear rollback procedures
    - Plan for scaling from the beginning
    - Implement automated health checks
    - Set up performance monitoring dashboards

This approach emphasizes modular development, clear boundaries, and systematic testing to overcome the limitations you've encountered with LLM-based development. By incorporating structured validation, thorough testing, human verification checkpoints, and robust knowledge management, you can significantly reduce the issues related to context limitations and quality control in LLM-assisted development. 