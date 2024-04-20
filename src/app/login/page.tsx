//import {useState} from 'react';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
//import { validateLogin } from './LoginServer';


const Login: React.FC = () => {
 /* const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validateLogin({ username, password });
    if (errorMessage) {
      setError(errorMessage);
    } else {
      // Aquí podrías enviar los datos de inicio de sesión al servidor para su verificación
      console.log('Inicio de sesión exitoso');
      // Lógica para redireccionar al usuario o realizar otras acciones después del inicio de sesión exitoso
    }
  };*/
  return (
    <Grid container style={{ height: '100vh', background:'black'}}>
      <Grid item xs={false} sm={4} md={7} sx={{background:'black', backgroundImage: 'url(https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Grid item xs={12} sm={1} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: 'black' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '80%', color:'white' }}>
          <Grid item xs={10} sm={8} md={6}>
            <div style={{ textAlign: 'center'}}>
              <Typography variant="h4" gutterBottom style={{fontSize: '85px'}}>
                Login
              </Typography>
            </div>
            <form style={{ textAlign: 'center'}}>
              <Typography  variant="subtitle1">Usuario</Typography>
              <TextField /*value={username} onChange={(e) => setUsername(e.target.value)}*/ variant="outlined" fullWidth margin="normal" InputLabelProps={{ style: { color: '#333' } }} InputProps={{ style: { borderColor: '#ccc', backgroundColor: '#f9f9f9' } }} />
              <Typography variant="subtitle1">Contraseña</Typography>
              <TextField /*value={password} onChange={(e) => setPassword(e.target.value)}*/  type="password"variant="outlined"fullWidth margin="normal" InputLabelProps={{ style: { color: '#333' } }} InputProps={{ style: { borderColor: '#ccc', backgroundColor: '#f9f9f9' } }}/>
               <Button variant="contained" color="success" fullWidth sx={{ marginTop: '1rem', fontSize: '15px' }} href='/menu' endIcon={<SendIcon />}>
                Ingresar
              </Button>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <Button variant="contained" color="secondary" sx={{ width: '48%', fontSize: '10px' }} href='/registrar' endIcon={<AccountCircleIcon />}>
                  Regristrar
                </Button>
                <Button variant="contained" color="error" sx={{ width: '48%',fontSize: '10px' }} href='/contra' endIcon={<CloseIcon />}>
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


