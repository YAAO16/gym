import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {  FitnessCenter as FitnessCenterIcon, DirectionsRun as DirectionsRunIcon, Logout as LogoutIcon } from '@mui/icons-material';
import {  Button } from '@mui/material';

const Menu: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        backgroundColor: 'white', 
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: 'white', 
        },
      }}
    >
      <Typography variant="h5" align="center" color="black" sx={{ marginTop: '20px', marginBottom: '20px', fontFamily: 'Montserrat' }}>EliteFit</Typography>
      <List>
        <ListItem button component={Link} to="/musuario">
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
        <ListItem button component={Link} to="/mplanes">
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Planes" />
        </ListItem>
      </List>
      <Divider />
      <List sx={{ position: 'absolute', bottom: 0, width: '100%' }}> 
      <ListItem button>
        <ListItemIcon>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button href='/login' endIcon={<LogoutIcon style={{ color: 'red', transform: 'rotate(180deg)', marginRight: '5px' }} />}>
            <h1 style={{ color: 'red', fontSize: '15px' }}>Cerrar sesión</h1>
            </Button>
          </div>
        </ListItemIcon>
      </ListItem>
    </List>
    </Drawer>
  );
};

export default Menu;
