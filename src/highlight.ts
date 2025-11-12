import { createHighlighter, type ThemedToken, type GrammarState } from "shiki";

let highlighterInstance: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighterInstance) {
    highlighterInstance = await createHighlighter({
      themes: ["github-dark"],
      langs: [
        "javascript",
        "typescript",
        "jsx",
        "tsx",
        "python",
        "markdown",
        "json",
        "html",
        "css",
        "bash",
        "yaml",
        "rust",
        "go",
        "java",
        "c",
        "cpp",
      ],
    });
  }
  return highlighterInstance;
}

export interface HighlightResult {
  tokens: ThemedToken[][];
  grammarState: GrammarState | undefined;
}

export async function highlightText(
  text: string,
  lang: string,
  grammarState?: GrammarState
): Promise<HighlightResult> {
  const highlighter = await getHighlighter();

  try {
    const result = highlighter.codeToTokens(text, {
      lang: lang as any,
      theme: "github-dark",
      grammarState,
    });

    return {
      tokens: result.tokens,
      grammarState: highlighter.getLastGrammarState(result.tokens),
    };
  } catch (error) {
    // If highlighting fails, return plain tokens
    console.error("Highlighting error:", error);
    return {
      tokens: [[{ content: text, color: "#e1e4e8", offset: 0 }]],
      grammarState: undefined,
    };
  }
}
