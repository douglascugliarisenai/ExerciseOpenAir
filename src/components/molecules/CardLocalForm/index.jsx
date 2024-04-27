/* eslint-disable */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./index.css";
import { Grid } from "@mui/material";

function CardLocalForm({ dadosLocal }) {
 return (
  <Grid className="containerCard">
   <Card sx={{ display: "flex" }}>
    <Box sx={{ display: "flex", flexDirection: "column" }}>
     <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography component="div" variant="h5">
       {dadosLocal.nome}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {dadosLocal.descricao}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
       {dadosLocal.logradouro}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
       {dadosLocal.municipio} / {dadosLocal.estado}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
       {dadosLocal.latitude}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
       {dadosLocal.longitude}
      </Typography>
     </CardContent>
     <Box sx={{ display: "flex", alignItems: "center", pl: 4, pb: 1 }}>
      <Typography variant="subtitle1" color="text.secondary" component="div">
       Atividades:
      </Typography>
      <IconButton aria-label="atividades">Caminhada</IconButton>
      <IconButton aria-label="atividades">Surf</IconButton>
      <IconButton aria-label="atividades">Corrida</IconButton>
     </Box>
    </Box>
   </Card>
  </Grid>
 );
}

export default CardLocalForm;

//,, , Latitude, Longitede, atividades{}
