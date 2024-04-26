'use client';
import * as React from 'react';
import { useState } from 'react';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { validateLogin } from './LoginServer';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validateLogin({ username, password });
    if (errorMessage) {
      setError(errorMessage);
    } else {
      console.log('Inicio de sesión exitoso');
       window.location.href = '/menu';
    }
  };

  return (
    <Grid container style={{ height: '100vh', background: '#0c0c1b' }}>
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{background: '#0c0c1b',backgroundImage: 'url(https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',}}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#0c0c1b', color: '#FFA500' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={10} sm={8} md={6}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom style={{ fontSize: '85px', color: '#FFA500' }}>
              Login
            </Typography>
          </div>
          <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
            <Typography variant="subtitle1">Usuario</Typography>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#333' } }}
              InputProps={{ style: { borderColor: '#ccc', backgroundColor: '#f9f9f9' } }}
            />
            <Typography variant="subtitle1">Contraseña</Typography>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#333' } }}
              InputProps={{ style: { borderColor: '#ccc', backgroundColor: '#f9f9f9' } }}
            />
            {error && <Typography variant="body2" color="white" gutterBottom>{error}</Typography>}
            <Button type="submit" variant="contained" style={{ backgroundColor: '#FFA500', marginTop: '1rem', fontSize: '15px', color: '#0c0c1b' }} fullWidth endIcon={<SendIcon />}>
              Ingresar
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
              <Button variant="contained" style={{ backgroundColor: '#FFA500', width: '48%', fontSize: '10px', color: '#0c0c1b' }} href="/registrar" endIcon={<AccountCircleIcon />}>
                Registrar
              </Button>
              <Button variant="contained" style={{ backgroundColor: '#FFA500', width: '48%', fontSize: '10px', color: '#0c0c1b' }} href="/contra" endIcon={<CloseIcon />}>
                Recuperar contraseña
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
};

export default Login;