import { useContext } from "react";
import { UserContext } from "../../context/UserToken";
import { NAV_ITEMS } from "../data";
import { NavLink } from "react-router-dom";

interface INavItem {
  isShow: boolean;
}

const NavItem = ({ isShow }: INavItem) => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { userToken, setUserToken } = context;

  const logOut = (): void => {
    localStorage.removeItem("userToken");
    setUserToken(null);
  };

  return (
    <ul
      className={`${
        isShow && "hidden"
      } w-full bg-gray-400 rounded-lg block lg:space-x-10 mt-2 lg:mt-0 text-white dark:lg:text-white lg:text-black font-light  lg:flex lg:w-auto lg:bg-transparent `}
    >
      {userToken !== null ? (
        <>
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              className={`block px-4 py-2 z-10 rounded text-md hover:bg-gray-700 hover:text-white dark:hover:text-white active:scale-75`}
              to={item.to}
              key={index}
            >
              {item.text}
            </NavLink>
          ))}
          <NavLink
            to={"/signup"}
            className={`px-4 py-2 hover:bg-gray-700 dark:hover:text-white rounded hover:text-white active:scale-75`}
            onClick={() => {
              logOut();
            }}
          >
            Sign Out
          </NavLink>
        </>
      ) : (
        <div className="lg:flex">
          <NavLink
            className={`block px-4 py-2 z-10 hover:bg-gray-700 rounded text-md hover:text-white active:scale-75`}
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={`block px-4 py-2 z-10 hover:bg-gray-700 rounded text-md hover:text-white active:scale-75`}
            to={"/signup"}
          >
            Register
          </NavLink>
        </div>
      )}
    </ul>
  );
};

export default NavItem;
