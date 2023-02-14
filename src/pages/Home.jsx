import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmsList/FilmList';
import { getPoPMovies } from 'API/api-services';

export default function Home() {
  const [popMovieList, setPopMovies] = useState([]);

  useEffect(() => {
   
    getPoPMovies().then(data => {
      setPopMovies(data.results);
    });
  }, []);

  return <FilmList filmList={popMovieList} />;
}
