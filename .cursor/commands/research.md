# Codebase Research Command

You are tasked with conducting comprehensive research across the codebase to answer user questions. The primary goal is to systematically build context by exploring the codebase and then synthesizing your findings into a structured document.

## CRITICAL: YOUR ONLY JOB IS TO DOCUMENT AND EXPLAIN THE CODEBASE AS IT EXISTS TODAY
- DO NOT suggest improvements or changes unless the user explicitly asks for them.
- DO NOT perform root cause analysis unless the user explicitly asks for them.
- DO NOT propose future enhancements unless the user explicitly asks for them.
- DO NOT critique the implementation or identify problems.
- DO NOT recommend refactoring, optimization, or architectural changes.
- ALWAYS READ ALL RELEVANT FILES. NEVER READ JUST PARTS OF THE FILES AND GUESS THE REST. 
- ONLY describe what exists, where it exists, how it works, and how components interact.
- You are creating a technical map and documentation of the existing system.


## The Research Process

The agent will follow a systematic and reproducible process to answer the research question. The goal is to build a comprehensive understanding of the relevant components by layering different forms of analysis.

1.  **Analyze and Deconstruct the Research Question:**
    - Break down the user's query into specific, investigable sub-questions.
    - Create a research plan using `TodoWrite` to track all sub-tasks.

2.  **Execute the Exploration Loop:**
    - For each sub-question, perform the following steps iteratively to build a complete picture.
    - **a. Discover with Semantic Search:** Use `codebase_search` with broad queries to find the primary areas, files, and modules related to the topic. This provides the initial map.
    - **b. Analyze Structure:** Use `list_dir` on key directories found in the previous step to understand the project structure and find related files.
    - **c. Trace Connections:** Use `grep` to trace specific function calls, class names, or configurations across the codebase to understand connections between components.
    - **d. Read for Deep Context:** Use `read_file` to fully understand the implementation logic within the most critical files.

3.  **Synthesize Findings:**
    - After the exploration is complete, consolidate all findings.
    - Connect findings across different components and highlight key interactions.
    - Answer the user's specific questions with concrete evidence from the codebase.
    - Include specific file paths and line numbers for reference.

4.  **Generate Research Document:**
    - Create a new markdown file in a `docs/ai/research/` directory. If this directory does not exist, ask the user to create it.
    - The filename should be in the format: `YYYY-MM-DD-description.md` (e.g., `2025-09-25-authentication-flow.md`).
    - Use the metadata and template provided below.

5.  **Present Findings:**
    - Present a concise summary of the findings to the user.
    - Include key file references for easy navigation.
    - Ask if they have follow-up questions or need clarification.

## Research Document Template

```markdown
---
date: [Current date and time with timezone in ISO format]
git_commit: [Current commit hash from 'git rev-parse HEAD']
branch: [Current branch name from 'git rev-parse --abbrev-ref HEAD']
repository: [Repository name from 'basename -s .git $(git config --get remote.origin.url)']
topic: "[User's Question/Topic]"
tags: [research, codebase, relevant-component-names]
status: complete
---

# Research: [User's Question/Topic]

**Date**: [Current date]
**Git Commit**: [Current commit hash]
**Branch**: [Current branch name]

## Research Question
[Original user query]

## Summary
[High-level documentation of what was found, answering the user's question by describing what exists.]

## Detailed Findings

### [Component/Area 1]
- Description of what exists and its purpose.
- How it connects to other components.
- Current implementation details, with references to specific files and line numbers.

### [Component/Area 2]
...

## Code References
- `path/to/file.py:123` - Description of what's there.
- `another/file.ts:45-67` - Description of the code block.

## Open Questions
[Any areas that need further investigation.]
```

## Important Notes:
- **Systematic Approach**: Always follow the `Discover -> Analyze -> Trace -> Read` loop to ensure thorough research.
- **Evidence-Based**: All conclusions must be backed by evidence from the codebase (file paths, line numbers).
- **Focus on Facts**: Document what IS, not what SHOULD BE. No recommendations.
- **Self-Contained Documents**: Research documents should be self-contained with all necessary context.