import { FormWrapper } from "./FormWrapper";

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
      <label>First Name</label>
      <input
        class="text-input"
        value={firstName}
        onChange={(e) =>
          updateFields({
            firstName: e.currentTarget.value,
          })
        }
        type="text"
        required
        autofocus
      />
      <label>Last Name</label>
      <input
        class="text-input"
        value={lastName}
        onChange={(e) =>
          updateFields({
            lastName: e.currentTarget.value,
          })
        }
        type="text"
        required
      />
      <label>Age</label>
      <input
        class="text-input"
        value={age}
        onChange={(e) =>
          updateFields({
            age: e.currentTarget.value,
          })
        }
        type="number"
        required
        min={1}
      />
    </FormWrapper>
  );
}
