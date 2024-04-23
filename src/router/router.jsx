import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErroPage from "../pages/ErroPage/ErroPage";

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
    path: "/cadastro",
    element: <CadastroPage />
   }
  ]
 }
]);

export default routers;
