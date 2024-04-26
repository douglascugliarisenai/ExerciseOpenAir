import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroUsuarioPage from "../pages/CadastroUsuarioPage/CadastroUsuarioPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import CadastroLocalPage from "../pages/CadastroLocalPage/CadastroLocalPage";

const isAuthenticated = localStorage.getItem("usuarioLogado") !== null;

const PrivateRoute = ({ children }) => {
 console.log(isAuthenticated);
 return isAuthenticated ? children : <LoginPage />;
};

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <ErroPage />,
  children: [
   {
    path: "/",
    element: <LoginPage />
   },
   {
    path: "/cadastroUsuario",
    element: <CadastroUsuarioPage />
   },
   {
    path: "/dashboard",
    element: (
     <PrivateRoute>
      <DashboardPage />
     </PrivateRoute>
    )
   },
   {
    path: "/cadastroLocal",
    element: (
     <PrivateRoute>
      <CadastroLocalPage />
     </PrivateRoute>
    )
   }
  ]
 }
]);

export default routers;
