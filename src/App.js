import React, { useEffect, useLocation } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotosCol from './pages/PhotosCol';
import Dashboard from './pages/index';
import DashboardSidebar from './components/dashboard/sidebar';
import { Outlet } from 'react-router-dom';
// import RouteChangeTracker from './data/RouteChangeTracker';

import { ContextProvider } from './context/Context';
import ReactGA from 'react-ga';
// ReactGA.initialize('G-884HZWW40Y');

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
