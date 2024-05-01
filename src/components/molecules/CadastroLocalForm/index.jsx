/* eslint-disable */
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LocalContext } from "../../../context/LocalContext";
import useBuscaCep from "../../../hooks/useBuscaCep";
import useLatitudeLongitude from "../../../hooks/useLatitudeLongitude";

function CadastroLocalForm() {
 const {
  register,
  handleSubmit,
  watch,
  setValue,
  formState: { errors }
 } = useForm();

 const { cadastrarLocal, getLocalPorId, editarLocal } =
  useContext(LocalContext);
 const navigate = useNavigate();
 const [cep, setCep] = useState("");
 const [latitude, setLatitude] = useState("");
 const [longitude, setLongitude] = useState("");
 const { id } = useParams();
 const [label, setLabel] = useState("Cadastrar");

 const [atividades, setAtividades] = useState({
  caminhada: false,
  trilha: false,
  musculacao: false,
  natacao: false,
  surf: false
 });
 const { caminhada, trilha, musculacao, natacao, surf } = atividades;

 const consultaCep = async (event) => {
  if (event.key === "Enter" || event.key === "Tab") {
   event.preventDefault();
   const dadosCep = await useBuscaCep(watch("cep"));
   setCep(dadosCep);

   const dadosLatLong = await useLatitudeLongitude(watch("cep"));
   setLatitude(dadosLatLong.lat);
   setLongitude(dadosLatLong.lng);
   carregarDadosEndereco();
  }
 };

 const getAtividadesSelecionadas = (event) => {
  setAtividades({
   ...atividades,
   [event.target.name]: event.target.checked
  });
 };

 function sendLocal(formValue) {
  if (id != "" && id !== undefined) {
   editarLocal(
    {
     ...formValue,
     usuario: localStorage.getItem("usuarioLogado"),
     atividades: atividades
    },
    id
   );
  } else {
   cadastrarLocal({
    ...formValue,
    usuario: localStorage.getItem("usuarioLogado"),
    atividades: atividades
   });
  }

  navigate("/dashboard");
 }

 function carregarDadosEndereco() {
  setValue("logradouro", cep.logradouro);
  setValue("municipio", cep.localidade);
  setValue("estado", cep.uf);
  setValue("latitude", latitude);
  setValue("longitude", longitude);
 }

 function carregarDadosEdicao(idSelecionado) {
  getLocalPorId(idSelecionado).then((response) => {
   setValue("nomeLocal", response.nomeLocal);
   setValue("descricao", response.descricao);
   setValue("cep", response.cep);
   setValue("logradouro", response.logradouro);
   setValue("municipio", response.municipio);
   setValue("estado", response.estado);
   setValue("latitude", response.latitude);
   setValue("longitude", response.longitude);
   setAtividades(response.atividades);
  });
 }

 useEffect(() => {
  if (id != "" && id !== undefined) {
   carregarDadosEdicao(id);
   setLabel("Editar");
  }
 }, [id]);

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
        error={!!errors.nomeLocal}
        helperText={errors.nomeLocal?.message}
        sx={{ height: "1rem" }}
        {...register("nomeLocal", {
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
        {...register("logradouro", {
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
        {...register("municipio", {
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
        {...register("estado", {
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
       {label}
      </Button>
     </Grid>
    </Grid>
   </Grid>
  </>
 );
}

export default CadastroLocalForm;
