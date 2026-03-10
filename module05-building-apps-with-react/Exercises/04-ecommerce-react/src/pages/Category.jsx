import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { Alert, ProductCard, ProductCardSkeleton } from '@/components';

const Category = () => {
  const { name } = useParams();
  const { cart, setCart } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  const renderProductList = () => {
    if (loading) return Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />);
    if (!products.length) return <Alert message='No products were found' type='warning' />;
    return products.map((p) => (
      <ProductCard key={p.id} cart={cart} product={p} setCart={setCart} />
    ));
  };
  return <div className='grid grid-cols-4 gap-5 py-5'>{renderProductList()}</div>;
};

export default Category;
