const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

interface IProps {
  onPress: (letter: string) => void;
  activeLetters: string[];
  inactveLetters: string[];
}

export function Keyboard(props: IProps) {
  return (
    <div class="grid gap-2 grid-cols-keyboard ">
      {KEYS.map((key) => {
        const isActive = props.activeLetters.includes(key.toLowerCase());
        const isInactive = props.inactveLetters.includes(key.toLowerCase());
        console.log(key, isActive)
        return (
          <button
            disabled={isActive || isInactive}
            class={`text-[2.5rem] p-2 font-bold  cursor-pointer border-[3px] border-solid border-black bg-none focus:bg-blue-300 hover:bg-blue-300 ${
              isActive
                ? " bg-blue-400 text-white"
                : isInactive
                ? "opacity-30 text-black"
                : ""
            }`}
            onClick={() => props.onPress(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
