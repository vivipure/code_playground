import { createEffect } from "solid-js";

interface IProps {
  guessWord: string[];
  word: string;
}

export function HangWord(props: IProps) {
  return (
    <div class="flex gap-4 text-[50px] font-bold uppercase">
      {props.word.split("").map((letter) => (
        <div class="w-[1em] border-b-8 border-solid border-black">
          <span
            style={{
              visibility: props.guessWord.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}
