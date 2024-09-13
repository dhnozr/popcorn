import { MovieList } from '../App';
import WatchedMovie from './WatchedMovie';

interface WatchedMoviesProps {
  watched: MovieList[];
  onDeleteWatched: (id: string) => void;
}

export default function WatchedMovieList({ watched, onDeleteWatched }: WatchedMoviesProps) {
  return (
    <ul className='list'>
      {watched.map(movie => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
