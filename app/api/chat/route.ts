import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages } from "ai";
import { loadIndex, formatIndexForContext } from "@/lib/load-index";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Load the repository index if it exists
  const index = await loadIndex();
  const indexContext = formatIndexForContext(index);

  // Convert UI messages to model messages
  const modelMessages = convertToModelMessages(messages);

  const result = streamText({
    model: anthropic("claude-4-sonnet-20250514"),
    system: `You are a helpful AI assistant that can answer questions about a repository.

${indexContext}

When answering questions, use the repository index to provide accurate, specific information about the codebase.
If the index is not available, politely inform the user and suggest they create one.`,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
