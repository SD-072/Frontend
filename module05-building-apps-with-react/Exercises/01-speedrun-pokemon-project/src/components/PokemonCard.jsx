import { Link } from 'react-router';

const PokemonCard = ({ pokemon }) => {
  const id = pokemon.url.split('/')[6] || '0';

  return (
    <div className='card bg-base-100 w-96 shadow-sm m-2'>
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title capitalize'>{pokemon.name}</h2>
        <div className='card-actions justify-start'>
          <Link to={`pokemon/${pokemon.name}`}>
            <button type='button' className='btn btn-primary'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
