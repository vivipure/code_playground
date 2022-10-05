import * as _monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

import { emmetCSS, emmetHTML } from "emmet-monaco-es";

// https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: any, label: string) {
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

import type { editor } from "monaco-editor";
export type { editor } from "monaco-editor";

export function createEditor(
  editorContainer: HTMLElement,
  options: Partial<OptionsInterface> = {}
) {
  const { value = "", language = "plaintext" } = options;

  const instance = _monaco.editor.create(editorContainer, {
    value,
    language,
    scrollBeyondLastLine: false,
  });
  emmetHTML(_monaco);
  emmetCSS(_monaco);

  return instance;
}

export function createDiffEditor(editorContainer: HTMLElement): DiffEdiotr {
  const editor = monaco.editor.createDiffEditor(editorContainer);
  return Object.assign(editor, {
    setDiff(prev: string, current: string, lang: string) {
      editor.setModel({
        original: monaco.editor.createModel(prev, lang),
        modified: monaco.editor.createModel(current, lang),
      });
    },
  });
}

export type DiffEdiotr = editor.IDiffEditor & {
  setDiff(prev: string, current: string, lang: string): void;
};
