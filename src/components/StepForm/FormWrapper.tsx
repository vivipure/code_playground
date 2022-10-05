import type { JSXElement } from "solid-js";

interface PropsInterface {
  title: string;
  children: JSXElement[];
}
export function FormWrapper({ title, children }: PropsInterface) {
  return (
    <>
      <h2 class=" text-center mb-8">{title}</h2>
      <div class=" grid gap-x-2 gap-y-4 justify-start grid-cols-form-item">{children}</div>
    </>
  );
}
