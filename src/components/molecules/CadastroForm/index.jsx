import { Select, TextField, MenuItem, Grid, Button } from "@mui/material";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import "./index.css";
import { Link } from "react-router-dom";
function CadastroForm() {
 const {
  register,
  handleSubmit
  //   formState: { errors }
 } = useForm();

 function sendCadastro(formValue) {
  console.log(formValue);
 }

 return (
  <>
   <Grid className="container-cadastro">
    <Grid className="cadastro-form">
     <form onSubmit={handleSubmit(sendCadastro)}>
      <Grid className="logoCadastro">
       <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
      </Grid>
      <Grid className="dadosPessoais" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        placeholder="Nome"
        {...register("Nome", { required: true, maxLength: 100 })}
       />
       <Select
        sx={{ width: "625px", height: "35px", paddingLeft: "10px" }}
        {...register("Sexo", { required: true })}>
        <MenuItem value="Masculino">Masculino</MenuItem>
        <MenuItem value="Feminino">Feminino</MenuItem>
       </Select>
       <InputMask
        mask="999.999.999-99"
        disabled={false}
        maskChar=" "
        {...register("CPF", {
         required: true,
         maxLength: 11
        })}>
        {() => <TextField placeholder="CPF" />}
       </InputMask>
       <InputMask
        mask="99/99/9999"
        disabled={false}
        maskChar=" "
        {...register("nascimento", {
         required: true,
         maxLength: 8
        })}>
        {() => <TextField placeholder="Data de Nascimento" />}
       </InputMask>
       <TextField
        type="text"
        placeholder="E-mail"
        {...register("E-mail", { required: true, maxLength: 100 })}
       />
       <TextField
        type="text"
        placeholder="Senha"
        {...register("Senha", { required: true, maxLength: 60 })}
       />
      </Grid>
      <Grid className="dadosEndereco">
       <InputMask
        mask="99999-999"
        disabled={false}
        maskChar=" "
        {...register("cep", {
         required: true,
         maxLength: 8
        })}>
        {() => (
         <TextField
          placeholder="CEP"
          sx={{ width: "200px", paddingLeft: "3.2em" }}
         />
        )}
       </InputMask>
       <TextField
        type="text"
        placeholder="Logradouro"
        {...register("Logradouro", {})}
       />
       <TextField
        sx={{ width: "200px", paddingLeft: "3.2em" }}
        type="text"
        placeholder="Número"
        {...register("Número", {})}
       />
       <TextField
        type="text"
        placeholder="Município"
        {...register("Município", {})}
       />
       <TextField
        sx={{ width: "200px", paddingLeft: "3.2em" }}
        type="text"
        placeholder="Estado"
        {...register("Estado", {})}
       />
      </Grid>
      <Grid
       className="containerButtonCadastro"
       sx={{ marginBottom: "25px", gap: "10px" }}>
       <Link to="/">
        <Button className="buttonVoltar" variant="contained" size="medium">
         Voltar
        </Button>
       </Link>
       <Button className="buttonCadastrar" variant="contained" size="medium">
        Cadastrar
       </Button>
      </Grid>
     </form>
    </Grid>
   </Grid>
  </>
 );
}

export default CadastroForm;
