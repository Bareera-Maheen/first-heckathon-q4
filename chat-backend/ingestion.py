import os
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from .vector_store import upsert_vectors, create_collection
from .database import SessionLocal
from .models import ChatHistory
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def ingest_docs():
    """
    Ingests the documentation into the vector store.
    """
    # Get the directory of the current file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    docs_path = os.path.join(current_dir, "..", "book", "docs")

    # Load the documents
    loader = DirectoryLoader(
        docs_path, glob="**/*.md", loader_cls=TextLoader
    )
    documents = loader.load()

    # Split the documents into chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    docs = text_splitter.split_documents(documents)

    # Generate embeddings in batches
    # Extract all page contents first
    all_contents = [doc.page_content for doc in docs]
    
    # Batch processing for embeddings (up to 100 per call)
    batch_size = 100
    all_embeddings = []
    for i in range(0, len(all_contents), batch_size):
        batch_contents = all_contents[i:i + batch_size]
        batch_results = client.models.embed_content(
            model="text-embedding-004",
            contents=batch_contents,
            config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT")
        )
        all_embeddings.extend([res.values for res in batch_results.embeddings])
    
    embeddings = all_embeddings
    
    # Create and upsert vectors
    collection_name = "docusaurus_docs"
    create_collection(collection_name)
    upsert_vectors(collection_name, embeddings, [{"text": doc.page_content} for doc in docs])

if __name__ == "__main__":
    ingest_docs()
