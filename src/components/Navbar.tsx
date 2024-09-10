export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input className='search' type='text' placeholder='Search movies...' />
      <p className='num-results'>
        Found <strong>x</strong> results
      </p>
    </nav>
  );
}
