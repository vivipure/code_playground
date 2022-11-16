import { FormWrapper } from "./FormWrapper";
import { ImInput } from "./ImInput";

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
  updateFields,
}: AddressProps) {
  return (
    <FormWrapper title="Address">
      <ImInput
        label="Street"
        value={street}
        onChange={(e) => {
          updateFields({ street: e.target.value });
        }}
      />
      <ImInput
        label="City"
        value={city}
        onChange={(e) => {
          updateFields({ city: e.target.value });
        }}
      />
      <ImInput
        label="State"
        value={state}
        onChange={(e) => {
          updateFields({ state: e.target.value });
        }}
      />
      <ImInput
        label="Zip"
        value={zip}
        onChange={(e) => {
          updateFields({ zip: e.target.value });
        }}
      />
    </FormWrapper>
  );
}
