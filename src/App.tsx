import { useState } from 'react';
import Navbar from './components/Navbar';
import useMovies from './hooks/useMovies';
import Main from './components/Main';
import Box from './components/Box';
import MovieList from './components/MovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

export default function App() {
  const [query, setQuery] = useState('');
  const { movies, error, isLoading } = useMovies(query);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <MovieList movies={movies} />
        </Box>
      </Main>
    </>
  );
}
