import { createSignal } from "solid-js";
import type { Accessor, } from "solid-js/types/reactive/signal";

export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [Accessor<T>, any] {
  const item = localStorage.getItem(key);
  const value = item ? JSON.parse(item) : initialValue;
  const [storedValue, setStoredValue] = createSignal<T>(value);

  const setValue = (value: any) => {
    try {
      // support function callback
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
