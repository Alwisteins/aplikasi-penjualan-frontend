import { Label, TextInput } from "flowbite-react";

export default function InputField({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  label,
}) {
  return (
    <>
      <Label htmlFor={id} value={label} />
      <TextInput
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required
      />
    </>
  );
}
