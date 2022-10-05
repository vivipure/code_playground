import { createSignal, JSXElement } from "solid-js";
import type { JSX } from "solid-js";

type FunctionElement<T> = (props: T) => JSXElement;
export function useMultistepForm(steps: JSXElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = createSignal(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i === steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i === 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    Step: () => steps[currentStepIndex()],
    isFirstStep: () => currentStepIndex() === 0,
    isLastStep: () => currentStepIndex() === steps.length - 1,
    next,
    back,
  };
}
