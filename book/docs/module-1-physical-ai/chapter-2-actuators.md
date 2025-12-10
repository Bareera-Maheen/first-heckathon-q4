---
sidebar_position: 2
title: "Chapter 2: Actuators"
---

# Chapter 2: Actuators

## Learning Objectives
- Classify different types of actuators used in robotics based on their energy source and motion.
- Understand the working principles of common electric, hydraulic, and pneumatic actuators.
- Analyze the performance characteristics (e.g., speed, torque, precision) of various actuators relevant to physical AI and humanoid robotics.

<h2>Core Concepts</h2>
Actuators are the components that enable a robot to perform physical actions, converting energy into motion. They are essentially the "muscles" of a robot, working in conjunction with sensors (which provide feedback) and control systems (which provide commands) to achieve desired movements. The selection of an actuator depends on the required force, speed, precision, power density, and operational environment.

Key types of actuators include:
- **Electric Actuators**: The most common type in robotics, especially for precise movements.
    - **DC Motors**:
        - **Brushed DC Motors**: Simple, inexpensive, but wear out due to brushes.
        - **Brushless DC (BLDC) Motors**: More efficient, longer lifespan, higher power-to-weight ratio; commonly used in high-performance robotics.
    - **Stepper Motors**: Provide precise angular positioning without feedback, but can lose steps under load.
    - **Servo Motors**: A DC motor combined with a gearbox and a feedback control loop for precise position control.
- **Hydraulic Actuators**: Use incompressible fluid under pressure to generate large forces.
    - **Cylinders**: Linear motion.
    - **Motors**: Rotary motion.
    - **Advantages**: High power density, stiffness, large force output.
    - **Disadvantages**: Messy, requires pumps and reservoirs, less precise control than electric.
- **Pneumatic Actuators**: Use compressed gas (typically air) to generate motion.
    - **Cylinders**: Linear motion (e.g., grippers, presses).
    - **Muscles (e.g., McKibben Artificial Muscles)**: Can provide compliant, human-like motion.
    - **Advantages**: Clean, fast, compliant.
    - **Disadvantages**: Lower stiffness, difficult to achieve precise position control, requires air compressors.
- **Novel Actuators**:
    - **Shape Memory Alloys (SMAs)**: Change shape when heated.
    - **Electroactive Polymers (EAPs)**: "Artificial muscles" that deform when an electric field is applied.

## Key Equations (if applicable)
- **Motor Torque**: `τ = K_t * I` (where `τ` is torque, `K_t` is motor torque constant, `I` is current)
- **Motor Speed**: `ω = V / K_e` (where `ω` is angular velocity, `V` is voltage, `K_e` is back-EMF constant)
- **Force from Hydraulic Cylinder**: `F = P * A` (where `F` is force, `P` is pressure, `A` is piston area)

<h2>Summary</h2>
Actuators are essential for a robot's ability to interact physically with its environment. Understanding the various types—electric, hydraulic, and pneumatic—and their respective strengths and weaknesses is crucial for designing robots that can perform specific tasks effectively. The continuous innovation in actuation technologies drives advancements in humanoid and physical AI systems.

## Further Reading
- "Robot Dynamics and Control" (Spong, Vidyasagar)
- "Design of Fluid Power Systems" (various authors)
- Academic papers on novel actuation methods and soft robotics.