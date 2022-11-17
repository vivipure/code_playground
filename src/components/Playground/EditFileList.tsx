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
    <ul
      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 "
      id="tabs-tab"
      role="tablist"
    >
      {list.map((f) => {
        const isActive = f.id === currentFile().id;
        return (
          <li
            class="nav-item"
            role="presentation"
            onClick={() => clickHandle(f)}
          >
            <span
              class={`
              nav-link
              block
              cursor-pointer
              font-medium
              text-xs
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              hover:text-[#2563eb] hover:border-[#2563eb]
              focus:border-transparent
              active
              ${isActive ? "text-[#2563eb] border-[#2563eb]" : ""}
            `}
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              {f.fileName}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
