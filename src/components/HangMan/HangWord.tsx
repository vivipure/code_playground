import { createEffect } from "solid-js";

interface IProps {
  guessWord: string[];
  word: string;
  showWord: boolean
}

export function HangWord(props: IProps) {
  return (
    <div class="flex gap-4 text-[50px] font-bold uppercase">
      {props.word.split("").map((letter) => (
        <div class="w-[1em] border-b-8 border-solid border-black">
          <span
            style={{
              visibility: (props.showWord ||  props.guessWord.includes(letter))
                ? "visible"
                : "hidden",
            }}
            class={
              `${props.guessWord.includes(letter) ? '':'text-red-500'}`
            }
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}
