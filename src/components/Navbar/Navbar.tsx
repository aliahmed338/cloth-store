import AnnouncementBar from "./AnnouncementBar";
import { Logo } from "./Logo";
import NavItem from "./NavItem";
import DarkModeToggle from "./DarkModeToggle";
import { useContext, useEffect, useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { UserContext } from "../../context/UserToken";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null); // Initialize userName as null
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const user = useContext(UserContext);

  useEffect(() => {
    if (user?.userToken) {
      const decodedToken: any = jwtDecode(user.userToken);
      setUserName(decodedToken.name);
    } else {
      setUserName(null); // Reset userName when user logs out
    }
  }, [user?.userToken]);

  return (
    <nav className="dark:bg-[#222831]">
      <AnnouncementBar />
      <div className="flex items-center flex-wrap justify-between lg:px-24 px-12 py-3">
        <Logo />
        <HamburgerIcon isShow={isShow} setIsShow={setIsShow} />
        <NavItem isShow={isShow} />
        {userName && ( // Check if userName is truthy to display the greeting
          <p className="hidden md:block font-bold dark:text-white">
            Hello{" "}
            <span className="capitalize font-bold underline">{userName}</span>!
          </p>
        )}
        {user ? ( // Conditionally render login/logout text
          <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        ) : (
          <p className="font-bold dark:text-white">Login</p>
        )}
      </div>
      <hr className="bg-gray-900 h-[1px]" />
    </nav>
  );
};

export default Navbar;
