import { InputHTMLAttributes } from "react";
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className="py-2 border-b-[1px] border-gray-400 dark:border-white dark:bg-[#222831] focus:outline-none transition text-md font-light"
      {...rest}
    />
  );
};

export default Input;
