import { useState } from 'react';
import Navbar from './components/Navbar';
import useMovies from './hooks/useMovies';
import Main from './components/Main';
import Box from './components/Box';
import MovieList from './components/MovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import WatchedSummary from './components/WatchedSummary';
import WatchedMovieList from './components/WatchedMovieList';
import MovieDetails from './components/MovieDetails';

export interface MovieList {
  Title: string | undefined;
  Year: string | undefined;
  imdbID: string;
  Poster: string | undefined;
  Plot?: string | undefined;
  Runtime?: string | number;
  Released?: number | undefined;
  Genre?: string | undefined;
  imdbRating?: string | number;
  userRating?: number;
  Actors?: string | undefined;
  Director?: string | undefined;
}

export default function App() {
  const [query, setQuery] = useState('');
  const { movies, error, isLoading } = useMovies(query);
  const [watched, setWatched] = useState<MovieList[]>([]);
  const [selectedId, setSelectedId] = useState<null | string>(null);

  function handleSelectMovie(id: string) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleAddWatchMovie(newMovie: MovieList) {
    setWatched(watched => [...watched, newMovie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  return (
    <>
      <Navbar query={query} setQuery={setQuery} movies={movies} />
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              onAddWatch={handleAddWatchMovie}
              selectedId={selectedId}
              watched={watched}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
