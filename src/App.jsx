import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "./context/UsuarioContext";
import { LocalContextProvider } from "./context/LocalContext";

function App() {
 return (
  <UsuariosContextProvider>
   <LocalContextProvider>
    <Outlet />
   </LocalContextProvider>
  </UsuariosContextProvider>
 );
}

export default App;
