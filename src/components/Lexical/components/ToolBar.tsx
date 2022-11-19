import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useEditor } from "../hooks/useEditor";
import "../assets/iconfont.css";

export function ToolBar() {
  const editor = useEditor();

  const fontBoldHandle = () => {
    editor.update(() => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
    });
  };
  const fontItalicHandle = () => {
    editor.update(() => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
    });
  };
  const changeTextHandle = (type: TextFormatType) => {
    editor.update(() => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
    });
  };
  const tools: { type: TextFormatType; [k: string]: any }[] = [
    {
      icon: "i ant-design:bold-outlined",
      type: "bold",
    },
    {
      icon: "i ant-design:italic-outlined",
      type: "italic",
    },
    {
      icon: "i ant-design:underline-outlined",
      type: "underline",
    },
  ];

  return (
    <ul class="flex gap-4 px-4 cursor-pointer">
      {tools.map((t) => {
        return (
          <li class="text-lg" onClick={() => changeTextHandle(t.type)}>
            <i class={t.icon}></i>
          </li>
        );
      })}
    </ul>
  );
}
