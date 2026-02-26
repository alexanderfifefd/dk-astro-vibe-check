# Init Command

You are tasked with quickly understanding a new codebase to prepare for development tasks. The goal is to build a high-level mental model of the project's purpose, architecture, and key components.

## Process

Follow these steps systematically to familiarize yourself with the project.

1.  **Read the Project Overview**
    -   Begin by reading the primary project documentation: `docs/overview.md`.
    -   This document is the source of truth for the project's goals, technology stack, and architectural decisions.
    -   Pay close attention to any mentioned key files, architectural patterns, or core concepts.

2.  **Explore Key Files and Directories**
    -   After reading the overview, read any files or directories it explicitly mentions. The overview may link to important files.
    -   Use `list_dir` on key source directories (like `src/`, `src/pages`, `src/components`) to understand the code organization.

3.  **Analyze Dependencies & Configuration**
    -   Read `package.json` to identify the project's main dependencies, frameworks, and scripts.
    -   Read framework and language configuration files, such as `astro.config.mjs` and `tsconfig.json`, to understand the project setup.

4.  **Perform Initial Code Exploration**
    -   Use a quick `Discover -> Analyze -> Trace -> Read` loop to explore a core feature mentioned in the overview.
    -   **Discover:** Use `codebase_search` to find where a core concept is implemented.
    -   **Analyze & Trace:** Use `grep` to trace how key components are used and connected.
    -   **Read:** Read one or two critical files identified to understand the implementation details.

5.  **Synthesize and Confirm Understanding**
    -   Based on your research, formulate a summary of the project.
    -   Present this summary to the user:
        ```
        Based on my review of `docs/overview.md` and the codebase, here is my understanding of the project:

        - **Purpose:** [Briefly describe the project's goal]
        - **Tech Stack:** [List the main technologies]
        - **Architecture:** [Describe the key architectural patterns]
        - **File Breakdown:**
            - `docs/overview.md`: [Purpose of this file]
            - `src/pages/index.astro`: [Purpose of this file]
            - `src/components/FrankVsDick/index.tsx`: [Purpose of this file]
            - `astro.config.mjs`: [Purpose of this file]
            - `sanity.config.ts`: [Purpose of this file]

        Is this understanding correct? Are there any specific areas you'd like me to focus on next?
        ```

## Guidelines
- **Be Systematic:** Follow the steps in order to build context methodically.
- **Prioritize the Overview:** The `docs/overview.md` is your starting point and guide.
- **Don't Make Assumptions:** If something is unclear, ask clarifying questions after presenting your initial summary.
- **Goal is High-Level Context:** The aim is to get a broad understanding, not to become an expert on every detail.
