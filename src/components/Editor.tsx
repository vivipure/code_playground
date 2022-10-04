import createEditor, { monaco } from "../libs/monaco";
import type { editor } from "../libs/monaco";
import { createEffect, onMount } from "solid-js";

interface PropsInterface {
  onChange?: (value: string, event: editor.IModelContentChangedEvent) => any;
  onMounted?: (editorMethods: EditorMethods) => any;
  defaultLanguage: string;
  defaultValue: string;
}

export interface EditorMethods {
  updateOption(value: string, language: string): void;
}

export default function Editor(props: Partial<PropsInterface>) {
  const {
    onChange,
    defaultLanguage = "typescript",
    defaultValue = "",
    onMounted,
  } = props;

  let editorContainer: HTMLDivElement | undefined;
  let editorInstance: editor.IStandaloneCodeEditor | undefined;

  //   初始化编辑器
  onMount(() => {
    editorInstance = createEditor(editorContainer!, {
      language: defaultLanguage,
      value: defaultValue,
    });
    window.onresize = () => {
      editorInstance!.layout();
    };

    if (onChange) {
      editorInstance.onDidChangeModelContent((e) => {
        const value = editorInstance!.getValue();
        onChange(value, e);
      });
    }
    if (onMounted) {
      const editorMethods: EditorMethods = {
        updateOption(value: string, language: string) {
          const model = editorInstance?.getModel();
          monaco.editor.setModelLanguage(model!, language);
          editorInstance?.setValue(value);
        },
      };
      onMounted(editorMethods);
    }
  });
  return <div class="h-full w-full" ref={editorContainer}></div>;
}
