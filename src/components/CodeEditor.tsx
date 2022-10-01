import { createSignal } from "solid-js";

function fibonacci(num: number): number {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function Counter() {
  const [count, setCount] = createSignal(10);
  const fib = () => fibonacci(count());

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
      {Array.from({ length: 10 }, (v, k) => {
        return (
          <div>
            {" "}
            {k + 1}. {fib()} {fib()} {fib()} {fib()} {fib()}
          </div>
        );
      })}
    </>
  );
}
