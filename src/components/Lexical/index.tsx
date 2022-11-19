import { createEffect, onMount } from "solid-js";
import { LexicalComposer } from "./components/LexicalComposer";
import { RichtextEditContent } from "./components/RichtextEditContent";
import { useEditor } from "./hooks/useEditor";
import theme from "./theme";
import "./theme.css";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { ToolBar } from "./components/ToolBar";

const AutoFocusPlugin = function () {
  const editor = useEditor();
  onMount(() => {
    console.log(editor.isEditable());
    editor.focus();
  });
  return null;
};

export function Lexical() {
  const config = {
    theme,
  };
  return (
    <LexicalComposer config={config}>
      <ToolBar />
      <div class="h-40 border-2  border-solid border-black mx-4 ">
        <RichtextEditContent />
      </div>
      <AutoFocusPlugin></AutoFocusPlugin>
    </LexicalComposer>
  );
}
