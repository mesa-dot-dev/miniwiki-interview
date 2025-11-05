import { readFile } from "fs/promises";
import { join } from "path";

export interface RepositoryIndex {
  timestamp: string;
  files?: string[];
  structure?: any;
  metadata?: any;
  // Candidates can extend this interface as needed
  [key: string]: any;
}

/**
 * Loads the repository index from index.json
 * Returns null if the index doesn't exist or can't be read
 */
export const loadIndex = async (): Promise<RepositoryIndex | null> => {
  try {
    const indexPath = join(process.cwd(), "index.json");
    const indexData = await readFile(indexPath, "utf-8");
    return JSON.parse(indexData);
  } catch (error) {
    // Index doesn't exist yet or couldn't be read
    return null;
  }
};

/**
 * Formats the index data for inclusion in AI context
 * Candidates may want to modify this to optimize token usage
 */
export const formatIndexForContext = (index: RepositoryIndex | null): string => {
  if (!index) {
    return "No repository index available. Ask the user to run 'npm run index' to create one.";
  }

  return `Repository Index (created ${index.timestamp}):
${JSON.stringify(index, null, 2)}

Use this index to answer questions about the repository structure and contents.`;
};
