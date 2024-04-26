'use client';

import React from 'react';
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
import TablePagination from '@mui/material/TablePagination';
import { Menu as MenuIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function Musuario() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const data = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
    { id: 4, name: 'Usuario 4', email: 'usuario4@example.com' },
    { id: 5, name: 'Usuario 5', email: 'usuario5@example.com' },
    { id: 6, name: 'Usuario 6', email: 'usuario6@example.com' },
    { id: 7, name: 'Usuario 7', email: 'usuario7@example.com' },
    { id: 8, name: 'Usuario 8', email: 'usuario8@example.com' },
    { id: 9, name: 'Usuario 9', email: 'usuario9@example.com' },
    { id: 10, name: 'Usuario 10', email: 'usuario10@example.com' },
    { id: 11, name: 'Usuario 11', email: 'usuario11@example.com' },
    { id: 12, name: 'Usuario 12', email: 'usuario12@example.com' },
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
                  {(rowsPerPage > 0
                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data
                  ).map((row) => (
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
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}