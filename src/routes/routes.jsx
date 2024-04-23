// routes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import LandingPage from '../LandingPage';
import MyLayouts from '../Layouts/MyLayouts';
import AboutUs from '../AboutUs';
import Faq from '../Faq';
import ViewCart from '../ViewCart'; // Adjust the path accordingly
// import NewDrop from '../NewDrop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MyLayouts />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/faq' element={<Faq />} />
        {/* <Route exact="/newdrop" element={<NewDrop/>}/> */}
        <Route path="/viewcart" element={<ViewCart />} />
      </Route>
        <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
