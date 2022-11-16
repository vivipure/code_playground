import type { JSXElement } from "solid-js";

interface PropsInterface {
  title: string;
  children: JSXElement[] | JSXElement;
}
export function FormWrapper({ title, children }: PropsInterface) {
  return (
    <>
      <h2 class="text-center mb-8">{title}</h2>
      <div class="flex flex-col gap-4 ">{children}</div>
    </>
  );
}
