import type { LexicalEditor } from "lexical";
import { useContext } from "solid-js";

import { createContext } from "solid-js";
export const LexicalContext = createContext();

export function useEditor() {
  const context = useContext(LexicalContext);

  if (!context) {
    throw new Error("useEditor: cannot find a Lexical context");
  }
  return context as LexicalEditor;
}
