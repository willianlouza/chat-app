export type TextInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  register: any;
  errors: any;
  required?: boolean;
  requiredMessage?: string;
};

export default function TextInput({
  name,
  label = "",
  placeholder = "",
  defaultValue = "",
  register,
  errors,
  required = false,
  requiredMessage = "",
}: TextInputProps) {
  return (
    <div>
      <label className="block font-medium text-neutral-600" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, {
          required: {
            value: required,
            message: requiredMessage,
          },
        })}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        className={`${
          errors[name]
            ? "ring ring-red-400"
            : "focus:ring focus:ring-purple-400"
        } px-4 py-2 rounded-md outline-none bg-neutral-50 w-full`}
      />
      {errors[name] && (
        <p className="text-red-400">{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
