---
sidebar_position: 1
---

# Chapter 1: ROS 2 Core Concepts

Welcome to the first chapter of our journey into the Robotic Nervous System! In this chapter, we will explore the fundamental concepts of ROS 2 that form the backbone of any robotics application.

## What is ROS 2?

ROS 2 (Robot Operating System 2) is a set of software libraries and tools that help you build robot applications. It is a flexible framework for writing robot software, from low-level device drivers to high-level algorithms.

## Core Concepts

### Nodes
In ROS 2, a **node** is an executable that uses ROS 2 to communicate with other nodes. You can think of a node as a small, single-purpose program. For example, you might have a node that controls a motor, a node that reads from a sensor, and another that plans a path for the robot.

### Topics
**Topics** are named buses over which nodes exchange messages. Topics have anonymous publish/subscribe semantics, which means that a node that publishes a message doesn't know which nodes will receive it, and a node that subscribes to a topic doesn't know which nodes are publishing on it.

### Services
**Services** are another way for nodes to communicate with each other. While topics are for continuous data streams, services are for request/reply interactions. A node offers a service, and another node can call that service with a request and wait for a response.

## Workspace Setup

Before we can start writing our own ROS 2 nodes, we need to set up a workspace. A workspace is a directory where you can create and manage your ROS 2 packages.

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
```

## Running Basic Commands

Once you have a workspace, you can use the `ros2` command-line tool to interact with ROS 2. Here are a few basic commands:

- `ros2 node list`: Lists all the running nodes.
- `ros2 topic list`: Lists all the active topics.
- `ros2 service list`: Lists all the available services.

In the next sections, we will dive deeper into each of these concepts and write our own ROS 2 nodes.
