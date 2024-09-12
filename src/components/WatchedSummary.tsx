import { MovieList } from '../App';

interface WatchedSummaryProps {
  watched: MovieList[];
}

export default function WatchedSummary({ watched }: WatchedSummaryProps) {
  const average = (arr: []) => arr.reduce((acc, cur) => (acc + cur) / arr.length, 0);
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
        </p>
        <p>
          <span>🌟</span>
        </p>
        <p>
          <span>⏳</span>
        </p>
      </div>
    </div>
  );
}
