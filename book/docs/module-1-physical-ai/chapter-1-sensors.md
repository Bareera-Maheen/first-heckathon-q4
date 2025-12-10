---
sidebar_position: 1
title: "Chapter 1: Sensors"
---

# Chapter 1: Sensors

## Learning Objectives
- Identify the fundamental types of sensors used in physical AI and robotics.
- Understand the operating principles of common sensor modalities (e.g., vision, proprioception, haptic).
- Evaluate the strengths and limitations of various sensors for different robotic applications.

<h2>Core Concepts</h2>
Sensors are the primary means by which a robot perceives its environment and its own internal state. They convert physical phenomena into measurable electrical signals that can be processed by a robot's control system. The choice of sensors significantly impacts a robot's capabilities, autonomy, and cost.

Key types of sensors include:
- **Proprioceptive Sensors**: Measure the internal state of the robot.
    - **Encoders**: Measure joint angles and motor rotation.
    - **IMUs (Inertial Measurement Units)**: Provide orientation, angular velocity, and linear acceleration (accelerometers, gyroscopes).
    - **Force/Torque Sensors**: Measure forces and torques applied at specific points (e.g., end-effectors, joints).
- **Exteroceptive Sensors**: Measure the external environment of the robot.
    - **Vision Sensors**:
        - **Cameras (2D)**: Capture visual information (color, intensity).
        - **Depth Cameras (RGB-D)**: Provide color image and per-pixel depth information (e.g., LiDAR, structured light, stereo vision).
    - **Range Sensors**: Measure distance to objects.
        - **LiDAR (Light Detection and Ranging)**: Uses pulsed lasers to measure distances, creating 2D or 3D point clouds.
        - **Ultrasonic Sensors**: Emit sound waves and measure the time for the echo to return.
        - **Infrared (IR) Sensors**: Measure distance or detect obstacles based on emitted and reflected IR light.
    - **Haptic/Tactile Sensors**: Provide information about contact, pressure, and texture.

The integration of these sensors allows robots to build a rich understanding of their surroundings and interact intelligently with the physical world.

## Key Equations (if applicable)
- **Time of Flight (TOF) for Range Sensors**: `distance = (speed of light * time_delay) / 2`
- **Encoder Resolution**: `angular_resolution = 360 degrees / (encoder_counts_per_revolution * gear_ratio)`

<h2>Summary</h2>
Sensors are crucial for enabling robots to perceive and interact with the physical world. By understanding the different types (proprioceptive and exteroceptive) and their operating principles, we can design robots capable of performing complex tasks. The selection of appropriate sensors is paramount for achieving desired robotic capabilities.

## Further Reading
- "Robotics, Vision and Control" (Corke)
- "Sensor Fusion and Perception for Autonomous Systems" (various authors)
- Datasheets for various commercial robotic sensors (e.g., Intel RealSense, Hokuyo LiDAR).