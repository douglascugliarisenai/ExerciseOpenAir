/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const UsuariosContext = createContext();
export const UsuariosContextProvider = ({ children }) => {
 const [usuarios, setUsuarios] = useState([]);

 useEffect(() => {
  getUsuarios();
 }, []);

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

 async function getUsuarios() {
  await fetch("http://localhost:3000/usuarios")
   .then((response) => response.json())
   .then((value) => setUsuarios(value))
   .catch((error) => console.log(error));
 }

 function cadastrarUsuario(dadosUsuario) {
  if (dadosUsuario.nome == "") {
   alert("O usuário precisa ter um nome!");
  }

  fetch("http://localhost:3000/usuarios", {
   method: "POST",
   body: JSON.stringify(dadosUsuario),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    alert("Usuário cadastrado com sucesso!");
    getUsuarios();
   })
   .catch(() => alert("Erro ao cadastrar usuário!"));
 }

 return (
  <UsuariosContext.Provider
   value={{ usuarios, setUsuarios, login, cadastrarUsuario }}>
   {children}
  </UsuariosContext.Provider>
 );
};
