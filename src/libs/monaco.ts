import * as _monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

interface OptionsInterface {
  value: string;
  language: string | "javascript";
}

export const monaco = _monaco;

export type { editor } from "monaco-editor";

export default function createEditor(
  editorContainer: HTMLElement,
  options: Partial<OptionsInterface> = {}
) {
  const { value = "", language = "plaintext" } = options;

  return _monaco.editor.create(editorContainer, {
    value,
    language,
  });
}
