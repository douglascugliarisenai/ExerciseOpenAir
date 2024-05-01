/* eslint-disable */
import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const UsuariosContext = createContext();
export const UsuariosContextProvider = ({ children }) => {
 const [usuarios, setUsuarios] = useState([]);

 useEffect(() => {
  getUsuarios();
 }, []);

 async function login(dadosUsuario) {
  try {
   const response = await fetch("http://localhost:3000/usuarios");
   const dados = await response.json();

   let usuarioExiste = false;

   dados.map((usuario) => {
    if (usuario.email == dadosUsuario.email) {
     usuarioExiste = true;
     if (usuario.senha == dadosUsuario.senha) {
      localStorage.setItem("usuarioLogado", dadosUsuario.email);

      window.location.href = "/dashboard";
      atualizarStatusUsuario(usuario, usuario.id, true);
      return;
     }

     alert("Senha incorreta!");
     return;
    }
   });

   if (!usuarioExiste) {
    alert("Não existe um usuário com esse email!");
   }
  } catch {}
 }

 async function getUsuarios() {
  await fetch("http://localhost:3000/usuarios")
   .then((response) => response.json())
   .then((value) => setUsuarios(value))
   .catch((error) => console.log(error));
 }

 function cadastrarUsuario(dadosUsuario) {
  const usuarioAdicionar = {
   ...dadosUsuario,
   isOnline: false
  };

  if (usuarioAdicionar.nome == "") {
   alert("O usuário precisa ter um nome!");
  }

  fetch("http://localhost:3000/usuarios", {
   method: "POST",
   body: JSON.stringify(usuarioAdicionar),
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

 function atualizarStatusUsuario(dadosUsuario, id, status) {
  const usuarioAtualizar = {
   ...dadosUsuario,
   isOnline: status
  };

  fetch("http://localhost:3000/usuarios/" + id, {
   method: "PUT",
   body: JSON.stringify(usuarioAtualizar),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    console.log("Usuário atualizado com sucesso!");

    getUsuarios();
   })
   .catch(() => console.log("Erro ao atualizar Usuário!"));
 }

 return (
  <UsuariosContext.Provider
   value={{ usuarios, setUsuarios, login, cadastrarUsuario }}>
   {children}
  </UsuariosContext.Provider>
 );
};
