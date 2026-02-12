import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePage() {


  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Bienvenido a Mi App!
      </Typography>

      <Typography color="text.secondary">
      Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.
      </Typography>
      
         

      <Paper>
            <Typography variant="h8" fontWeight={800} gutterBottom>
            Usuarios
            </Typography>
       </Paper>

       <Paper>
            <Typography variant="h8" fontWeight={800} gutterBottom>
            Cálculo de Sueldos
            </Typography>
       </Paper>

       <Paper >
            <Typography variant="h8" fontWeight={800} gutterBottom>
            Registro Rápido
            </Typography>
       </Paper>

       <Paper sx={{ p: 2,borderRadius: 3 }}>
            <Typography variant="h9" fontWeight={800} gutterBottom>
            Bienvenido al sistema de usuarios y nómina.
            </Typography>
       </Paper>

       <Paper sx={{ p: 2,borderRadius: 3 }}>
            <Typography variant="h9" fontWeight={800} gutterBottom>
            Recuerda completar todos los campos antes de calcular.
            </Typography>
       </Paper>


       
    </Paper>
  );
}