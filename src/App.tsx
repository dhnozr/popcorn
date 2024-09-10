import { useState } from 'react';
import Navbar from './components/Navbar';
import useMovies from './hooks/useMovies';

export default function App() {
  const [query, setQuery] = useState('');
  const { movies, error, isLoading } = useMovies(query);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
    </>
  );
}
