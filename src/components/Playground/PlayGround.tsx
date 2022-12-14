import { useLocalStorage } from "../../hooks/useLocalstorage";
import EditFileList from "./EditFileList";
import Editor from "../Editor/Editor";

import type { FileInterface } from "./EditFileList";
import { createEffect, createSignal } from "solid-js";

const fileContentMap: Record<string, string> = {
  1: "// write your javascript code",
  2: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      </style>
  </head>
  
  <body>
      <h1>Hello world!</h1>
  </body>
  </html>`,
  3: `* {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}
`,
};
const defaultFileList = [
  {
    id: "1",
    fileName: "js",
    type: "javascript",
  },
  {
    id: "2",
    fileName: "html",
    type: "html",
  },
  {
    id: "3",
    fileName: "css",
    type: "css",
  },
];

export default function PlayGround() {
  const [fileContentTable, saveFileContentTable] = useLocalStorage<
    typeof fileContentMap
  >("fileContent", fileContentMap);

  const [fileList] = createSignal<FileInterface[]>(defaultFileList);
  const [activeFile, setActiveFile] = createSignal<FileInterface>(
    fileList()[0]
  );

  const defaultValue = fileContentTable()[activeFile().id];

  const [language, setLanguage] = createSignal(activeFile().type);
  const [value, setValue] = createSignal(defaultValue);

  const currentValue = () => fileContentTable()[activeFile().id];

  const fileChangeHandle = (file: FileInterface) => {
    setActiveFile(file);
    setLanguage(file.type);
    setValue(currentValue());
    console.log(file.type, currentValue());
  };

  let iframeRef: HTMLIFrameElement | undefined;

  const codeChange = (v: string) => {
    const newFileTable = {
      ...fileContentTable(),
      [activeFile().id]: v,
    };
    saveFileContentTable(newFileTable);
  };

  function composeHTML() {
    const iframeDocument = iframeRef!.contentDocument!;
    iframeDocument.documentElement.innerHTML = fileContentTable()[2];
    const headTag = iframeDocument.head;

    let styleTag = document.createElement("style");
    headTag.appendChild(styleTag);
    styleTag.textContent = fileContentTable()[3];

    let scriptTag = document.createElement("script");
    headTag.appendChild(scriptTag);
    scriptTag.textContent = fileContentTable()[1];
  }
  // ??????????????????
  createEffect(() => {
    composeHTML();
  });

  return (
    <div class="w-full h-[100vh] flex flex-col">
      <EditFileList
        list={fileList()}
        activeFile={activeFile()}
        onChange={fileChangeHandle}
      />

      <div class="flex flex-1">
        <div class="overflow-hidden flex-1 flex flex-row">
          <Editor onChange={codeChange} language={language()} value={value()} />
        </div>
        <div class="h-full w-1 bg-slate-500"></div>
        <div class="flex-1 h-full bg-white">
          <iframe class="h-full w-full" ref={iframeRef}></iframe>
        </div>
      </div>
    </div>
  );
}
