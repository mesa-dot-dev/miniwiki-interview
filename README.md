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

## Interview Task

**The Problem: Wasteful Repeated Work**

In multi-step agentic systems, like our review agent, every new chat or query triggers the same expensive discovery process. The agent makes dozens of tool calls to explore the repository—listing directories, reading files, searching for relevant code—burning tokens and time to build context from scratch. Then the next query comes in and it repeats all of this work again. This is fundamentally inefficient.

**The Solution: Precomputation**

The key insight is that **most of the work to understand a codebase can be done once, upfront**. Instead of rediscovering the repository structure on every query, we can precompute an index that maps questions to relevant code sections. When a user asks a question, we simply filter the precomputed index to fetch exactly the context the LLM needs—no exploration, no wasted tool calls, just immediate access to the right information.

**Your Task**

Implement a simple indexing system for this repository. Create a JSON array of "documents" that captures the essential information about the codebase. When a user query comes in, filter this precomputed index to retrieve only the relevant documents and pass them directly to the LLM. The goal is to eliminate the wasteful discovery phase entirely by doing the hard work once and reusing it.

Hint: you already have everything you need in this repo—don't overcomplicate it. There's an outline of an indexing script you can run with `npm run index`. Ask questions if you're unsure about anything.

### What's Already Built

✅ **Chat Interface** - A fully functional ChatGPT-style UI  
✅ **Streaming API** - Backend with Anthropic Claude integration  
✅ **Index Loading** - System to save and load the index
✅ **CLI Runner** - Script execution infrastructure

### What You Need to Implement

1. The core indexing logic in `scripts/index-repo.ts`:

2. How the index is filtered and loaded in the chat route

## Evaluation Criteria

Your solution will be evaluated on:

1. **Completeness** - Does it create a useful index?
2. **Code Quality** - Is the code clean, well-structured, and maintainable?
3. **Efficiency** - Is it performant and token-conscious?
4. **Intelligence** - Does it enable accurate question-answering?
5. **Design Decisions** - How well do you justify your approach?

## Tips

- Start with the simplest possible solution that will work and iterate
- Consider what information an LLM needs to answer questions accurately
- Think about token limits - you can't include everything
- Test frequently with real questions
