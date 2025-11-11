#!/usr/bin/env bun
import { cac } from "cac";
import { createRoot, useRenderer } from "@opentui/react";
import { createCliRenderer } from "@opentui/core";
import * as React from "react";
import { TypingTest } from "./typing-test.tsx";

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
  .command("[...args]", "Start typing test")
  .action(async () => {
    try {
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
