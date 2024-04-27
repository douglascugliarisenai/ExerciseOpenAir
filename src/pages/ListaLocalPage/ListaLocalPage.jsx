import { useContext } from "react";
import CardLocalForm from "../../components/molecules/CardLocalForm";
import { LocalContext } from "../../../src/context/LocalContext";
import { Grid } from "@mui/material";
import styles from "./ListaLocalPage.module.css";
import ExerciseOpenAirHeader from "../../components/organisms/ExerciseOpenAirHeader";

function ListaLocalPage() {
 const { locais } = useContext(LocalContext);

 return (
  <Grid sx={{ flexDirection: "column" }}>
   <ExerciseOpenAirHeader />
   <Grid className={styles.containerListaLocais}>
    {locais.map(
     (local, index) => (
      console.log(local), (<CardLocalForm dadosLocal={local} key={index} />)
     )
    )}
   </Grid>
  </Grid>
 );
}

export default ListaLocalPage;
