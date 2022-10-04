import { createEffect, onMount } from "solid-js";
import {
  createDiffEditor,
  DiffEdiotr,
} from "../../libs/monaco";

interface PropsInterface {
  prevtext: string;
  nexttext: string;
  lang: string;
}

export default function DiffEditor(props: PropsInterface) {
  let editorContainer: HTMLDivElement | undefined;
  let editorInstance: DiffEdiotr | undefined;
  createEffect(() => {
    if (editorInstance) {
      editorInstance?.setDiff(props.prevtext, props.nexttext, props.lang);
    }
  });
  onMount(() => {
    editorInstance = createDiffEditor(editorContainer!);
    editorInstance?.setDiff(props.prevtext, props.nexttext, props.lang);
  });

  return <div class="h-full w-full" ref={editorContainer}></div>;
}
