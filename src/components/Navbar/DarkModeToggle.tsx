import { FaRegMoon, FaRegSun } from "react-icons/fa";

interface IDarkModeToggle {
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({ toggleDarkMode }: IDarkModeToggle) => (
  <div
    onClick={toggleDarkMode}
    className="fixed bottom-4 right-4 z-10 text-gray-700 dark:text-black w-10 h-10 flex justify-center items-center lg:static cursor-pointer"
  >
    <FaRegMoon size={25} className="dark:hidden text-black" />
    <FaRegSun size={25} className="hidden dark:block text-white" />
  </div>
);

export default DarkModeToggle;
