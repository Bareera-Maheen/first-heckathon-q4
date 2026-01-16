$env:PYTHONPATH = "$PWD"
.\chat-backend\venv\Scripts\uvicorn chat-backend.main:app --reload --port 8000