import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const KEY = '36c52d5d';

// Movie data type
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=batman`);

  if (!res.ok) {
    throw new Error('Failed to fetch Movies');
  }

  const data = await res.json();

  return data.Search;
};

export default function useMovies(query: string) {
  const { data, error, isPending } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies(query),
    staleTime: 0,
  });

  return { data, error, isPending };
}
