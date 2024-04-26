/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const LocalContext = createContext();
export const LocalContextProvider = ({ children }) => {
 const [locais, setLocais] = useState([]);

 useEffect(() => {
  getLocal();
 }, []);

 async function getLocal() {
  await fetch("http://localhost:3000/locais")
   .then((response) => response.json())
   .then((value) => setLocais(value))
   .catch((error) => console.log(error));
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

 return (
  <LocalContext.Provider value={{ locais, setLocais, cadastrarLocal }}>
   {children}
  </LocalContext.Provider>
 );
};
