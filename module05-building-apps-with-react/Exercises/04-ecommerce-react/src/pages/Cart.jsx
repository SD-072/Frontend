import { useOutletContext } from 'react-router-dom';
import { Alert, CartTable } from '@/components';

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  if (!cart.length)
    return (
      <div className='mt-5'>
        <Alert message='Your cart is empty :(' />
      </div>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
