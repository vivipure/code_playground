interface IProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (v: any) => void;
}

export function ImInput({
  label,
  value,
  type = "text",
  placeholder,
  onChange,
}: IProps) {
  return (
    <div>
      <label for="email" class="text-sm font-medium">
        {label}
      </label>

      <div class="relative mt-1">
        <input
        autocomplete="off"
          value={value}
          onChange={onChange}
          type={type}
          id="email"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
