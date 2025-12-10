# Research: ROS 2 Basics Module

## Testing Framework for `rclpy` scripts

### Decision
`pytest` will be used as the unit testing framework for `rclpy` scripts.

### Rationale
`pytest` is a mature, feature-rich, and widely adopted testing framework in the Python ecosystem. It has good support for ROS 2 through community-developed plugins and is the standard choice for many ROS 2 projects. Its concise syntax and powerful features like fixtures make it well-suited for testing ROS 2 nodes and logic.

### Alternatives Considered
- **unittest**: Python's built-in testing framework. It is more verbose and less flexible than `pytest`, making it less ideal for the concise and clear code examples this module aims to provide.
