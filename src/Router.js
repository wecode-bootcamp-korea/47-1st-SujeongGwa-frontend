import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
