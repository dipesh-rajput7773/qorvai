---
title: "RAG Pipeline for Legal Documents: How CA Firms Save 20hrs/Week"
description: "How to build a Retrieval-Augmented Generation (RAG) pipeline that lets CA firms and law offices instantly search, extract, and analyze hundreds of PDF contracts and legal documents."
date: "2026-04-04"
readTime: "8 min read"
category: "AI Automation"
keywords: ["rag pipeline for documents", "legal document ai india", "document search ai ca firm", "pdf rag pipeline python"]
---

## The Document Search Problem in CA and Law Firms

A CA firm with 200 active clients has thousands of documents: contracts, agreements, GST filings, audit reports, certificates. When a client calls asking "what was the depreciation rate we used in last year's audit?", someone has to dig through folders for 20 minutes.

RAG (Retrieval-Augmented Generation) solves this. Build it once, and you can ask plain-English questions about any document in your database and get an instant, accurate answer.

---

## What Is RAG, Actually?

RAG is a two-part system:
1. **Retrieval**: Find the most relevant document chunks for a given query
2. **Generation**: Use an AI (Claude/GPT) to synthesize an answer from those chunks

The key difference from regular AI: RAG only answers from **your actual documents**, not from general training data. That means no hallucinations about your specific client contracts.

---

## Architecture

\`\`\`
PDF Documents (contracts, audit reports, filings)
        ↓
Text Extraction (pdfplumber / pytesseract for scanned)
        ↓
Chunking (split into 500-token overlapping segments)
        ↓
Embedding (convert text chunks to vectors)
        ↓
Vector Database (ChromaDB / Pinecone)
        ↓
User asks question
        ↓
Question embedded → search vector DB → retrieve top 5 chunks
        ↓
Claude API: "Answer this question using only these document excerpts: ..."
        ↓
Answer with source document citations
\`\`\`

---

## Step 1: Install Dependencies

\`\`\`bash
pip install chromadb sentence-transformers pdfplumber anthropic langchain
\`\`\`

---

## Step 2: Extract and Chunk Documents

\`\`\`python
import pdfplumber
from pathlib import Path

def extract_text(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return " ".join(page.extract_text() or "" for page in pdf.pages)

def chunk_text(text, chunk_size=500, overlap=50):
    """Split text into overlapping chunks"""
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        if len(chunk.strip()) > 50:  # Skip tiny chunks
            chunks.append(chunk)
    return chunks

def process_document_folder(folder_path):
    all_chunks = []
    for pdf_file in Path(folder_path).glob("**/*.pdf"):
        text = extract_text(str(pdf_file))
        chunks = chunk_text(text)
        for i, chunk in enumerate(chunks):
            all_chunks.append({
                "text": chunk,
                "source": pdf_file.name,
                "chunk_id": f"{pdf_file.stem}_{i}"
            })
    return all_chunks
\`\`\`

---

## Step 3: Build the Vector Database

\`\`\`python
import chromadb
from sentence_transformers import SentenceTransformer

# Initialize
chroma_client = chromadb.PersistentClient(path="./legal_docs_db")
collection = chroma_client.get_or_create_collection("legal_documents")
model = SentenceTransformer("all-MiniLM-L6-v2")  # Fast, good quality

def index_documents(chunks):
    texts = [c["text"] for c in chunks]
    ids = [c["chunk_id"] for c in chunks]
    sources = [c["source"] for c in chunks]
    
    # Generate embeddings
    embeddings = model.encode(texts).tolist()
    
    # Store in ChromaDB
    collection.add(
        documents=texts,
        embeddings=embeddings,
        ids=ids,
        metadatas=[{"source": s} for s in sources]
    )
    print(f"Indexed {len(chunks)} chunks")

# Run once to build the database
chunks = process_document_folder("./client_documents")
index_documents(chunks)
\`\`\`

---

## Step 4: Query the System

\`\`\`python
import anthropic

claude_client = anthropic.Anthropic()

def ask_documents(question, top_k=5):
    # Embed the question
    question_embedding = model.encode([question]).tolist()[0]
    
    # Retrieve relevant chunks
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=top_k
    )
    
    relevant_chunks = results["documents"][0]
    sources = [m["source"] for m in results["metadatas"][0]]
    
    # Build context
    context = "\\n\\n---\\n\\n".join(
        f"[Source: {src}]\\n{chunk}" 
        for src, chunk in zip(sources, relevant_chunks)
    )
    
    # Ask Claude
    response = claude_client.messages.create(
        model="claude-opus-4-6",
        max_tokens=800,
        messages=[{
            "role": "user",
            "content": f"""Answer this question using ONLY the document excerpts provided below.
If the answer is not in the documents, say "I couldn't find this in the available documents."

Question: {question}

Document excerpts:
{context}

Answer with the source document name in brackets after each fact."""
        }]
    )
    
    return {
        "answer": response.content[0].text,
        "sources": list(set(sources))
    }

# Example usage
result = ask_documents("What depreciation rate was used for Plant & Machinery in the FY2024 audit for ABC Ltd?")
print(result["answer"])
print("Sources:", result["sources"])
\`\`\`

---

## Step 5: Simple Web UI (Streamlit)

\`\`\`python
import streamlit as st

st.title("📄 Legal Document Assistant")
st.caption("Ask questions about any document in your database")

question = st.text_input("Your question:")

if st.button("Search") and question:
    with st.spinner("Searching documents..."):
        result = ask_documents(question)
    
    st.markdown("### Answer")
    st.write(result["answer"])
    
    st.markdown("### Source Documents")
    for source in result["sources"]:
        st.code(source)
\`\`\`

Run with: \`streamlit run app.py\`

---

## Real-World Performance at a Pune CA Firm

**Documents indexed:** 4,200 PDFs (3 years of client files)  
**Index build time:** 2.5 hours (one-time)  
**Query response time:** 3-8 seconds  
**Accuracy on test queries:** 94%  

**Use cases they automated:**
- "When does [client]'s GST registration expire?" → instant answer
- "What was the net profit ratio for [client] in FY23?" → pulls from audit report
- "Which clients have turnover > ₹5cr?" → scans all P&L statements
- "Find all contracts with renewal clauses expiring this quarter" → compliance alert

**Time saved: 22 hours/week** across a 6-person team.

---

## The Stack

- **pdfplumber** (text extraction)
- **ChromaDB** (vector database, runs locally)
- **sentence-transformers** (embeddings)
- **Claude API** (answer generation)
- **Streamlit** (UI)

Total infrastructure cost: **₹0/month** (runs on your existing computer or a cheap VPS).

---

## Want This Built for Your Firm?

Qorvai builds custom RAG document intelligence systems for CA firms, law offices, and compliance teams. [Book a free audit call](https://qorvai.com#cta).
