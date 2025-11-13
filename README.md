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

Your goal is to implement a simple index of this repository. The index should be a simple JSON array of "documents" and you should be able to filter to relevant documents and pass that into the final LLM call to answer the user query.

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
