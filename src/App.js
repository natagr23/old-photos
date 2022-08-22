import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Account from './pages/account';
// import PhotosCol from './pages/PhotosCol';
// import Settings from './pages/settings';
// import Footer from "./Pages/Footer";
import Dashboard from './pages/index';
// import DashboardLayout from "./components/dashboard-layout";
import DashboardSidebar from './components/dashboard/sidebar';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <DashboardSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/components/pages/index" element={<Dashboard />} />
        {/* <Route path="/pages/account" element={<Account />} />
        <Route path="/pages/photoscol" element={<PhotosCol />} />
        <Route path="/pages/settings" element={<Settings />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
