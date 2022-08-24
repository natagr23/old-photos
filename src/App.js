import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotosCol from './pages/PhotosCol';
import Dashboard from './pages/index';
import DashboardSidebar from './components/dashboard/sidebar';
import { Outlet } from 'react-router-dom';

import { ContextProvider } from './context/Context';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <DashboardSidebar />
        <Routes>
          <Route path="/" element={[<Dashboard />, <PhotosCol />]} />
          <Route path="/pages/index" element={[<Dashboard />, <PhotosCol />]} />
          <Route path="/pages/photoscol" element={<PhotosCol />} />
        </Routes>
        <Outlet />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
