import { Link, useOutletContext, useParams } from 'react-router';

export default function SingleStar() {
  // Pages for a dynamic detail view
  // can either fetch their data themselves...
  // const [star, setStar] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await starsLoader();
  //     console.log(data);
  //     const s = data.find((star) => star.id === Number(id));
  //     setStar(s);
  //   };
  //   fetchData();
  // }, [id]);

  // ... or obtain it from the Outlet context.

  // useParams extracts URL parameters (here :slug from /star/:slug)
  const { slug } = useParams();
  // useOutletContext gets data from parent layout
  const stars = useOutletContext();
  if (!stars) return <p className='message--loading'>Loading...</p>;

  const star = stars.find((s) => s.slug === slug);
  if (!star) return <h1>Not Found</h1>;

  return (
    <Link to='/' className='single-star-page' style={{ backgroundImage: `url(${star.url})` }}>
      <article className='single-star-content'>
        <h1 className='star__heading'>{star.heading}</h1>
        <p className='star__description'>{star.description}</p>
      </article>
    </Link>
  );
}
