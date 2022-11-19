import { createSignal, JSXElement } from "solid-js";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForms";


const INIT_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

interface UserDataInterface {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export default function StepForm() {
  const [userData, setUserData] = createSignal<UserDataInterface>(INIT_DATA);
  const steps: JSXElement[] = [
    <UserForm updateFields={updateFields} {...userData()} />,
    <AddressForm updateFields={updateFields} {...userData()} />,
    <AccountForm updateFields={updateFields} {...userData()} />,
  ];

  const { currentStepIndex, Step, isFirstStep, isLastStep, next, back } =
    useMultistepForm(steps);

  function updateFields(fileds: Partial<UserDataInterface>) {
    setUserData((prev) => {
      return { ...prev, ...fileds };
    });
  }

  const nextHandle = () => {
    if (isLastStep()) {
      console.log("log userdata", userData());
    } else {
      next();
    }
  };
  const sumbmitHandle = (e: SubmitEvent) => {
    e.preventDefault();
    if (isLastStep()) {
      console.log(111);
    } else {
      next();
    }
  };

  return (
    <div class="h-[100vh] flex items-center justify-center">
      <div class="relative bg-Zinc-300 border-solid border-[1px] border-gray  w-[600px] mx-auto p-8">
        <form onSubmit={sumbmitHandle}>
          <div class="absolute top-2 right-5">
            {currentStepIndex() + 1} / {steps.length}
          </div>
          {Step()}
          <div class=" mt-4 flex gap-2 justify-end">
            {isFirstStep() || <button onClick={back}>Back</button>}

              
            <button type="button" onclick={nextHandle}>
              {isLastStep() ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
