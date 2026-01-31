import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Personajes de los Simpsons 
      </Typography>

      <Typography color="text.secondary">
        Listado dinamico usando API publica + CND estable
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Ejemplo ideal para practicar flesh y renderizado dinamico
      </Typography>
    </Paper>
  );
}