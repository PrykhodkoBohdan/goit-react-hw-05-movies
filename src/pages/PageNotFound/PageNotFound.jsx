import css from './PageNotFound.module.css';

const PageNotFound = () => (
  <h1 className={css.error}>
    Error 404: Page Not Found{' '}
    <span role="img" aria-label="sheep">
      😮
    </span>
  </h1>
);

export default PageNotFound;