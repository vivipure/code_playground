import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useEditor } from "../hooks/useEditor";

export function ToolBar() {
  const editor = useEditor();

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
    {
      icon: "i codicon:code",
      type: "code",
    },
  ];

  return (
    <ul class="flex  px-4 cursor-pointer bg-white">
      {tools.map((t) => {
        return (
          <li
            class="text-lg hover:bg-gray-200 px-2 flex items-center"
            onClick={() => changeTextHandle(t.type)}
          >
            <i class={t.icon}></i>
          </li>
        );
      })}
    </ul>
  );
}
