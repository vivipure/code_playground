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
  const [gameState, setGameState] = createSignal(GAME_STATUS.RUNNING);
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

    if (gameState() !== GAME_STATUS.RUNNING) return;
    if (guessWord().includes(validLetter)) return;

    setGuessword([...guessWord(), validLetter]);

    if (wrongCount() === MAX_ERROR_COUNT) {
      setGameState(GAME_STATUS.FAILED);
      setTimeout(() => {
        resetGame();
      }, 5000);
      return;
    }
    if (rightGuessLetter().length === wordLetters.size) {
      setGameState(GAME_STATUS.SUCCESS);
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  };

  const wrongGuessLetter = () =>
    guessWord().filter((letter) => !word().includes(letter));
  const rightGuessLetter = () =>
    guessWord().filter((letter) => word().includes(letter));

  const wrongCount = () => wrongGuessLetter().length;

  function isFailed() {
    return gameState() === GAME_STATUS.FAILED;
  }
  function isSuccess() {
    return gameState() === GAME_STATUS.SUCCESS;
  }
  function resetGame() {
    setWord(getWord());
    setGuessword([]);
    setGameState(GAME_STATUS.RUNNING);
  }

  return (
    <div class="flex flex-col items-center">
      {isFailed() && <p>游戏失败!</p>}
      {isSuccess() && <p>游戏成功!</p>}
      <p class="my-4">猜词游戏</p>
      <HandDrawing wrongCount={wrongCount()} />
      <div class="my-4">
        <HangWord guessWord={guessWord()} word={word()} />
      </div>
      <div class="self-stretch mt-8">
        <Keyboard
          activeLetters={rightGuessLetter()}
          inactveLetters={wrongGuessLetter()}
          onPress={addGuessLetter}
        />
      </div>
    </div>
  );
}
