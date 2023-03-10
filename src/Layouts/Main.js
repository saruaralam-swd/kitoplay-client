import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Pages/Shared/Aside/Aside';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Aside />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;