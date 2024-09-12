import { MovieList } from '../App';

interface WatchedMoviesProps {
  watched: MovieList[];
}

export default function WatchedMovieList({ watched }: WatchedMoviesProps) {
  return <div>WatchedMovieList</div>;
}
