from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, database, vector_store
from .models import ChatRequest
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = FastAPI()

# --- CORS Middleware ---
origins = [
    "http://localhost:3000", # Docusaurus dev server
    "https://first-heckathon-q4-jn4u.vercel.app",
    "https://first-heckathon-q4-jn4u.vercel.app/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

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
    try:
        # Generate embedding for the query
        query_embedding = client.models.embed_content(
        model="text-embedding-004",
        contents=request.query,
        config=types.EmbedContentConfig(task_type="RETRIEVAL_QUERY")
        ).embeddings[0].values        # Search for similar vectors
        search_results = vector_store.search_vectors(vector_store.qdrant_client, "docusaurus_docs", query_embedding)

        # Get the text from the search results
        context = " ".join([result.payload["text"] for result in search_results])

        # Construct the prompt
        prompt = f"Question: {request.query}\nContext: {context}\nAnswer:"

        # Generate the response
        response = client.models.generate_content(model="gemini-2.5-flash", contents=prompt)
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
    except Exception as e:
        import traceback
        traceback.print_exc() # This will print to the server's stdout/stderr
        raise # Re-raise to still get 500
