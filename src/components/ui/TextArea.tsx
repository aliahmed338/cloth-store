import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ ...rest }: IProps) => {
  return (
    <textarea
      className="border-[1px] border-gray-300 shadow-md dark:focus:border-zinc-800 focus:outline-none focus:ring-1 dark:focus:ring-zinc-800 focus:border-white focus:ring-white rounded-lg px-3 py-3 text-md w-full bg-gray-300"
      rows={11}
      {...rest}
    />
  );
};

export default TextArea;
