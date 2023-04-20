import React from 'react';
import Header from '../components/Header';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                <route.component />
              </>
          }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter