import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "./context/UsuarioContext";

function App() {
 return (
  <UsuariosContextProvider>
   <Outlet />
  </UsuariosContextProvider>
 );
}

export default App;
