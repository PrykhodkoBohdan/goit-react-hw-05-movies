import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import key  from '../../services/key';
import css from './HomePage.module.css';



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const searchTrendingMovies = async () => {
      setError('');
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
        );

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError('Oops, something goes wrong');
      }
    };

    if (movies.length === 0) {
      searchTrendingMovies();
    }
  }, [movies.length]);

  return error === '' ? (
    <div>
      <p className={css.listTitle}>Trending today</p>
      <ul className={css.filmList}>
        {movies.map(({ id, title, name }) => (
          <MovieList key={id} name={name} title={title} to={`movies/${id}`} />
        ))}
      </ul>
    </div>
  ) : (
    <p>{error}</p>
  );
};

export default HomePage;