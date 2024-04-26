import React from 'react';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const contraseña: React.FC = () => {
  return (
    <Grid container style={{ height: '100vh', background: '#0c0c1b' }}>
      <Grid
        item xs={false} sm={4} md={7} sx={{background: '#0c0c1b',backgroundImage: 'url(https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',}}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#0c0c1b', color: '#FFA500' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={10} sm={8} md={6}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom style={{ fontSize: '55px', color: '#FFA500' }}>
                Recuperar Contraseña
              </Typography>
            </div>
            <form style={{ textAlign: 'center' }}>
              <Typography variant="subtitle1">Buscar usuario</Typography>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#FFA500' } }}
                InputProps={{ style: { borderColor: '#ccc', backgroundColor: '#f9f9f9' } }}
              />
              <Button type="submit" variant="contained" style={{ backgroundColor: '#FFA500', marginTop: '1rem', fontSize: '15px', color: '#0c0c1b' }} endIcon={<SendIcon />}>
                Ingresar
              </Button>
              <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" style={{ backgroundColor: '#FFA500', width: '48%', fontSize: '10px', color: '#0c0c1b' }} href='/login' startIcon={<ArrowBackIcon />}>
                Volver
              </Button>
            </div>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default contraseña;