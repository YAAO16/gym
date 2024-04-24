import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import {  FitnessCenter as FitnessCenterIcon, DirectionsRun as DirectionsRunIcon, SportsHandball as SportsHandballIcon , Logout as LogoutIcon } from '@mui/icons-material';
import { red } from '@mui/material/colors';
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
    <Typography variant="h5" align="center" color="white" sx={{ marginTop: '20px', marginBottom: '20px', color:'black', background:'white', fontFamily:'Montserrat' }}>EliteFit</Typography>
        <List>
      <ListItem button component="a" href='../musuario'>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
      <ListItem button component="a" href='../mplanes'>
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
            <Button href='../login' endIcon={<LogoutIcon style={{ color: 'red', transform: 'rotate(180deg)', marginRight: '5px' }} />}>
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