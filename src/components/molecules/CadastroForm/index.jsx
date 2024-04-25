import { Select, TextField, MenuItem, Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UsuariosContext } from "../../../context/UsuarioContext";
// import * as PropTypes from "prop-types";
function CadastroForm() {
 const {
  register,
  handleSubmit,
  watch,
  setValue,
  formState: { errors }
 } = useForm();

 const { addUsuario } = useContext(UsuariosContext);
 const [cep, setCep] = useState("");
 const navigate = useNavigate();

 function sendCadastro(formValue) {
  addUsuario(formValue);
  navigate("/");
 }

 const consultaCep = (event) => {
  console.log(watch("cep"));

  if (event.key === "Enter" || event.key === "Tab") {
   event.preventDefault();
   fetch(`https://viacep.com.br/ws/${watch("cep")}/json/`)
    .then((response) => response.json())
    .then((data) => {
     setCep(data);
    })
    .catch((error) => {
     console.error("Erro:", error);
    });
  }
 };

 return (
  <>
   <Grid className="container-cadastro">
    <Grid className="cadastro-form" sx={{ flexDirection: "column" }}>
     <form>
      <Grid className="logoCadastro">
       <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
      </Grid>
      <Grid className="gridNome" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        variant="outlined"
        placeholder="Nome"
        error={!!errors.nome}
        helperText={errors.nome?.message}
        sx={{ height: "1rem" }}
        {...register("nome", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
      </Grid>
      <Grid className="dadosComplementares">
       <Select
        error={!!errors.sexo}
        helperText={errors.sexo?.message}
        {...register("sexo", { required: true })}>
        <MenuItem value="Masculino">Masculino</MenuItem>
        <MenuItem value="Feminino">Feminino</MenuItem>
       </Select>

       <TextField
        placeholder="CPF"
        variant="outlined"
        error={!!errors.cpf}
        helperText={errors.cpf?.message}
        {...register("cpf", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 11,
          message: "Este campo aceita no máximo 11 caracteres."
         }
        })}
       />

       <TextField
        placeholder="Data de Nascimento"
        type="date"
        variant="outlined"
        error={!!errors.nascimento}
        helperText={errors.nascimento?.message}
        {...register("nascimento", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 8 caracteres."
         }
        })}
       />

       <TextField
        type="email"
        placeholder="E-mail"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 60,
          message: "Este campo aceita no máximo 60 caracteres."
         }
        })}
       />
       <TextField
        type="password"
        autoComplete="current-password"
        placeholder="Senha"
        error={!!errors.senha}
        helperText={errors.senha?.message}
        {...register("senha", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 20,
          message: "Este campo aceita no máximo 20 caracteres."
         }
        })}
       />

       <TextField
        type="password"
        autoComplete="current-password"
        placeholder="Confirma Senha"
        error={!!errors.confirmaSenha}
        helperText={errors.confirmaSenha?.message}
        {...register("confirmaSenha", {
         required: "Confirme a senha.",
         validate: (value) =>
          value === watch("senha") || "As senhas não coincidem"
        })}
       />
      </Grid>

      <Grid className="dadosEndereco">
       <TextField
        placeholder="CEP"
        variant="outlined"
        error={!!errors.cep}
        helperText={errors.cep?.message}
        onKeyDown={consultaCep}
        {...register("cep", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 8,
          message: "Este campo aceita no máximo 8 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Logradouro"
        error={!!errors.logradouro}
        helperText={errors.logradouro?.message}
        {...register("cep", setValue("logradouro", cep.logradouro), {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 30,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Município"
        error={!!errors.municipio}
        helperText={errors.municipio?.message}
        {...register("municipio", setValue("municipio", cep.localidade), {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 30,
          message: "Este campo aceita no máximo 30 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Estado"
        error={!!errors.estado}
        helperText={errors.estado?.message}
        {...register("estado", setValue("estado", cep.uf), {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 2,
          message: "Este campo aceita no máximo 2 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Número"
        error={!!errors.numero}
        helperText={errors.numero?.message}
        {...register("numero", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 5,
          message: "Este campo aceita no máximo 5 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Complemento"
        error={!!errors.complemento}
        helperText={errors.complemento?.message}
        {...register("complemento", {
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
      </Grid>
     </form>

     <Grid className="containerButtonCadastro" sx={{ flexDirection: "column" }}>
      <Button
       onClick={handleSubmit(sendCadastro)}
       className="buttonCadastrar"
       variant="contained"
       size="medium">
       Cadastrar
      </Button>
      <Link to="/">
       <Button className="buttonVoltar" variant="contained" size="medium">
        Já Possui Cadastro?
       </Button>
      </Link>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

// CadastroForm.PropTypes = {
//  dadosUsuario: PropTypes.exact({
//   nome: PropTypes.string.isRequired,
//   sexo: PropTypes.oneOf(["masculino", "feminino"]), //Enum do PropTypes
//   cpf: PropTypes.string.isRequired,
//   nascimento: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   senha: PropTypes.string.isRequired,
//   cep: PropTypes.string.isRequired,
//   logradouro: PropTypes.string.isRequired,
//   numero: PropTypes.number.isRequired,
//   municipio: PropTypes.string.isRequired,
//   estado: PropTypes.string.isRequired
//  })
// };

export default CadastroForm;
