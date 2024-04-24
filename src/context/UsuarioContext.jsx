/* eslint-disable */
import { createContext, useState, useEffect } from "react";
import getJson from "../hooks/getJson";

export const UsuariosContext = createContext();
export const UsuariosContextProvider = ({ children }) => {
 const [dados, isLoading] = getJson("/data/usuarios.json");
 const [usuarios, setUsuario] = useState(null);

 function login(dadosUsuario) {
  for (let usuario of usuarios) {
   if (
    usuario.email === dadosUsuario.email &&
    usuario.senha === dadosUsuario.senha
   ) {
    return true;
   }
  }
  return false;
 }

 useEffect(() => {
  console.log(dados);
  if (!!dados && !isLoading) {
   setUsuario(dados.usuarios);
  }
 }, [dados]);

 return (
  <UsuariosContext.Provider value={{ usuarios, setUsuario, isLoading, login }}>
   {children}
  </UsuariosContext.Provider>
 );
};
