import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { store } = useContext(Context);

  // Si el usuario no está autenticado, redirige a la página de inicio de sesión
  if (!store.token) {
    return navigate('/LogIn');
  }
  return children;   // Si está autenticado, renderiza el componente hijo

};

export default PrivateRoute;


