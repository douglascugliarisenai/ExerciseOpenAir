import { Grid } from "@mui/material";
import CadastroLocalForm from "../../components/molecules/CadastroLocalForm";
import styles from "./CadastroLocalPage.module.css";

function CadastroLocalPage() {
 return (
  <Grid className={styles.container}>
   <CadastroLocalForm />
  </Grid>
 );
}

export default CadastroLocalPage;
