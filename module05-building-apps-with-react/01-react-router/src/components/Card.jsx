import { Link } from 'react-router';

const Card = ({ star }) => {
  const { url, heading, description, slug } = star;

  return (
    <Link to={`/star/${slug}`}>
      {/* Link can span entire element or just simple text */}
      <article className='star'>
        <div>
          <img src={url} alt={heading} className='star__img' />
        </div>
        <h2 className='star__heading'>{heading}</h2>
        <p className='star__description'>{description}</p>
      </article>
    </Link>
  );
};

export default Card;
