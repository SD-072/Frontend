import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import { starsLoader } from '../data/loaders.js';

export default function MainLayout() {
  const [stars, setStars] = useState(null);

  // Data available on all pages can also be fetched 'globally' here
  useEffect(() => {
    const fetchData = async () => {
      const data = await starsLoader();
      console.log(data);
      setStars(data);
    };
    fetchData();
  }, []);

  return (
    <div className='body'>
      <Header />
      {/* Outlet renders the child routes at this position */}
      {/* context prop passes data to all child components */}
      <Outlet context={stars} />
      <footer>© footerbla</footer>
    </div>
  );
}
