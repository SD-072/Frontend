import { Link, NavLink } from 'react-router';

export default function Header() {
  return (
    <header className='header'>
      {/* Anchor tags only for external links or navigation within a page */}
      <Link to='/'>
        <h1>Webb Gallery</h1>
        <p>
          Fancy stars
          <span role='img' aria-label='Star'>
            💫
          </span>
        </p>
      </Link>
      <nav>
        <ul>
          <li>
            {/* NavLink for client-side navigation with automatic "active" CSS class */}
            <NavLink className='navlink' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            {/* NavLink prevents page reload and navigates via JavaScript */}
            <NavLink className='navlink' to='/alpha-centauri'>
              Alpha Centauri
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
