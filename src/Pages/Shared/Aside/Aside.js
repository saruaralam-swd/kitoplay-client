import React, { useState } from 'react';
import logo from '../../../assets/image/MenuImage/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'

const Aside = ({ open }) => {
  return (
    <div className="flex">
      <div className={` ${open ? "w-56" : "w-20"} border-r-2 shadow-lg h-screen  p-5 relative duration-300`}>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt='kitoPlay Logo'
          />
          <h1 className={`origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>KitoPlay </h1>
        </div>

        <Link
          to='/'
          className='flex p-2 cursor-pointer rounded-md hover:bg-gray-200 text-sm items-center gap-x-4 mt-2'>
          <AiOutlineHome className='h-6 w-6' />
          <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>Home</span>
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Aside;