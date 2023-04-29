import React from 'react';
import Header from '../components/Header';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routes from './routes';
import Footer from './../components/Footer';

const AppRouter = () => {
  return (
    <Router>
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

      <Footer />
    </Router>
  )
}

export default AppRouter