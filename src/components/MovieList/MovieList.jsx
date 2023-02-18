import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ name, title, to }) => {
  const location = useLocation();
  return (
    <li className={css.listItem}>
      <Link to={to} className={css.link} state={{ from: location }}>
        {title ?? name}
      </Link>
    </li>
  );
};

export default MovieList;

MovieList.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
};