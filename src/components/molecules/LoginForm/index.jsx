import { Grid } from "@mui/material";
import { TextField, Button } from "@mui/material";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuariosContext } from "../../../context/UsuarioContext";
import { useForm } from "react-hook-form";
function LoginForm() {
 const { login } = useContext(UsuariosContext);
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 const navigate = useNavigate();

 function sendLogin(formValue) {
  const validarLogin = login({
   ...formValue
  });

  if (validarLogin) {
   navigate("/dashboard");
   console.log("Login efetuado com sucesso");
  }
 }

 return (
  <>
   <Grid className="containerLogin" sx={{ flexDirection: "column" }}>
    <Grid className="login-form" sx={{ flexDirection: "column" }}>
     <form className="form">
      <Grid className="logo">
       <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
      </Grid>
      <TextField
       sx={{ marginBottom: "20px", width: "25em" }}
       className="email"
       id="outlined-basic"
       label="Email"
       type="email"
       variant="outlined"
       name="email"
       error={!!errors.email}
       helperText={errors.email?.message}
       {...register("email", {
        required: "Este campo é obrigatório.",
        maxLength: {
         value: 100,
         message: "Este campo aceita no máximo 100 caracteres."
        }
       })}
      />
      <TextField
       sx={{ marginBottom: "20px", width: "25em" }}
       className="password"
       id="outlined-password-input"
       label="Senha"
       type="password"
       autoComplete="current-password"
       name="senha"
       error={!!errors.senha}
       helperText={errors.senha?.message}
       {...register("senha", {
        required: "Este campo é obrigatório.",
        maxLength: {
         value: 100,
         message: "Este campo aceita no máximo 100 caracteres."
        }
       })}
      />
     </form>
     <Grid className="containerButtonLogin">
      <Link to="/cadastro">
       <Button className="buttonRegister" variant="contained" size="medium">
        Registre-se
       </Button>
      </Link>
      <Button
       onClick={handleSubmit(sendLogin)}
       className="buttonLogin"
       variant="contained"
       size="medium">
       Login
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default LoginForm;
