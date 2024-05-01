/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const LocalContext = createContext();
export const LocalContextProvider = ({ children }) => {
 const [locais, setLocais] = useState([]);

 useEffect(() => {
  getLocal();
 }, []);

 function getLocal() {
  fetch("http://localhost:3000/locais")
   .then((response) => response.json())
   .then((value) => setLocais(value))
   .catch((error) => console.log(error));
 }

 async function getLocalPorId(idConsulta) {
  const response = await fetch("http://localhost:3000/locais/" + idConsulta);
  const dados = await response.json();
  return dados;
 }

 function cadastrarLocal(dadosLocal) {
  if (dadosLocal.nome == "") {
   alert("O local precisa ter um nome!");
  }

  fetch("http://localhost:3000/locais", {
   method: "POST",
   body: JSON.stringify(dadosLocal),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    alert("Local cadastrado com sucesso!");
    getLocal();
   })
   .catch(() => alert("Erro ao cadastrar local!"));
 }

 function editarLocal(dadosLocal, id) {
  const localAtualizar = {
   ...dadosLocal,
   id: id
  };

  fetch("http://localhost:3000/locais/" + id, {
   method: "PUT",
   body: JSON.stringify(localAtualizar),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    alert("Local Editado com sucesso!");
    getLocal();
   })
   .catch(() => alert("Erro ao editar local!"));
 }

 function removerLocal(id) {
  fetch("http://localhost:3000/locais/" + id, {
   method: "DELETE"
  })
   .then(() => {
    alert("Local removido com sucesso!");
    getLocal();
   })
   .catch(() => alert("Erro ao remover Local!"));
 }

 return (
  <LocalContext.Provider
   value={{
    locais,
    setLocais,
    cadastrarLocal,
    getLocal,
    editarLocal,
    removerLocal,
    getLocalPorId
   }}>
   {children}
  </LocalContext.Provider>
 );
};
