import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className = "",
  width = "w-fit",
  ...rest
}: Iprops) => {
  return (
    <button
      className={`px-12 py-3 bg-[#DB4444] dark:bg-white dark:text-[#222831] hover:bg-white hover:text-black hover:dark:bg-[#222831] hover:dark:text-white border duration-500 text-white rounded cursor-pointer active:scale-75 ${className} ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
