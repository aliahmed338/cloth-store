import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserToken';

interface Iprops {
  redirectPath: string;
  children: ReactNode;
  inverse?: boolean;
  data?: unknown;
}

const ProtectedRoutes = ({
  redirectPath,
  children,
  inverse = false,
  data,
}: Iprops) => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      'ProtectedRoutes must be used within a UserContextProvider'
    );
  }

  const { userToken, loading } = context;

  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  if ((inverse && userToken) || (!inverse && !userToken)) {
    return <Navigate to={redirectPath} state={data} />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
