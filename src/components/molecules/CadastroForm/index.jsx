import { Select, TextField, MenuItem, Grid, Button } from "@mui/material";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import "./index.css";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
function CadastroForm() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 function sendCadastro(formValue) {
  console.log(formValue);
 }

 return (
  <>
   <Grid className="container-cadastro">
    <Grid className="cadastro-form">
     <form>
      <Grid className="logoCadastro">
       <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
      </Grid>
      <Grid className="dadosPessoais" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        label="Nome"
        variant="outlined"
        placeholder="Nome"
        error={!!errors.nome}
        helperText={errors.nome?.message}
        {...register("nome", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />

       <Select
        error={!!errors.sexo}
        helperText={errors.sexo?.message}
        sx={{ width: "40rem", height: "40px" }}
        {...register("sexo", { required: true })}>
        <MenuItem value="Masculino">Masculino</MenuItem>
        <MenuItem value="Feminino">Feminino</MenuItem>
       </Select>

       <InputMask
        mask="999.999.999-99"
        disabled={false}
        maskChar=" "
        error={!!errors.cpf}
        helperText={errors.cpf?.message}
        {...register("cpf", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 11,
          message: "Este campo aceita no máximo 11 caracteres."
         }
        })}>
        {() => <TextField label="CPF" variant="outlined" placeholder="CPF" />}
       </InputMask>

       <InputMask
        mask="99/99/9999"
        disabled={false}
        maskChar=" "
        error={!!errors.nascimento}
        helperText={errors.nascimento?.message}
        {...register("nascimento", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 8,
          message: "Este campo aceita no máximo 8 caracteres."
         }
        })}>
        {() => (
         <TextField
          label="Data Nasc."
          variant="outlined"
          placeholder="Data de Nascimento"
         />
        )}
       </InputMask>

       <TextField
        type="text"
        placeholder="E-mail"
        label="E-mail"
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
        label="Senha"
        type="password"
        autoComplete="current-password"
        placeholder="Senha"
        error={!!errors.senha}
        helperText={errors.senha?.message}
        {...register("senha", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 60,
          message: "Este campo aceita no máximo 60 caracteres."
         }
        })}
       />
      </Grid>

      <Grid className="dadosEndereco">
       <InputMask
        mask="99999-999"
        disabled={false}
        maskChar=" "
        error={!!errors.cep}
        helperText={errors.cep?.message}
        {...register("cep", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 8,
          message: "Este campo aceita no máximo 8 caracteres."
         }
        })}>
        {() => (
         <TextField
          placeholder="CEP"
          label="CEP"
          variant="outlined"
          sx={{ width: "120px" }}
         />
        )}
       </InputMask>

       <TextField
        type="text"
        label="Logradouro"
        variant="outlined"
        placeholder="Logradouro"
        error={!!errors.logradouro}
        helperText={errors.logradouro?.message}
        {...register("logradouro", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        label="Município"
        variant="outlined"
        placeholder="Município"
        error={!!errors.municipio}
        helperText={errors.municipio?.message}
        {...register("municipio", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 60,
          message: "Este campo aceita no máximo 60 caracteres."
         }
        })}
       />

       <TextField
        sx={{ width: "120px" }}
        type="text"
        label="Estado"
        variant="outlined"
        placeholder="Estado"
        error={!!errors.estado}
        helperText={errors.estado?.message}
        {...register("estado", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 2,
          message: "Este campo aceita no máximo 2 caracteres."
         }
        })}
       />

       <TextField
        sx={{ width: "120px" }}
        type="text"
        label="Número"
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
        label="Complemento"
        variant="outlined"
        placeholder="Complemento"
        error={!!errors.municipio}
        helperText={errors.municipio?.message}
        {...register("complemento", {
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
        })}
       />
      </Grid>
      <Grid
       className="containerButtonCadastro"
       sx={{ marginTop: "20px", gap: "10px" }}>
       <Link to="/">
        <Button className="buttonVoltar" variant="contained" size="medium">
         Voltar
        </Button>
       </Link>
       <Button
        onClick={handleSubmit(sendCadastro)}
        className="buttonCadastrar"
        variant="contained"
        size="medium">
        Cadastrar
       </Button>
      </Grid>
     </form>
    </Grid>
   </Grid>
  </>
 );
}

CadastroForm.PropTypes = {
 dadosUsuario: PropTypes.exact({
  nome: PropTypes.string.isRequired,
  sexo: PropTypes.oneOf(["masculino", "feminino"]), //Enum do PropTypes
  cpf: PropTypes.string.isRequired,
  nascimento: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  senha: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  logradouro: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  municipio: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired
 })
};

export default CadastroForm;
