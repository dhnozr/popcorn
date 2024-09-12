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
  onSelectMovie: (id: string) => void;
}

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <ul className='list list-movies'>
      {movies?.map(movie => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
