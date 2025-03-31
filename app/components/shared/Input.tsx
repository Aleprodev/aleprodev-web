import React from "react";

interface Props  {
    type: 'text' | 'email' | 'password';
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export default function Input({ type, name, placeholder, value, onChange, label }: Props) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-400 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full form-control text-gray-600 p-4 rounded-md bg-white border border-gray-300"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />

    </div>
  );
}
