import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import PhotosCol from './pages/PhotosCol';
import Dashboard from './pages/index';
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
          <Route path="/" element={[<Dashboard />, <PhotosCol />]} />
          {/* <Route path="/pages/index" element={[<Dashboard />, <PhotosCol />]} /> */}
          <Route path="/pages/photoscol" element={<PhotosCol />} />
        </Routes>
        <Outlet />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
