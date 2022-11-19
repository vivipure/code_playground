import { registerRichText } from "@lexical/rich-text";
import {  onMount } from "solid-js";
import { useEditor } from "../hooks/useEditor";




export function RichtextEditContent() {
  let editorContainer: HTMLDivElement | undefined;
  const editor = useEditor();
  onMount(() => {
    if (editorContainer) {
      registerRichText(editor);
      editor.setRootElement(editorContainer);
      editor.update(() => {
      });
    }
  });

  return (
    <div class="h-full " contentEditable={true} ref={editorContainer}></div>
  );
}
