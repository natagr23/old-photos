import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotosBogota from './pages/PhotosBogota';
import PhotosMedellin from './pages/PhotosMedellin';
import PhotosTunja from './pages/PhotosTunja';
import PhotosVillavicencio from './pages/PhotosVillavicencio';
import PhotosBarranquilla from './pages/PhotosBarranquilla';
import PhotosPasto from './pages/PhotosPasto';
import PhotosBuenaventura from './pages/PhotosBuenaventura';
import PhotosIbague from './pages/PhotosIbague';
import PhotosChoachi from './pages/PhotosChoachi';
import Index from './pages/index';
import DashboardSidebar from './components/dashboard/sidebar';
import { Outlet } from 'react-router-dom';
// import RouteChangeTracker from './data/RouteChangeTracker';

import { ContextProvider } from './context/Context';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('G-884HZWW40Y');
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      <ContextProvider>
        <DashboardSidebar />
        <Routes>
          <Route
            path="/"
            element={[
              <Index />,
              // <PhotosBogota />
            ]}
          />
          <Route path="/pages/photosBogota" element={<PhotosBogota />} />
          <Route path="/pages/photosMedellin" element={<PhotosMedellin />} />
          <Route path="/pages/photosTunja" element={<PhotosTunja />} />
          <Route
            path="/pages/photosVillavicencio"
            element={<PhotosVillavicencio />}
          />
          <Route
            path="/pages/photosBarranquilla"
            element={<PhotosBarranquilla />}
          />
          <Route path="/pages/photosPasto" element={<PhotosPasto />} />
          <Route
            path="/pages/photosBuenaventura"
            element={<PhotosBuenaventura />}
          />
          <Route path="/pages/photosIbague" element={<PhotosIbague />} />
          <Route path="/pages/photosChoachi" element={<PhotosChoachi />} />
        </Routes>
        <Outlet />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
