import { useEffect, useState } from 'react';
import Loader from './Loader';
import { MovieList } from '../App';
import StarRating from './StarRating';
const KEY = '36c52d5d';

interface MovieDetailsProps {
  onAddWatch: (movie: MovieList) => void;
  selectedId: string;
  watched: MovieList[];
  onCloseMovie: () => void;
}

export default function MovieDetails({ onAddWatch, selectedId, watched, onCloseMovie }: MovieDetailsProps) {
  const [movie, setMovie] = useState<MovieList | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  console.log(movie);

  const isWatched = watched?.some(movie => movie.imdbID === selectedId);

  const { Title, Year, Poster, Plot, Runtime, Released, Genre, Actors, Director, imdbRating } = movie || {};

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);

      const data = await response.json();

      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedId]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      Plot,
      userRating,
      Runtime: typeof Runtime === 'string' ? Number(Runtime.split(' ')[0]) : Runtime,
      Released,
      imdbRating: Number(imdbRating),
      Genre,
      Actors,
      Director,
    };

    onAddWatch(newWatchedMovie);
  }

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie?.Poster} alt={`Poster of ${movie} movie`} />
            <div className='details-overview'>
              <h2>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p>{movie?.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie?.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              {!isWatched ? (
                <>
                  <StarRating onSetRating={setUserRating} maxRating={10} />
                  {userRating > 0 && (
                    <button className='btn-add' onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie?.Plot}</em>
            </p>
            <p>Starring {movie?.Actors}</p>
            <p>Directed by {movie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
