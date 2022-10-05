import { FormWrapper } from "./FormWrapper";

type AddressProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};
interface AddressData {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export function AddressForm({
    street,
    state,
    city,
    zip,
    updateFields
}: AddressProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input class="text-input" value={street} onChange={
        e => {updateFields({street: e.currentTarget.value})}
      } type="text" autofocus required />
      <label>City</label>
      <input class="text-input" value={city} onChange={
        e => {updateFields({street: e.currentTarget.value})}
      } type="text" required />
      <label>State</label>
      <input class="text-input" value={state} onChange={
        e => {updateFields({state: e.currentTarget.value})}
      } type="text" required />
      <label>Zip</label>
      <input class="text-input" value={zip} onChange={
        e => {updateFields({zip: e.currentTarget.value})}
      } type="text" required />
    </FormWrapper>
  );
}
