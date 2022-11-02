import { createSignal } from "solid-js";
import { HandDrawing } from "./HangDrawing";
import { HangWord } from "./HangWord";
import { Keyboard } from "./Keyboard";
import { useEvent } from "awesome-solid-hooks";
import words from "./wordList.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const GAME_STATUS = {
  RUNNING: 0,
  FAILED: -1,
  SUCCESS: 1,
};

const MAX_ERROR_COUNT = 6; // 头，身，四肢

export default function HangMan() {
  const [gameStatus, setGameStatus] = createSignal(GAME_STATUS.RUNNING);
  const [word, setWord] = createSignal(getWord());
  const [guessWord, setGuessword] = createSignal<string[]>([]);

  const wordLetters = new Set(word().split(""));

  useEvent(window, "keypress", (e: KeyboardEvent) => {
    if (!e.key.match(/^[a-zA-Z]$/)) return;
    e.preventDefault();
    const letter = e.key;
    addGuessLetter(letter);
  });

  const addGuessLetter = (letter: string) => {
    const validLetter = letter.toLowerCase();

    if (gameStatus() !== GAME_STATUS.RUNNING) return;
    if (guessWord().includes(validLetter)) return;

    setGuessword([...guessWord(), validLetter]);

    if (wrongCount() === MAX_ERROR_COUNT) {
      setGameStatus(GAME_STATUS.FAILED);

      return;
    }
    if (currentGuessLetter().length === wordLetters.size) {
      setGameStatus(GAME_STATUS.SUCCESS);
    }
  };

  const incorrectGuessLetters = () =>
    guessWord().filter((letter) => !word().includes(letter));
  const currentGuessLetter = () =>
    guessWord().filter((letter) => word().includes(letter));

  const wrongCount = () => incorrectGuessLetters().length;

  function isRuning() {
    return gameStatus() === GAME_STATUS.RUNNING;
  }
  function resetGame() {
    setWord(getWord());
    setGuessword([]);
    setGameStatus(GAME_STATUS.RUNNING);
  }

  return (
    <div class="flex flex-col items-center">
      {!isRuning() && (
        <button
          class="border-2 border-solid border-black p-2 hover:bg-black hover:text-white"
          onClick={resetGame}
        >
          重新开始
        </button>
      )}
      <p class="my-4">猜词游戏</p>
      <HandDrawing wrongCount={wrongCount()} />
      <div class="my-4">
        <HangWord
          guessWord={guessWord()}
          showWord={!isRuning()}
          word={word()}
        />
      </div>
      <div class="self-stretch mt-8">
        <Keyboard
          activeLetters={currentGuessLetter()}
          inactveLetters={incorrectGuessLetters()}
          onPress={addGuessLetter}
        />
      </div>
    </div>
  );
}
