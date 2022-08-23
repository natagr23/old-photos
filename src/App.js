import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotosCol from './pages/PhotosCol';
import Dashboard from './pages/index';
import DashboardSidebar from './components/dashboard/sidebar';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-213805435-1'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      <DashboardSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pages/index" element={<Dashboard />} />
        <Route path="/pages/photoscol" element={<PhotosCol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
