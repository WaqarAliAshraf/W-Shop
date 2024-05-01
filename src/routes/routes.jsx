

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import LandingPage from '../components/LandingPage';
import MyLayouts from '../Layouts/MyLayouts';
import AboutUs from '../components/AboutUs';
import Faq from '../components/Faq';
import ViewCart from '../components/ViewCart';
import NewDrop from '../components/NewDrop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MyLayouts />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path='product' element={<NewDrop />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
