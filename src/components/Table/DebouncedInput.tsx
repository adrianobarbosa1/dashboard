"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const DebouncedInput: React.FC<Props> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = React.useState<number | string>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
          <FiSearch />
        </span>
      </div>
      <input
        {...props}
        value={value}
        onChange={handleInputChange}
        type="email"
        name="email"
        id="email"
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </label>
  );
};

export default DebouncedInput;
