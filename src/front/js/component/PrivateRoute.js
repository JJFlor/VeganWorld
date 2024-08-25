import React from 'react';
import { Navigate } from 'react-router-dom';

export function isAuthenticated() {
    // Aquí podrías verificar un token en localStorage o cookies
    return localStorage.getItem('token') !== null;
  }

const PrivateRoute = ({ children }) => {
    isAuthenticated();
    // Si el usuario está autenticado, renderiza los children, de lo contrario redirige a /login
    return isAuthenticated() ? children : <Navigate to="/LogIn" />;
  };
  
export default PrivateRoute;


