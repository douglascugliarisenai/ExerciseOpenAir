/* eslint-disable */
import { createContext, useState, useEffect } from "react";
import useUsuarios from "../hooks/useUsuarios";

export const UsuariosContext = createContext();
export const UsuariosContextProvider = ({ children }) => {
 const [dados, isLoading] = useUsuarios("/data/usuarios.json");
 const [usuarios, setUsuario] = useState([]);

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

 function addUsuario(dadosUsuario) {
  setUsuario((u) => [...u, dadosUsuario]);
 }

 useEffect(() => {
  if (!!dados && !isLoading) {
   setUsuario(dados.usuarios);
  }
 }, [dados]);

 return (
  <UsuariosContext.Provider
   value={{ usuarios, setUsuario, isLoading, login, addUsuario }}>
   {children}
  </UsuariosContext.Provider>
 );
};
