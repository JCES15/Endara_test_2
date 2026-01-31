import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a + b, [a, b]);

  return (
    
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Estadistica (pagina actual)
      </Typography>
    
      <button >Contar por Genero</button>
      <br></br>
      <br></br>
      <button>Porcentaje por estados</button>
      <br></br>
      <br></br>
      <button>Promedio de Edad</button>
     
    </Paper>
  );
}