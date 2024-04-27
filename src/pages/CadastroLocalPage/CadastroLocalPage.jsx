import { Grid } from "@mui/material";
import ExerciseOpenAirHeader from "../../components/organisms/ExerciseOpenAirHeader";
import CadastroLocalForm from "../../components/molecules/CadastroLocalForm";
import styles from "./CadastroLocalPage.module.css";

function CadastroLocalPage() {
 return (
  <>
   <ExerciseOpenAirHeader />
   <Grid className={styles.container}>
    <CadastroLocalForm />
   </Grid>
  </>
 );
}

export default CadastroLocalPage;
