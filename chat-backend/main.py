from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database, vector_store
from .models import ChatRequest
import google.generativeai as genai
import os

app = FastAPI()

# --- CORS Middleware ---
origins = [
    "http://localhost:3000", # Docusaurus dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/chat")
def chat(request: ChatRequest, db: Session = Depends(get_db)):
    # Generate embedding for the query
    query_embedding = genai.embed_content(model="gemini-embedding-001", content=request.query, output_dimensionality=768)["embedding"]

    # Search for similar vectors
    search_results = vector_store.search_vectors(vector_store.qdrant_client, "docusaurus_docs", query_embedding)

    # Get the text from the search results
    context = " ".join([result.payload["text"] for result in search_results])

    # Construct the prompt
    prompt = f"Question: {request.query}\nContext: {context}\nAnswer:"

    # Generate the response
    generative_model = genai.GenerativeModel('gemini-pro')
    response = generative_model.generate_content(prompt)
    bot_response = response.text

    # Store the chat history
    chat_history = models.ChatHistory(
        session_id=request.session_id,
        user_query=request.query,
        bot_response=bot_response
    )
    db.add(chat_history)
    db.commit()

    return {"response": bot_response}
