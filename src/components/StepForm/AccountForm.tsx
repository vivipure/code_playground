import { FormWrapper } from "./FormWrapper";

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
      <label>Email</label>
      <input
        class="text-input"
        value={email}
        onChange={(e) =>
          updateFields({
            email: e.currentTarget.value,
          })
        }
        type="text"
        autofocus
        required
      />
      <label>Passord</label>
      <input
        class="text-input"
        value={password}
        onChange={(e) =>
          updateFields({
            password: e.currentTarget.value,
          })
        }
        type="password"
        required
      />
    </FormWrapper>
  );
}
