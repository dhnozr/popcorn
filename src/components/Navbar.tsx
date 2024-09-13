import { MovieList } from '../App';

interface NavbarProps {
  setQuery: (query: string) => void;
  query: string;
  movies: MovieList[];
}

export default function Navbar({ setQuery, query, movies }: NavbarProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input className='search' type='text' placeholder='Search movies...' onChange={handleOnChange} value={query} />
      <p className='num-results'>
        Found <strong>{movies?.length}</strong> results
      </p>
    </nav>
  );
}
