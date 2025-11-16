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

In multi-step agentic systems, like our review agent, when you initiate a new chat or query the agent needs to build up its understanding of the repository from scratch. It uses tool calls to do this and it's often quite good at it. It'll look up the files in a repo, read some of the files, etc. until it feels it has the knowledge to answer the initial prompt. This can be effective but it's slow and uses a lot of tokens. Every time there's a new review or chat, it has to redo all the work to understand the repository.

We want to short circuit a lot of this work by building a miniature version of [Deepwiki](https://deepwiki.com/microsoft/vscode). Deepwiki indexes a codebase so that you can ask a quick question about the codebase and get back relevant sections of the codebase for answering that question.

Your goal is to implement a simple index of this repository. The index should be a simple JSON array of "documents" and you should be able to filter to relevant documents and pass that into the final LLM call to answer the user query. Hint: you should have everything you need to accomplish this task in this repo, you don't need more external dependencies (although you can if you want). Don't overcomplicate it, and ask me any questions.

There is the outline of a script for creating this index and you can run it with `npm run index`.

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
