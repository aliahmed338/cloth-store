import { RxHamburgerMenu } from "react-icons/rx";

interface Iprops {
  setIsShow: (isShow: boolean) => void;
  isShow: boolean;
}

const HamburgerIcon = ({ setIsShow, isShow }: Iprops) => {
  return (
    <div
      className="lg:hidden dark:text-white focus:bg-gray-400 p-1 rounded focus:ring-2 focus:ring-gray-700"
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      <RxHamburgerMenu size={25} />
    </div>
  );
};

export default HamburgerIcon;
