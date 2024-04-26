'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';

const ContactInfo = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Información de Contacto
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6" align="center" gutterBottom>
          Dirección
        </Typography>
        <Typography variant="body1" align="center">
          Av. Principal 16
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6" align="center" gutterBottom>
          Teléfono
        </Typography>
        <Typography variant="body1" align="center">
          +123 456 7890
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6" align="center" gutterBottom>
          Correo Electrónico
        </Typography>
        <Typography variant="body1" align="center">
          info@gymelite.com
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default function Page() {
  const [showContactInfo, setShowContactInfo] = React.useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <>
    <AppBar position="static" sx={{ background: '#212121' }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-menu"
          sx={{mr: 2,display: { xs: 'none', md: 'flex' },fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.3rem',color: '#FFFFFF', textDecoration: 'none',}}>
          GYM ELITE
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{mr: 2,display: { xs: 'flex', md: 'none' },flexGrow: 1,fontFamily: 'monospace',fontWeight: 700,letterSpacing: '.3rem', color: '#FFFFFF', textDecoration: 'none',}}
        ></Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Tooltip title="Ver Información de Contacto">
            <IconButton sx={{ my: 2, color: '#FFFFFF' }} onClick={toggleContactInfo}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Iniciar sesión">
            <IconButton sx={{ p: 0 }} href='./login'>
              <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/martialred/martialred1608/martialred160800020/61263273-cuenta-de-usuario-masculino-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg" />
              <Typography variant="body1" sx={{ color: '#FFFFFF', ml: 1 }}>Iniciar sesión</Typography>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
    {showContactInfo && <ContactInfo />}
  </>
  );
}
