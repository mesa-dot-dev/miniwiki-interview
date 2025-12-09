# MiniWiki - Repository Intelligence Interview

A minimal Next.js application for chatting with this specific repository.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment

Copy the environment template and add your Anthropic API key:

```bash
# Create .env file
echo "ANTHROPIC_API_KEY=your_api_key_here" > .env
```

Get your API key from [Anthropic Console](https://console.anthropic.com/).

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the chat interface.

## The Goal

Build a chatbot that can answer questions about this codebase.

## The Challenge

When AI agents need to understand a code repository, there are two main approaches:

### 1. Agentic Search (Real-time Exploration)

The agent explores the codebase on-demand for each query:

- Lists directories, reads files, searches for relevant code
- **Pros**: Potentially more accurate, can navigate complex codebases
- **Cons**: Slow, expensive (lots of tokens), repeats work for every question

### 2. RAG - Retrieval Augmented Generation (Precomputed Index)

Build an index of the codebase once, then filter it for each query:

- All the hard work happens upfront in a single precomputation step
- **Pros**: Fast, token-efficient, work is cached between chat sessions
- **Cons**: Limited to what's in the index, potentially retrieve useless info

## Your Task

Implement a basic RAG system for this chatbot **without using vector embeddings**.

Think of this in two phases:

**Phase 1: Precomputation (one-time, cached)**

- Run once to analyze and index this codebase
- Output: A searchable index that persists between chat sessions
- You can use LLMs during this phase if helpful

**Phase 2: Query-time (fast retrieval)**

- When a user asks a question, filter the precomputed index
- Retrieve relevant code snippets and pass them to the LLM
- No expensive exploration, just fast lookups

**Hint:** You already have everything you need. There's a script at `scripts/index-repo.ts` you can run with `npm run index`. Start simple and iterate.

## What's Already Built

✅ **Chat Interface** - A fully functional ChatGPT-style UI  
✅ **Streaming API** - Backend with Anthropic Claude integration  
✅ **Index Storage** - System to save and load your index  
✅ **CLI Runner** - Infrastructure to run the indexing script

## What You Need to Implement

**1. Precomputation Logic**

- Analyze this codebase and create a searchable index
- Save it as JSON so it persists between chat sessions

**2. Query-time Retrieval**

- Load the precomputed index
- Filter it based on the user's question
- Pass relevant code snippets to the LLM

## Key Constraints

- **No vector embeddings** - Use simpler techniques (keyword matching, LLM-based filtering, etc.)
- **No external databases** - Keep it simple, use JSON files
- **Token limits** - You can't send the entire codebase to the LLM every time

## Tips

- Start with the simplest approach that could work
- The precomputation step can use LLMs if helpful
- Test with real questions like "How does the chat API work?" or "What UI components are available?"
- Think about what information an LLM needs to answer code questions accurately
