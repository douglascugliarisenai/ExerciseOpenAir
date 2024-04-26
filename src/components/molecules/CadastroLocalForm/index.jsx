import {
 TextField,
 Grid,
 Button,
 FormLabel,
 FormControl,
 FormGroup,
 FormControlLabel,
 Checkbox
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LocalContext } from "../../../context/LocalContext";

function CadastroLocalForm() {
 const {
  register,
  handleSubmit,
  watch,
  setValue,
  formState: { errors }
 } = useForm();

 const { cadastrarLocal } = useContext(LocalContext);
 const navigate = useNavigate();
 const [cep, setCep] = useState("");

 const [atividades, setAtividades] = useState({
  caminhada: false,
  trilha: false,
  musculacao: false,
  natacao: false,
  surf: false
 });
 const { caminhada, trilha, musculacao, natacao, surf } = atividades;

 const consultaCep = (event) => {
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

 const getAtividadesSelecionadas = (event) => {
  setAtividades({
   ...atividades,
   [event.target.name]: event.target.checked
  });
 };

 function sendLocal(formValue) {
  cadastrarLocal({
   ...formValue,
   usuario: localStorage.getItem("usuarioLogado"),
   atividades: atividades
  });

  navigate("/dashboard");
 }

 return (
  <>
   <Grid className="containerCadastroLocal">
    <Grid className="cadastroFormLocal" sx={{ flexDirection: "column" }}>
     <form>
      <Grid className="logoCadastroLocal">
       <img src="/assets/logo-exercita365.png" alt="Logo Exercita365" />
      </Grid>
      <Grid className="gridNomeLocal" sx={{ flexDirection: "column" }}>
       <TextField
        type="text"
        variant="outlined"
        placeholder="Nome do Local"
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

       <TextField
        type="text"
        variant="outlined"
        placeholder="Descricao do Local"
        error={!!errors.descricao}
        helperText={errors.descricao?.message}
        {...register("descricao", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 100,
          message: "Este campo aceita no máximo 100 caracteres."
         }
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
        {...register("logradouro", setValue("logradouro", cep.logradouro), {
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
        placeholder="Município"
        error={!!errors.municipio}
        helperText={errors.municipio?.message}
        {...register("municipio", setValue("municipio", cep.localidade), {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 20,
          message: "Este campo aceita no máximo 20 caracteres."
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
        placeholder="Latitude"
        error={!!errors.latitude}
        helperText={errors.latitude?.message}
        {...register("latitude", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 10 caracteres."
         }
        })}
       />

       <TextField
        type="text"
        variant="outlined"
        placeholder="Longitude"
        error={!!errors.longitude}
        helperText={errors.longitude?.message}
        {...register("longitude", {
         required: "Este campo é obrigatório.",
         maxLength: {
          value: 10,
          message: "Este campo aceita no máximo 10 caracteres."
         }
        })}
       />
      </Grid>

      <Grid className="containerSelecoes" sx={{ flexDirection: "column" }}>
       <FormControl
        required
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard">
        <FormLabel component="legend">Atividades Esportivas</FormLabel>
        <FormGroup className="atividades">
         <FormControlLabel
          control={
           <Checkbox
            checked={caminhada}
            onChange={getAtividadesSelecionadas}
            name="caminhada"
           />
          }
          label="Caminhada"
         />
         <FormControlLabel
          control={
           <Checkbox
            checked={trilha}
            onChange={getAtividadesSelecionadas}
            name="trilha"
           />
          }
          label="Trilha"
         />
         <FormControlLabel
          control={
           <Checkbox
            checked={musculacao}
            onChange={getAtividadesSelecionadas}
            name="musculacao"
           />
          }
          label="Musculação"
         />
         <FormControlLabel
          control={
           <Checkbox
            checked={natacao}
            onChange={getAtividadesSelecionadas}
            name="natacao"
           />
          }
          label="Natação"
         />
         <FormControlLabel
          control={
           <Checkbox
            checked={surf}
            onChange={getAtividadesSelecionadas}
            name="surf"
           />
          }
          label="Suft"
         />
        </FormGroup>
       </FormControl>
      </Grid>
     </form>

     <Grid className="containerButtonCadastro">
      <Link to="/dashboard">
       <Button className="buttonDashBoard" variant="contained" size="medium">
        DashBoard
       </Button>
      </Link>
      <Button
       onClick={handleSubmit(sendLocal)}
       className="buttonCadastrar"
       variant="contained"
       size="medium">
       Cadastrar
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default CadastroLocalForm;
