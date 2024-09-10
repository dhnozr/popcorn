import Movie from './Movie';

interface MovieList {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieListProps {
  movies: MovieList[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <ul className='list list-movies'>
      {movies?.map(movie => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
