import { marked } from "marked";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import Editor from "../Editor/Editor";
import "./index.css"
import hljs from "highlight.js";
import 'highlight.js/styles/monokai.css';
import { onMount } from "solid-js";

const INIT_VALUE = `# Marked in the browser\n\nRendered by **marked**.`;


export default function MarkdownEditor() {
  const [value, setValue] =  useLocalStorage('markdown', INIT_VALUE)
  const html = () => marked(value());
  let previewRef: HTMLDivElement| undefined
  const valueChangeHandle = (v: string) => {
    setValue(v)
    previewRef!.querySelectorAll('pre > code').forEach(codeItem => {
      // const lang = codeItem.classList.value
      hljs.highlightElement(codeItem as HTMLElement)
    })
  }
  onMount(() => {
    valueChangeHandle(value())
  })


  return (
    <div class="h-[100vh] flex">
      <div class="flex-1">
        <Editor language="markdown" value={value()} onChange={valueChangeHandle} />
      </div>
      <div  class="flex-1 markdown-body pl-4" ref={previewRef} innerHTML={html()}></div>
    </div>
  );
}
