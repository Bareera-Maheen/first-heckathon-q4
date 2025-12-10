# Quickstart: ROS 2 Basics Module

This guide provides instructions on how to set up your environment to run the code examples in the "Robotic Nervous System (ROS 2)" book module.

## Prerequisites

- **Ubuntu 22.04**: The recommended operating system for ROS 2 Humble and Iron.
- **ROS 2 Humble or Iron**: You must have ROS 2 Humble or Iron installed. You can find the installation instructions on the official ROS 2 documentation website.
- **Python 3.8+**: The Python version that comes with your ROS 2 distribution should be sufficient.
- **Docusaurus v3**: To build and view the book module locally.

## Environment Setup

1.  **Install ROS 2**: Follow the official ROS 2 installation guide for your operating system. Make sure to select either the Humble or Iron distribution.

2.  **Create a ROS 2 Workspace**:
    ```bash
    mkdir -p ~/ros2_ws/src
    cd ~/ros2_ws
    ```

3.  **Source ROS 2**:
    ```bash
    source /opt/ros/humble/setup.bash
    # Or for Iron:
    # source /opt/ros/iron/setup.bash
    ```

4.  **Clone the Repository**: Clone the repository containing the book module into the `src` directory of your workspace.
    ```bash
    cd ~/ros2_ws/src
    git clone <repository_url>
    ```

5.  **Build the Workspace**:
    ```bash
    cd ~/ros2_ws
    colcon build
    ```

6.  **Source the Workspace**:
    ```bash
    source ~/ros2_ws/install/setup.bash
    ```

## Running the Examples

Each chapter's `code` directory contains runnable examples. You can run them using the `ros2 run` command. For example, to run a Python script named `my_node.py` from a package named `my_package`:

```bash
ros2 run my_package my_node.py
```

## Building the Docusaurus Site

To build and view the book module locally, navigate to the `book` directory and run the following commands:

```bash
npm install
npm start
```
This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.
