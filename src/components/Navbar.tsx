interface NavbarProps {
  setQuery: (query: string) => void;
  query: string;
}

export default function Navbar({ setQuery, query }: NavbarProps) {
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
        Found <strong>x</strong> results
      </p>
    </nav>
  );
}
