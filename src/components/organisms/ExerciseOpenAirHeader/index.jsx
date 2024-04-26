/* eslint-disable */
import { Button, Menu, MenuItem } from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ExerciseOpenAirHeader() {
 const [anchorEl, setAnchorEl] = useState(null);
 const navigate = useNavigate();

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleLogout = () => {
  localStorage.removeItem("usuarioLogado");
  navigate("/");
  setAnchorEl(null);
 };

 const userName = "Nome do Usuário"; // Substitua pelo nome do usuário
 return (
  <div className="header">
   <div className="navbar">
    <span className="logoHeader">
     <Link className="labelHome" to="/">
      <img src="/assets/logo-exercita365.png" alt="Logo da página" />
     </Link>
    </span>
    <ul className="menuHeader">
     <li>
      <Link to="/cadastroLocal">Cadastrar Local</Link>
     </li>

     <li>
      <Button
       aria-controls="simple-menu"
       aria-haspopup="true"
       onClick={handleClick}
       className="sair">
       <img src="/assets/icone-usuario.png" alt="" />
      </Button>
      <Menu
       id="simple-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}>
       <MenuItem disabled>{localStorage.getItem("usuarioLogado")}</MenuItem>
       <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
     </li>
    </ul>
   </div>
  </div>
 );
}

export default ExerciseOpenAirHeader;
