import React, { useContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/log_in.css";
import LoadingSpinner from "../component/LoadingSpinner";


const PrivateRoute = ({ children }) => {
  const { store } = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      // verificar si token de autenticación
      const tokenIsValid = await Promise.resolve(store.token);
      if (!tokenIsValid) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };
    checkAuthentication();
  }, [store.token]);
  // Muestra un estado de carga mientras verifica la autenticación
  if (isAuthenticated === null) return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        " "
      )}
    </div>
  );
  if (!isAuthenticated) {
    alert(":sonrisa_burlona: You need to be logged in to see this page.");
    return <Navigate to="/LogIn" />;
  }
  return children;
};
export default PrivateRoute;


