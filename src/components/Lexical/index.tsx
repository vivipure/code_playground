import { onMount } from "solid-js";
import { LexicalComposer } from "./components/LexicalComposer";
import { RichtextEditContent } from "./components/RichtextEditContent";
import { useEditor } from "./hooks/useEditor";
import theme from "./theme";
import "./theme.css";
import { ToolBar } from "./components/ToolBar";
import "./assets/iconfont.css";

const AutoFocusPlugin = function () {
  const editor = useEditor();
  onMount(() => {
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
      <div class="h-40 border-2  bg-white border-solid border-black mx-4 ">
        <RichtextEditContent />
      </div>
      <AutoFocusPlugin></AutoFocusPlugin>
    </LexicalComposer>
  );
}
