import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, CategoriesSkeleton } from '.';

const CategoryLinks = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <CategoriesSkeleton />;

  if (!categories.length) return <Alert message='No categories found' type='warning' />;

  return categories.map((category) => (
    <Link key={category} to={`/category/${category}`} className='btn btn-outline btn-primary'>
      {category}
    </Link>
  ));
};

export default CategoryLinks;
