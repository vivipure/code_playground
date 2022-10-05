import { createEditor, monaco } from "../../libs/monaco";
import type { editor } from "../../libs/monaco";
import { createEffect, onMount } from "solid-js";

interface PropsInterface {
  onChange?: (value: string, event: editor.IModelContentChangedEvent) => any;
  language: string;
  value: string;
}

export default function Editor(props: Partial<PropsInterface>) {
  let { language = "typescript", value = "" } = props;

  let editorContainer: HTMLDivElement | undefined;
  let editorInstance: editor.IStandaloneCodeEditor | undefined;
  let isUpdateFromParent = false;

  createEffect(() => {
    if (props.language !== language || props.value !== value) {
      console.log("我被触发了");

      isUpdateFromParent = true;
      updateOption(props.value || "", props.language!);
    }
    language = props.language!;
    value = props.value!;
  });
  function updateOption(value: string, language: string) {
    const model = editorInstance?.getModel();
    monaco.editor.setModelLanguage(model!, language);
    editorInstance?.setValue(value);
  }

  //   初始化编辑器
  onMount(() => {
    editorInstance = createEditor(editorContainer!, {
      language: language,
      value: value,
    });
    window.onresize = () => {
      editorInstance!.layout();
    };
    editorInstance.onDidContentSizeChange(() => {
      editorInstance!.layout()
      // const width = editorContainer!.clientWidth;
      // const height = editorContainer!.clientHeight;
      // const contentHeight = Math.min(
      //   height,
      //   editorInstance!.getContentHeight()
      // );

      // try {
      //   editorInstance!.layout({ width, height: contentHeight });
      // } finally {
      // }
    });

    if (props.onChange) {
      editorInstance.onDidChangeModelContent((e) => {
        if (isUpdateFromParent) {
          isUpdateFromParent = false;
          return;
        }
        value = editorInstance!.getValue();
        props.onChange!(value, e);
      });
    }
  });
  return <div class="h-full w-full" ref={editorContainer}></div>;
}
