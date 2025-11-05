# MiniWiki - Repository Intelligence Interview

A minimal Next.js application for building an intelligent repository indexing and Q&A system. This project serves as a coding interview to assess how candidates would approach building a DeepWiki-style tool.

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

Your goal is to implement the repository indexing system that powers the AI chat interface.

### What's Already Built

✅ **Chat Interface** - A fully functional ChatGPT-style UI  
✅ **Streaming API** - Backend with Anthropic Claude integration  
✅ **Index Loading** - System to load and inject index data into AI context  
✅ **CLI Runner** - Script execution infrastructure

### What You Need to Implement

The core indexing logic in `scripts/index-repo.ts`:

#### 1. `analyzeRepository()` Function

**Goal**: Traverse and analyze the repository structure and contents.

**Considerations**:

- How do you efficiently walk the file tree?
- Which files should be included/excluded?
- What information is most valuable to extract?
- How do you handle different file types?
- Should you parse code to extract functions, classes, imports?

#### 2. `createIndex()` Function

**Goal**: Transform raw analysis into an optimized, AI-friendly index.

**Considerations**:

- What data structure works best for LLM consumption?
- How do you balance comprehensiveness vs. token efficiency?
- Should you create summaries, embeddings, or structured metadata?
- How can you enable fast, accurate question-answering?

### Testing Your Implementation

1. **Create the index**:

```bash
npm run index
```

2. **Test in the chat interface**:

   - Start the dev server (`npm run dev`)
   - Ask questions like:
     - "What files are in this repository?"
     - "Describe the structure of this codebase"
     - "What does the chat API route do?"
     - "How is the index loaded and used?"

3. **Iterate and improve**:
   - Refine your indexing strategy
   - Optimize for better answers
   - Consider token usage and performance

## Project Structure

```
miniwiki/
├── app/
│   ├── api/chat/route.ts    # Streaming chat API with Anthropic
│   ├── page.tsx             # Chat UI component
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Tailwind styles
├── lib/
│   └── load-index.ts        # Index loading utilities
├── scripts/
│   └── index-repo.ts        # 🎯 YOUR TASK: Implement indexing logic
├── package.json
└── README.md
```

## Evaluation Criteria

Your solution will be evaluated on:

1. **Completeness** - Does it create a useful index?
2. **Code Quality** - Is the code clean, well-structured, and maintainable?
3. **Efficiency** - Is it performant and token-conscious?
4. **Intelligence** - Does it enable accurate question-answering?
5. **Design Decisions** - How well do you justify your approach?

## Tips

- Start simple and iterate
- Consider what information an LLM needs to answer questions accurately
- Think about token limits - you can't include everything
- Test frequently with real questions
- Document your design decisions

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **AI**: Anthropic Claude 3.5 Sonnet via Vercel AI SDK
- **UI**: React with Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Additional Challenges (Optional)

If you finish early or want to go further:

- Add support for multiple repositories
- Implement incremental index updates
- Add semantic search capabilities
- Create a more sophisticated index format (embeddings, chunks, etc.)
- Add visualization of the repository structure
- Implement caching strategies

Good luck! 🚀
