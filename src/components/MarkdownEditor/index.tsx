import { marked } from "marked";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import Editor from "../Editor/Editor";
import "./index.css"

const INIT_VALUE = `# Marked in the browser\n\nRendered by **marked**.`;


export default function MarkdownEditor() {
  const [value, setValue] =  useLocalStorage('markdown', INIT_VALUE)
  const html = () => marked(value());

  const valueChangeHandle = (v: string) => {
    setValue(v)
  }

  return (
    <div class="h-[100vh] flex">
      <div class="flex-1">
        <Editor language="markdown" value={value()} onChange={valueChangeHandle} />
      </div>
      <div  class="flex-1 markdown-body pl-4" innerHTML={html()}></div>
    </div>
  );
}
