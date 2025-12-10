<!--
---
Sync Impact Report
---
Version change: 0.0.0 → 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] → I. High Technical Accuracy
- [PRINCIPLE_2_NAME] → II. Clarity and Reproducibility
- [PRINCIPLE_3_NAME] → III. Strict Content and Code Alignment
- [PRINCIPLE_4_NAME] → IV. Standardized RAG Architecture
- [PRINCIPLE_5_NAME] → V. Validated, Error-Free Code
- [PRINCIPLE_6_NAME] → VI. Docusaurus v3 Formatting
Added sections:
- Book Requirements
- RAG Chatbot Requirements
- Constraints & Success Criteria
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->
# Physical AI & Humanoid Robotics — Unified Book + Embedded RAG Chatbot Constitution

## Core Principles

### I. High Technical Accuracy
All technical content related to ROS 2, Gazebo, Unity, NVIDIA Isaac, and Vision-Language-Action (VLA) models must be rigorously verified for accuracy. Explanations should be clear, concise, and suitable for university-level AI and Robotics students.

### II. Clarity and Reproducibility
The project prioritizes clarity and reproducibility. All code, labs, and RAG (Retrieval-Augmented Generation) pipelines must be fully reproducible by students. Writing, diagrams, and code must be consistent across the entire book.

### III. Strict Content and Code Alignment
All content must align with the official documentation for ROS 2, Gazebo, Unity, Isaac, and OpenAI. This ensures that students are learning current and industry-standard practices.

### IV. Standardized RAG Architecture
All RAG development must adhere to a specific technology stack: FastAPI for the backend, Neon Postgres for the database, Qdrant Cloud for vector storage, and OpenAI's Agent/ChatKit for the language model interface.

### V. Validated, Error-Free Code
All code examples must be validated and confirmed to run without errors. The chatbot must provide answers derived strictly from the book's content or user-selected text to avoid hallucinations.

### VI. Docusaurus v3 Formatting
The final book output must be a Docusaurus v3 site, deployed to GitHub Pages, ensuring a modern and accessible reading experience.

## Book Requirements

The book will be structured into four distinct modules, each including diagrams, detailed walkthroughs, and practical labs:
- **Module 1: ROS 2:** Covers nodes, topics, services, `rclpy`, and URDF.
- **Module 2: Simulation:** Focuses on Gazebo for physics and Unity for interaction.
- **Module 3: NVIDIA Isaac:** Details VSLAM, navigation, and synthetic data generation.
- **Module 4: Vision-Language-Action (VLA):** Explores Whisper, LLM-based planning, and action pipelines.

## RAG Chatbot Requirements

The embedded RAG chatbot must meet the following criteria:
- **Ingestion:** Capable of full document ingestion and embedding creation.
- **Accuracy:** Provide answers with accurate citations from the source material.
- **Interactivity:** Support user-selected-text Q&A functionality.
- **Backend Stack:** Implemented with FastAPI, Neon Postgres, Qdrant, and OpenAI Agents/ChatKit.

## Constraints & Success Criteria

### Constraints
- **Tooling:** The project must be developed using Spec-Kit Plus and Claude Code.
- **Environment:** A fully reproducible student environment is required.
- **Readability:** The text must target a Flesch-Kincaid grade level of 10–14.
- **Output:** Deliverables are a Docusaurus site and an embedded chatbot.

### Success Criteria
- **Deployment:** The book is successfully deployed and accessible on GitHub Pages.
- **Chatbot Performance:** The RAG chatbot answers correctly and without hallucination.
- **Code Execution:** All robotics, AI, and VLA code examples run as described.
- **Capstone Project:** Students can successfully build the final capstone project, which integrates voice commands, planning, navigation, identification, and manipulation.

## Governance

This constitution is the authoritative guide for the project. All development, contributions, and reviews must comply with its principles. Amendments require documented approval and a clear migration plan.

**Version**: 1.0.0 | **Ratified**: 2025-12-09 | **Last Amended**: 2025-12-09