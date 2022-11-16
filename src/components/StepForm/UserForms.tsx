import { FormWrapper } from "./FormWrapper";
import { ImInput } from "./ImInput";

type UserProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
interface UserData {
  firstName: string;
  lastName: string;
  age: string;
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserProps) {
  return (
    <FormWrapper title="User Details">
      <ImInput
        value={firstName}
        placeholder="Enter your firstname"
        onChange={(e) =>
          updateFields({
            firstName: e.target.value,
          })
        }
        label="FirstName"
      />
      <ImInput
        value={lastName}
        placeholder="Enter your lastName"
        onChange={(e) =>
          updateFields({
            lastName: e.target.value,
          })
        }
        label="LastName"
      />
       <ImInput
        value={age}
        placeholder="Enter your age"
        onChange={(e) =>
          updateFields({
            age: e.target.value,
          })
        }
        label="Age"
      />

    </FormWrapper>
  );
}
