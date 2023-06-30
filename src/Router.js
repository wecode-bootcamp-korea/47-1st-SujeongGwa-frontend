import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
