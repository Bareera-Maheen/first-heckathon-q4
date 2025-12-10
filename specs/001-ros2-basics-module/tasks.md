# Tasks: Book Module: The Robotic Nervous System (ROS 2)

**Input**: Design documents from `/specs/001-ros2-basics-module/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Test tasks are included for `rclpy` code examples as per the research decision.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- The project structure is defined in `plan.md`. All paths will follow the `book/ros2-module/` structure.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic Docusaurus structure.

- [ ] T001 [P] Set up Docusaurus v3 project structure in `book/` directory.
- [X] T002 Configure Docusaurus for the "Robotic Nervous System (ROS 2)" module in `book/docusaurus.config.js`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core directory structure for the book module.

- [X] T003 Create the directory structure for the three chapters in `book/ros2-module/`.

---

## Phase 3: User Story 1 - Learning ROS 2 Fundamentals (Priority: P1) 🎯 MVP

**Goal**: Create the content and examples for Chapter 1, covering ROS 2 core concepts.

**Independent Test**: A student can read Chapter 1, run the code examples, and use the command line to inspect nodes, topics, and services.

### Implementation for User Story 1

- [X] T004 [US1] Write content for Chapter 1: "ROS 2 Core Concepts" in `book/ros2-module/chapter1/index.md`.
- [ ] T005 [P] [US1] Create diagrams for ROS 2 architecture (nodes, topics, services) and add to `book/ros2-module/chapter1/index.md`.
- [ ] T006 [P] [US1] Create a simple "hello world" publisher node example in `book/ros2-module/chapter1/code/hello_publisher.py`.
- [ ] T007 [P] [US1] Create a simple subscriber node example in `book/ros2-module/chapter1/code/hello_subscriber.py`.
- [ ] T008 [US1] Technical review of Chapter 1 content and code.
- [ ] T009 [US1] Proofread and format Chapter 1 content.

---

## Phase 4: User Story 2 - Controlling a Robot with Python (Priority: P2)

**Goal**: Create the content and examples for Chapter 2, focusing on `rclpy` programming.

**Independent Test**: A student can read Chapter 2 and write/run `rclpy` scripts for publishers, subscribers, services, and the AI-to-ROS example.

### Tests for User Story 2 ⚠️

- [ ] T017 [P] [US2] Write `pytest` unit tests for the `rclpy` examples in `book/ros2-module/chapter2/code/tests/`.

### Implementation for User Story 2

- [ ] T010 [US2] Write content for Chapter 2: "Robot Control with rclpy" in `book/ros2-module/chapter2/index.md`.
- [ ] T011 [P] [US2] Create diagrams for `rclpy` publisher/subscriber and service client/server patterns and add to `book/ros2-module/chapter2/index.md`.
- [ ] T012 [P] [US2] Create a `rclpy` publisher example in `book/ros2-module/chapter2/code/publisher_example.py`.
- [ ] T013 [P] [US2] Create a `rclpy` subscriber example in `book/ros2-module/chapter2/code/subscriber_example.py`.
- [ ] T014 [P] [US2] Create a `rclpy` service server example in `book/ros2-module/chapter2/code/service_server_example.py`.
- [ ] T015 [P] [US2] Create a `rclpy` service client example in `book/ros2-module/chapter2/code/service_client_example.py`.
- [ ] T016 [US2] Create the AI-to-ROS example in `book/ros2-module/chapter2/code/ai_to_ros_example.py`.
- [ ] T018 [US2] Technical review of Chapter 2 content and code.
- [ ] T019 [US2] Proofread and format Chapter 2 content.

---

## Phase 5: User Story 3 - Defining a Robot's Structure (Priority: P3)

**Goal**: Create the content and examples for Chapter 3, introducing URDF.

**Independent Test**: A student can read Chapter 3, create a simple URDF file, and visualize it in RViz2.

### Implementation for User Story 3

- [ ] T020 [US3] Write content for Chapter 3: "URDF for Humanoid Robots" in `book/ros2-module/chapter3/index.md`.
- [ ] T021 [P] [US3] Create diagrams for URDF link/joint hierarchy and add to `book/ros2-module/chapter3/index.md`.
- [ ] T022 [P] [US3] Create a simple humanoid URDF file in `book/ros2-module/chapter3/code/simple_humanoid.urdf`.
- [ ] T023 [P] [US3] Create a ROS 2 launch file to visualize the URDF in RViz2 in `book/ros2-module/chapter3/code/view_humanoid.launch.py`.
- [ ] T024 [US3] Technical review of Chapter 3 content and code.
- [ ] T025 [US3] Proofread and format Chapter 3 content.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final review and integration of the module.

- [ ] T026 Update sidebar and navigation for the new module in `book/sidebars.js` (or equivalent Docusaurus config).
- [ ] T027 Perform a full review of the entire module for consistency and clarity.
- [ ] T028 Validate all code examples and run all tests.
- [ ] T029 Final proofread and formatting pass.

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)** & **Foundational (Phase 2)** must be completed before any user story phases can begin.
- **User Stories (Phase 3-5)** can be implemented sequentially in priority order.
- **Polish (Phase 6)** depends on the completion of all user story phases.

### User Story Dependencies
- **User Story 1 (P1)**: Can start after Phase 2.
- **User Story 2 (P2)**: Depends on the concepts from User Story 1.
- **User Story 3 (P3)**: Depends on the concepts from User Story 1.

---

## Implementation Strategy

### Incremental Delivery
1.  Complete **Phase 1 & 2** to set up the structure.
2.  Complete **Phase 3 (User Story 1)** to deliver the first chapter as an MVP.
3.  Complete **Phase 4 (User Story 2)** to add the second chapter.
4.  Complete **Phase 5 (User Story 3)** to add the final chapter.
5.  Complete **Phase 6** for final polish and integration.
