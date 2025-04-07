import React from "react";

interface Props {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
}

export default function TextArea({
  name,
  placeholder,
  value,
  onChange,
  label,
}: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-400 block">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="w-full form-control text-gray-600 p-4 rounded-md bg-white border border-gray-300"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
      />
    </div>
  );
}
