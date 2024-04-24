import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";

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
    path: "/dashboard",
    element: <DashboardPage />
   },
   {
    path: "/cadastro",
    element: <CadastroPage />
   }
  ]
 }
]);

export default routers;
