'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Usuarios from '../musuario/page';
import Planes from '../mplanes/page';

const Layout: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Menu />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/musuario" element={<Usuarios />} />
            <Route path="/mplanes" element={<Planes />} />
            <Route path="/login" element={<Planes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;