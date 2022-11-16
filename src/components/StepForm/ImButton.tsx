import type { JSXElement } from "solid-js";

interface IProps {
  onclick?: (...args: any[]) => any;
  children: JSXElement;
}
export function ImButton({ onclick, children }: IProps) {
  return (
    <button
      type="submit"
      onClick={onclick}
      class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
    >
      {children}
    </button>
  );
}
