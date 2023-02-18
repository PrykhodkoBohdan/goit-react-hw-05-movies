
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'))

const UserRoute = ()=> {
    return(
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviePage />} />
      <Route path="movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
    );
}

export default UserRoute;