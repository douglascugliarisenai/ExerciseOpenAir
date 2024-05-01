/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const UsuariosContext = createContext();
export const UsuariosContextProvider = ({ children }) => {
 const [usuarios, setUsuarios] = useState([]);
 const [totalOnline, setTotalOnline] = useState(0);

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

      setTotalOnline(totalOnline + 1);
      atualizarStatusUsuario(usuario, usuario.id, true);
      console.log(totalOnline);
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
  const response = await fetch("http://localhost:3000/usuarios");
  const data = await response.json();

  setUsuarios(data);
  setTotalOnline(data.filter((usuario) => usuario.isOnline).length);
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

 async function logout(emailUsuarioLogado) {
  const response = await fetch("http://localhost:3000/usuarios");
  const dados = await response.json();

  dados.map((usuario) => {
   if (usuario.email == emailUsuarioLogado) {
    atualizarStatusUsuario(usuario, usuario.id, false);
    setTotalOnline((totalOnline) => totalOnline - 1);
    return;
   }
  });
 }

 return (
  <UsuariosContext.Provider
   value={{
    usuarios,
    setUsuarios,
    login,
    cadastrarUsuario,
    totalOnline,
    logout
   }}>
   {children}
  </UsuariosContext.Provider>
 );
};
