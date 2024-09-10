import { useEffect, useState } from 'react';

const KEY = '36c52d5d';

// Movie data type
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const controller = new AbortController();
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error('Movies not fetched');

        const data = await res.json();

        setMovies(data.Search);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        }
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setError('No Movies yet');
        setMovies([]);
        return;
      }

      return () => controller.abort();
    }
    fetchMovies();
  }, [query]);

  return { movies, error, isLoading };
}
