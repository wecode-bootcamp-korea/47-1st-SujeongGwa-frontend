import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Order from './pages/Order/Order';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<Order />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/users/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
