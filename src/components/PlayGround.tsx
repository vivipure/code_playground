import { useLocalStorage } from "../hooks/useLocalstorage";
import EditFileList from "./EditFileList";
import Editor, { EditorMethods } from "./Editor";
import { ToolBar } from "./ToolBar";

import type { FileInterface } from "./EditFileList";
import { createMemo, createSignal } from "solid-js";

const fileContentMap: Record<string, string> = {
  1: "console.log(1)",
  2: "<h1>hello world>",
  3: ".a {text-decoration: none;}",
};
const defaultFileList = [
  {
    id: "1",
    fileName: "js",
    type: 'javascript'
  },
  {
    id: "2",
    fileName: "html",
    type: 'html'
  },
  {
    id: "3",
    fileName: "css",
    type: 'css'
  },
];

export default function PlayGround() {
  const [fileContentTable, saveFileContentTable] = useLocalStorage<
    typeof fileContentMap
  >("fileContent", fileContentMap);

  let editorMethods: EditorMethods;
  const [fileList] = createSignal<FileInterface[]>(defaultFileList);
  const [activeFile, setActiveFile] = createSignal<FileInterface>(
    fileList()[0]
  );

  const defaultLanguage = activeFile().type
  const defaultValue = fileContentTable()[activeFile().id];

  const currentValue = () => fileContentTable()[activeFile().id];

  const fileChangeHandle = (file: FileInterface) => {
    setActiveFile(file);
    editorMethods.updateOption(currentValue() || "", file.type);
  };



  const codeChange = (v: string) => {
    const newFileTable = {
      ...fileContentTable(),
      [activeFile().id]: v,
    };
    saveFileContentTable(newFileTable);
  };
  const editorMountedHandle = (obj: EditorMethods) => {
    editorMethods = obj;
  };

  return (
    <div class="w-full h-[100vh] flex flex-col">
      <ToolBar />
      <EditFileList
        list={fileList()}
        activeFile={activeFile()}
        onChange={fileChangeHandle}
      />
      <div class="flex flex-1">
        <div class="flex-1 flex flex-row">
          <Editor
            onChange={codeChange}
            defaultLanguage={defaultLanguage}
            defaultValue={defaultValue}
            onMounted={editorMountedHandle}
          />
        </div>
        <div class="h-full w-1 bg-slate-500"></div>
        <div class="flex-1 h-full">
          <iframe class="h-full w-full" srcdoc={currentValue()}></iframe>
        </div>
      </div>
    </div>
  );
}
