import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components';

const MainLayout = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  return (
    <>
      <NavBar cart={cart} />
      <main className='container mx-auto'>
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
};

export default MainLayout;
