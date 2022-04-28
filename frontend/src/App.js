import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import SellBooks from './Pages/SellBooks';
import Post from './Pages/Post';
import ManageProduct from './Pages/User/ManageProduct';
import LoginForm from './Pages/LoginForm'
import CreateAccount from './Pages/CreateAccount'
import ForgotPassword from './Pages/ForgotPassword'
import Profile from './Pages/User/Profile';

export default class App extends Component {
  render() {
    const user = true;
    // const user=false;
    return (
      <>
        <BrowserRouter>
          <Header user={user} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/LoginForm" element={user ? <Navigate to="/" /> : <LoginForm />} />
              <Route path="/CreateAccount" element={user ? <Navigate to="/" /> : <CreateAccount />} />
              <Route path="/SellBooks" element={user ? <SellBooks /> : <Navigate to="/LoginForm" />} />
              <Route path="/Post/:id" element={user ? <Post /> : <Navigate to="/LoginForm" />} />
              <Route path="/Post" element={user ? <CreateAccount /> : <Navigate to="/LoginForm" />} />
              <Route path="/ManageProduct" element={user ? <ManageProduct /> : <Navigate to="/LoginForm" />} />
              <Route path="/Profile" element={user ? <Profile /> : <Navigate to="/LoginForm" />} />
              <Route path="/ForgotPassword" element={user ? <Navigate to="/" /> : <ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}