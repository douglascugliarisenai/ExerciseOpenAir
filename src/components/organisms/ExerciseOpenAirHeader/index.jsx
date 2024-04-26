/* eslint-disable */
import "./style.css";
import { Link } from "react-router-dom";

function ExerciseOpenAirHeader() {
 return (
  <div className="header">
   <div className="navbar">
    <span className="logo">
     <Link className="labelHome" to="/">
      <img src="/assets/icone.png" alt="Logo da página" />
     </Link>
    </span>

    <ul className="menu">
     <li>
      <Link to="/trilhas">Cadastrar Local</Link>
     </li>
     <li>
      <Link to="/cadastro">Dashboard</Link>
     </li>
    </ul>
   </div>
  </div>
 );
}

export default ExerciseOpenAirHeader;
