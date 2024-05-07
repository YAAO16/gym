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
import { Close as CloseIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function mplanes() {
   const data = [
    { id: 1, name: 'Harold Mosquera', tipo: 'estudiante' },
    { id: 2, name: 'Esteban Josa', tipo: 'privado' },
    { id: 3, name: 'Maicol Guerrero', tipo: 'mensual' },
  ];

  const tableWidth = '60%'; 
  const tableHeight = 'auto'; 
  return (
    <>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" mt={2} mr={2}>
        <Button endIcon={<CloseIcon />} variant="contained" style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }} href='./menu'></Button>
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
                    <TableCell>Planes</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.tipo}</TableCell>
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