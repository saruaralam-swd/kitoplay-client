import React from 'react';
import { HiMenuAlt2 } from "react-icons/hi";

const Header = ({ open, setOpen }) => {
  return (
    <div className='sticky top-0 z-[999999]'>
      <div className='flex justify-between bg-white text-black border-b-2'>
        <HiMenuAlt2 onClick={() => setOpen(!open)} className='w-7 h-7 font-semibold cursor-pointer' />
        <h2 className="text-3xl">Main header</h2>
        <p> {''}</p>
      </div>
    </div>
  );
};

export default Header;