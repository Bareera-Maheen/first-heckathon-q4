from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct
from dotenv import load_dotenv
import os

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

qdrant_client = QdrantClient(
    url=QDRANT_URL, 
    api_key=QDRANT_API_KEY,
)

def create_collection(collection_name):
    qdrant_client.recreate_collection(
        collection_name=collection_name,
        vectors_config={"size": 768, "distance": "Cosine"} # Assuming using a model with 768 dimensions
    )

def upsert_vectors(collection_name, vectors, payloads):
    points = [
        PointStruct(id=idx, vector=vector, payload=payload)
        for idx, (vector, payload) in enumerate(zip(vectors, payloads))
    ]
    qdrant_client.upsert(
        collection_name=collection_name,
        points=points,
        wait=True
    )

def search_vectors(client: QdrantClient, collection_name, query_vector, limit=5):
    response = client.query_points(
        collection_name=collection_name,
        query=query_vector,
        limit=limit
    )
    return response.points
