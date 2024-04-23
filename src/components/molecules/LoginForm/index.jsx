import { Grid } from "@mui/material";
import { TextField, Button } from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";
function LoginForm() {
 return (
  <>
   <Grid className="containerLogin" sx={{ flexDirection: "column" }}>
    <Grid className="login-form" sx={{ flexDirection: "column" }}>
     <Grid className="logo">
      <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
     </Grid>
     <TextField
      sx={{ marginBottom: "20px", width: "25em" }}
      className="email"
      id="outlined-basic"
      label="Email"
      variant="outlined"
      fullWidth
     />
     <TextField
      sx={{ marginBottom: "20px", width: "25em" }}
      className="password"
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
     />

     <Grid className="containerButtonLogin">
      <Link to="/cadastro">
       <Button className="button-register" variant="contained" size="medium">
        Registre-se
       </Button>
      </Link>
      <Button className="button-login" variant="contained" size="medium">
       Login
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default LoginForm;
