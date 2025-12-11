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

Right now the chatbot has no information about the codebase and thus cannot answer any questions about it.

You _could_ just concatenate the whole codebase into a string and pass that into the llm with the user message. That _will_ work with this codebase but we don't want to do that.

Given that we don't want to stick the whole codebase into 1 LLM call, ou could give it tools like bash to read files and explore the code but then every time you ask a new question it'll have to do a bunch of exploratory work to look things up.

Instead, we want to build a simple RAG system instead that can retrieve the relevant files for any given user message from the codebase in 1 distinct step and pass those files to the final LLM call with the user message so that it has the context it needs to answer the question.

### Question 1

What's the obvious limitation of passing in the whole codebase into the prompt?

### Constraints

- Do not use a vector store
- You can assume 1 single file will never break the context window
- You should not use any external dependencies

**Hint:** You already have everything you need. There's a script at `scripts/index-repo.ts` you can run with `npm run index`. Start simple and iterate.

## What's Already Built

✅ **Chat Interface** - A fully functional ChatGPT-style UI  
✅ **Streaming API** - Backend with Anthropic Claude integration  
✅ **Index Storage** - System to save and load your index  
✅ **CLI Runner** - Infrastructure to run the indexing script

## What You Need to Implement

**1. Indexing Logic**

- Analyze this codebase and create a searchable index
- Save it as JSON so it persists between chat sessions

**2. Retrieval Logic**

- Load the precomputed index
- Filter it based on the user's question
- Pass relevant code snippets to the LLM

## Tips

- Start with the simplest approach that could work
- The precomputation step can use LLMs if helpful
- Test with real questions like "How does the chat API work?" or "What UI components are available?"
- Think about what information an LLM needs to answer code questions accurately
