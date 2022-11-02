const Head = (
  <div class="absolute w-[50px]  h-[50px]  rounded-[50%]  top-10 right-[-20px] border-black border-[10px] border-solid"></div>
);

const Body = (
  <div class="absolute w-[10px]  h-[70px] bg-black  top-[90px] right-[0] "></div>
);

const LeftArm = (
  <div class="w-[60px] h-[10px] bg-black absolute top-[120px] right-[5px] rotate-[30deg] origin-bottom-right"></div>
);
const RightArm = (
  <div class="w-[60px] h-[10px] bg-black absolute top-[120px] right-[-55px] rotate-[-30deg] origin-bottom-left"></div>
);
const LeftLeg = (
  <div class="w-[60px] h-[10px] bg-black absolute top-[150px] right-[5px] rotate-[-30deg] origin-bottom-right"></div>
);

const RightLeg = (
  <div class="w-[60px] h-[10px] bg-black absolute top-[150px] right-[-55px] rotate-[30deg] origin-bottom-left"></div>
);

const Man = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];

interface IProps {
  wrongCount: number;
}

export function HandDrawing(props: IProps) {
  return (
    <div class=" relative">
      <div class="absolute w-[10px] h-10 top-0 right-0 bg-black"></div>
      <div class="w-[140px] h-[10px] bg-black ml-[100px]"></div>
      <div class="w-[10px] h-[300px] bg-black ml-[100px]"></div>
      <div class="w-[200px] h-[10px] bg-black"></div>
      {Man.slice(0, props.wrongCount)}
    </div>
  );
}
