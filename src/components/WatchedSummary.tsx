import { MovieList } from '../App';

interface WatchedSummaryProps {
  watched: MovieList[];
}

export default function WatchedSummary({ watched }: WatchedSummaryProps) {
  const average = (arr: number[]) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const avgImdbRating = watched.length ? average(watched.map(movie => Number(movie.imdbRating) || 0)) : 0;
  const avgUserRating = watched.length ? average(watched.map(movie => movie.userRating || 0)) : 0;
  const avgRuntime = watched.length ? average(watched.map(movie => Number(movie.Runtime) || 0)) : 0;
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched?.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
