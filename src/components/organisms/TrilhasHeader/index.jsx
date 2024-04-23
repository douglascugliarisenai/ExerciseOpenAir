/* eslint-disable */
import "./style.css";
import { Link } from "react-router-dom";

function TrilhasHeader() {
 return (
  <div className="header">
   <div className="navbar">
    <span className="logo">
     <Link className="labelHome" to="/">
      <img src="/assets/icone.png" alt="Logo da oágina" />
     </Link>
    </span>

    <ul className="menu">
     <li>
      <Link to="/trilhas">Explorar Trilhas</Link>
     </li>
     <li>
      <Link to="/cadastro">Cadastrar Trilhas</Link>
     </li>
    </ul>
   </div>
  </div>
 );
}

export default TrilhasHeader;
