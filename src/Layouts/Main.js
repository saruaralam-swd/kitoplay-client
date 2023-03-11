import React, { useState } from 'react';
import Aside from '../Pages/Shared/Aside/Aside';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Aside open={open} setOpen={setOpen} />
    </div>
  );
};

export default Main;