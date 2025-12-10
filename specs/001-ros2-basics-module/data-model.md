# Data Model: ROS 2 Basics Module

This document outlines the key data entities for the "Robotic Nervous System (ROS 2)" book module.

## Entities

### 1. ROS 2 Node
A fundamental process in the ROS 2 graph that performs computation.
- **Attributes**:
    - `name`: A unique name within the ROS 2 graph.
    - `namespace`: A namespace to group nodes.
- **Relationships**:
    - A Node can have multiple Publishers, Subscribers, Service Servers, and Service Clients.

### 2. ROS 2 Topic
A named bus for sending and receiving messages.
- **Attributes**:
    - `name`: A unique name for the topic.
    - `message_type`: The data type of the messages on the topic.
- **Relationships**:
    - A Topic can have multiple Publishers and Subscribers.

### 3. ROS 2 Service
A request/reply communication pattern.
- **Attributes**:
    - `name`: A unique name for the service.
    - `service_type`: The data type for the request and response.
- **Relationships**:
    - A Service has one Service Server and one or more Service Clients.

### 4. `rclpy` Script
A Python script that uses the `rclpy` client library to interact with ROS 2.
- **Attributes**:
    - `file_name`: The name of the Python script file.
- **Relationships**:
    - A `rclpy` script can define one or more Nodes, Publishers, Subscribers, Service Servers, or Service Clients.

### 5. URDF File
An XML file format for representing a robot model.
- **Attributes**:
    - `file_name`: The name of the URDF file.
- **Relationships**:
    - A URDF file contains a description of a robot in terms of its links, joints, and sensors.

### 6. Docusaurus Markdown Document
The format for the book module content.
- **Attributes**:
    - `file_name`: The name of the Markdown file.
- **Relationships**:
    - A Docusaurus Markdown Document contains the text, diagrams, and code examples for a chapter or section of the book module.
