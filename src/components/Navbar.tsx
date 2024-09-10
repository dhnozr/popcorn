import { useState } from 'react';

interface NavbarProps {
  setQuery: (query: string) => void;
}

export default function Navbar({ setQuery }: NavbarProps) {
  const [input, setInput] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setQuery(input);
      setInput('');
    }
  }

  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        onChange={handleOnChange}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <p className='num-results'>
        Found <strong>x</strong> results
      </p>
    </nav>
  );
}
