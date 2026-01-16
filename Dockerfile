# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file first to leverage Docker cache
COPY chat-backend/requirements.txt chat-backend/requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r chat-backend/requirements.txt

# Copy the rest of the backend code
COPY chat-backend/ chat-backend/

# Set PYTHONPATH so that 'chat-backend' module can be imported correctly
ENV PYTHONPATH=/app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the application using the module syntax to support relative imports
CMD ["uvicorn", "chat-backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
