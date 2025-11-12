#!/usr/bin/env bun
import { cac } from "cac";
import { createRoot, useRenderer } from "@opentui/react";
import { createCliRenderer } from "@opentui/core";
import * as React from "react";
import { TypingTest, useTypingStore } from "./typing-test.tsx";
import { splitIntoWordGroups, WORDS_PER_TEST } from "./utils.ts";
import { getRandomCodeSnippet, normalizeLanguage } from "./code-snippets.ts";

const cli = cac("keysmasher");

function App() {
  const renderer = useRenderer();

  React.useEffect(() => {
    // Hide cursor for cleaner look
    renderer.console.hide();
  }, [renderer]);

  return <TypingTest />;
}

cli
  .command("[text]", "Start typing test with optional custom text or language code")
  .option("--lang <language>", "Specify language for code generation or highlighting (e.g., js, ts, py, md)")
  .action(async (text?: string, options?: { lang?: string }) => {
    try {
      let contentPages: string[][];
      let language: string | null = null;

      // Handle --lang flag with code generation
      if (options?.lang && !text) {
        const normalizedLang = normalizeLanguage(options.lang);
        const codeSnippet = getRandomCodeSnippet(normalizedLang);

        if (codeSnippet) {
          contentPages = splitIntoWordGroups(codeSnippet, WORDS_PER_TEST);
          language = normalizedLang;
        } else {
          console.error(`No code snippets available for language: ${options.lang}`);
          console.error(
            `Supported languages: javascript (js), typescript (ts), python (py), markdown (md), json, html, css, bash (sh), yaml (yml), rust (rs), go, java, c, cpp`
          );
          process.exit(1);
        }
      } else if (text && text.trim().length > 0) {
        // Custom text provided
        contentPages = splitIntoWordGroups(text, WORDS_PER_TEST);

        // Only use specified language (no auto-detection)
        if (options?.lang) {
          language = normalizeLanguage(options.lang);
        }
      } else {
        // Default: random words (no highlighting)
        contentPages = [useTypingStore.getState().words];
        language = null;
      }

      await useTypingStore.getState().initializeContent(contentPages, language);

      const renderer = await createCliRenderer({
        exitOnCtrlC: false,
      });

      createRoot(renderer).render(<App />);
    } catch (error) {
      console.error("Error starting keysmasher:", error);
      process.exit(1);
    }
  });

cli.help();
cli.version("0.0.1");
cli.parse();
