import { Paper, textFieldClasses, Typography } from "@mui/material";

export default function AboutPage() {



  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        REGISTRO DE USUARIO
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
                 
            <input text="Nombre" type="Nombre" />
      </Paper>
    </Paper>
  );
}