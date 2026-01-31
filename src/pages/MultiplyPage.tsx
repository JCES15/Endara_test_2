import { useMemo, useState } from "react";
import { Paper, Typography } from "@mui/material";

export default function MultiplyPage() {
  

  

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Informacion
      </Typography>

      <Typography color="text.secondary">
       * API pública de personajes de Los Simpsons
       
       
      </Typography>

      <Typography color="text.secondary">
      
        * Imágenes servidas desde CDN estable por ID
        
      </Typography>

      <Typography color="text.secondary">
      
        *  Todo el sistema está en un solo archivo HTML
        
      </Typography>
    </Paper>
  );
}