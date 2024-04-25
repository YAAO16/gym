import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Menu as MenuIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function musuario() {
   const data = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
  ];

  const tableWidth = '60%'; 
  const tableHeight = 'auto'; 
  return (
    <>
      <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
        <Button startIcon={<MenuIcon />} variant="contained" href='./menu'>Menú</Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Box width={tableWidth}>
          <Paper elevation={3} sx={{ background: '#F0F4F5' }}>
            <TableContainer sx={{ maxHeight: tableHeight }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ background: '#3AC203' }}>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <IconButton aria-label="editar">
                          <EditIcon style={{ color: '#1976D2' }} />
                        </IconButton>
                        <IconButton aria-label="eliminar">
                          <DeleteIcon style={{ color: '#D32F2F' }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
