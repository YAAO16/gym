import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Close as CloseIcon } from '@mui/icons-material';

export default function Planes() {
  const tableWidth = '60%'; 
  const tableHeight = 'auto'; 

  const gymPlans = [
    { name: 'Plan Básico', price: 29.99, features: ['Acceso al gimnasio', 'Clases grupales limitadas', 'Sin entrenador personal'], image: 'https://www.bailonga.com/pics/2023/02/como-crear-un-plan-de-entrenamiento-para-realizar-en-casa.png' },
    { name: 'Plan Estándar', price: 49.99, features: ['Acceso al gimnasio', 'Clases grupales ilimitadas', '1 sesión de entrenador personal por semana'], image: 'https://www.cambiatufisico.com/wp-content/uploads/rutina-gimnasio-anual3.jpg' },
    { name: 'Plan Premium', price: 79.99, features: ['Acceso 24/7 al gimnasio', 'Clases grupales ilimitadas', 'Entrenador personal dedicado'], image: 'https://tengoagujetas.com/wp-content/uploads/2019/04/peso-muerto-fuerza.jpg' },
  ];
  return (
    <>
            <Box display="flex" justifyContent="flex-end" alignItems="flex-start" mt={2} mr={2}>
                <Button endIcon={<CloseIcon />} variant="contained" style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }} href='./menu'></Button>
            </Box>
            <Box style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                {gymPlans.map((plan, index) => (
                    <Card key={index} sx={{ maxWidth: 280, marginRight: '20px', textAlign: 'center', fontSize:'11px' }}>
                        <CardMedia
                            component="img"
                            height="280"
                            src={plan.image} 
                            alt={plan.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {plan.name}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                ${plan.price} / mes
                            </Typography>
                            <ul style={{ textAlign: 'left' }}>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <Box display="flex" justifyContent="center" marginBottom={1}>
                            <Button variant="contained" color="primary">
                                Seleccionar
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Box>          
        </>   
    );
}