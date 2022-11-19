import { createEditor, EditorConfig } from "lexical";
import type { JSXElement } from "solid-js";
import { LexicalContext } from "../hooks/useEditor";
interface IProps {
  children: (JSXElement | null)[] | JSXElement;
  config?: Partial<EditorConfig>;
}

export function LexicalComposer(props: IProps) {
  const editor = createEditor(props.config || {});

  return (
    <LexicalContext.Provider value={editor}>
      {props.children}
    </LexicalContext.Provider>
  );
}
