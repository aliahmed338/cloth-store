import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

// Define the shape of the context state and the type of the updater function
interface UserContextType {
  userToken: string | null;
  loading?: boolean;
  setUserToken: Dispatch<SetStateAction<string | null>>;
}

// Create the context with an undefined initial value
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// Define the provider's props
interface UserContextProviderProps {
  children: ReactNode;
  loading?: boolean;
}

// Create the provider component
const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setUserToken(token);
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ userToken, setUserToken, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
