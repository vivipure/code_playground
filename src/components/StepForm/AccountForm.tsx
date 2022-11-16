import { FormWrapper } from "./FormWrapper";
import { ImInput } from "./ImInput";

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
interface AccountData {
  email: string;
  password: string;
}

export function AccountForm({ email, password, updateFields }: AccountProps) {
  return (
    <FormWrapper title="Account Creaion">
      <ImInput
        label="Email"
        placeholder="Enter email"
        value={email}
        onChange={(e) =>
          updateFields({
            email: e.target.value,
          })
        }
      />
      <ImInput
        label="Passord"
        placeholder="Enter password"
        value={email}
        onChange={(e) =>
          updateFields({
            password: e.target.value,
          })
        }
        type="password"
      />
    </FormWrapper>
  );
}
