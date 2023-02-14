import { MovieCard } from 'components/MovieCard/MovieCard';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { getDetailsMovies } from '../API/api-services';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackBtn } from 'components/BackBtn/BackBtn';

export default function MovieView() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsMovies(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  return (
    <>
      <BackBtn />
      {movie && <MovieCard movie={movie} />}
      <hr />
      <ul>
        <li>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
