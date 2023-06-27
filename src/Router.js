import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
