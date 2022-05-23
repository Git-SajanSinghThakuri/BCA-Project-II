import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import SellBooks from './Pages/SellBooks';
import Post from './Pages/Post';
import ManageProduct from './Pages/User/ManageProduct';
import EditPost from './Pages/EditPost'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'
import ForgotPassword from './Pages/ForgotPassword'
import Profile from './Pages/User/Profile';
import Books from './Pages/search/FindBooks';
import Category from './Pages/search/FindBooksByCategory';
import { Context } from './context/Context';

export default function App() {
  const { user } = useContext(Context)
  // const user = false;
  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/CreateAccount" element={user ? <Navigate to="/" /> : <CreateAccount />} />
            <Route path="/SellBooks" element={user ? <SellBooks /> : <Navigate to="/Login" />} />
            <Route path="/Post" element={user ? <CreateAccount /> : <Navigate to="/Login" />} />
            <Route path="/Post/:_id" element={user ? <Post /> : <Navigate to="/Login" />} />
            <Route path="/EditPost/:_id" element={user ? <EditPost /> : <Navigate to="/Login" />} />
            <Route path="/Books" element={user ? <Books /> : <Navigate to="/Login" />} />
            <Route path="/Category/:_id" element={user ? <Category /> : <Navigate to="/Login" />} />
            <Route path="/ManageProduct" element={user ? <ManageProduct /> : <Navigate to="/Login" />} />
            <Route path="/Profile" element={user ? <Profile /> : <Navigate to="/Login" />} />
            <Route path="/ForgotPassword" element={user ? <Navigate to="/" /> : <ForgotPassword />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}