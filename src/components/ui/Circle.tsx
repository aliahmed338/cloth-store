import { ReactNode } from "react";

interface Iprops {
  icon: ReactNode; // ReactNode can accept any valid JSX element
  mainTitle: string;
  secondTitle: string;
}

const Circle = ({ icon, mainTitle, secondTitle }: Iprops) => {
  return (
    <div className="flex flex-col justify-center items-center w-65">
      <div className="flex items-center justify-center md:w-[85px] md:h-[85px] bg-gray-400 dark:bg-gray-300 rounded-full mb-3">
        <div className="text-white bg-black dark:text-black dark:bg-white rounded-full p-4">
          {icon}
        </div>
      </div>
      <div className="text-center">
        <h5 className="md:text-xl font-semibold md:font-bold">{mainTitle}</h5>
        <h5 className="md:text-md md:font-medium">{secondTitle}</h5>
      </div>
    </div>
  );
};

export default Circle;
