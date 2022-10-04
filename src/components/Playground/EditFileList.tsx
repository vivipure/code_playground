import { createSignal } from "solid-js";

interface PropsInterface {
  list?: FileInterface[];
  onChange?: (file: FileInterface) => void;
  activeFile: FileInterface;
}

export interface FileInterface {
  id: string;
  fileName: string;
  type: string;
}

export default function EditFileList({
  list = [],
  onChange,
  activeFile,
}: PropsInterface) {
  const [currentFile, setCurrentFile] = createSignal<FileInterface>(activeFile);

  const clickHandle = (f: FileInterface) => {
    if (f.id === currentFile().id) {
      return;
    }
    setCurrentFile(f);
    onChange && onChange(f);
  };

  return (
    <ul class="flex  bg-black">
      {list.map((f) => {
        return (
          <li
            class={`border-solid font-serif  min-w-[4em] text-center  border-transparent  border-b-4 cursor-pointer  ${
              f.id === currentFile().id
                ? "border-green-400 text-green-400 "
                : "text-white hover:border-green-400  hover:text-green-400"
            }`}
            onClick={() => clickHandle(f)}
          >
            {f.fileName}
          </li>
        );
      })}
    </ul>
  );
}
