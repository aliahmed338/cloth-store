import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface Iprops {}

const Layout = ({}: Iprops) => {
  return (
    <>

      <Navbar />
      <div className="dark:bg-[#222831] bg-white dark:text-white text-black  px-10 lg:px-24">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
