'use client';
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';

interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}

export default function Musuario() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredData, setFilteredData] = React.useState<UserData[]>([]);
  const [data, setData] = React.useState<UserData[]>([
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com', password: 'contraseña1', phone: '1234567890' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com', password: 'contraseña2', phone: '1234567890' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com', password: 'contraseña3', phone: '1234567890' },
    { id: 4, name: 'Usuario 42', email: 'usuario4@example.com', password: 'contraseña4', phone: '1234567890' },
    { id: 5, name: 'Usuario 5', email: 'usuario55@example.com', password: 'contraseña5', phone: '1234567890' },
    { id: 6, name: 'Usuario 6', email: 'usuario6@example.com', password: 'contraseña6', phone: '1234567890' },
    { id: 7, name: 'Usuario 7', email: 'usuario7@example.com', password: 'contraseña71', phone: '1234567890' },
    { id: 8, name: 'Usuario 8', email: 'usuario8@example.com', password: 'contraseña8', phone: '1234567891' },
    { id: 9, name: 'Usuario 9', email: 'usuario9@example.com', password: 'contraseña9', phone: '1234567890' },
    { id: 10, name: 'Usuario 10', email: 'usuario10@example.com', password: 'contraseña10', phone: '1234567890' },
    { id: 11, name: 'Usuario 11', email: 'usuario11@example.com', password: 'contraseña11', phone: '1234567890' },
    { id: 16, name: 'Usuario 12', email: 'usuario12@example.com', password: 'contraseña12', phone: '1234567890' },
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = data.filter(user =>
      Object.values(user).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setPage(0);
  };

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" mt={2} mr={2}>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Box width="60%">
          <Paper elevation={3} sx={{ background: '#F0F4F5' }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ background:'black', color:'white' }}>ID</TableCell>
                    <TableCell sx={{ background:'black', color:'white' }}>Nombre</TableCell>
                    <TableCell sx={{ background:'black', color:'white' }}>Email</TableCell>
                    <TableCell sx={{ background:'black', color:'white' }}>Contraseña</TableCell>
                    <TableCell sx={{ background:'black', color:'white' }}>Celular</TableCell>
                    <TableCell sx={{ background:'black', color:'white' }}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : filteredData
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.password}</TableCell>
                      <TableCell>{row.phone}</TableCell>
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
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={filteredData.length}
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
