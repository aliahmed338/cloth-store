import "./App.css";

import { UserContext } from "../src/context/UserToken";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import { Offline, Online } from "react-detect-offline";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { setUserToken } = context;

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <Offline>
        <div className=" fixed py-2 px-4 rounded-md bottom-2 left-2 border-2 border-black z-10 dark:border-white dark:text-white">
          offline network !{" "}
        </div>
      </Offline>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
