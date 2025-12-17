import os
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from .vector_store import upsert_vectors, create_collection
from .database import SessionLocal
from .models import ChatHistory
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def ingest_docs():
    """
    Ingests the documentation into the vector store.
    """
    # Load the documents
    loader = DirectoryLoader(
        "book/docs", glob="**/*.md", loader_cls=TextLoader
    )
    documents = loader.load()

    # Split the documents into chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    docs = text_splitter.split_documents(documents)

    # Generate embeddings
    embeddings = [genai.embed_content(model="gemini-embedding-001", content=doc.page_content, output_dimensionality=768)["embedding"] for doc in docs]
    
    # Create and upsert vectors
    collection_name = "docusaurus_docs"
    create_collection(collection_name)
    upsert_vectors(collection_name, embeddings, [{"text": doc.page_content} for doc in docs])

if __name__ == "__main__":
    ingest_docs()
