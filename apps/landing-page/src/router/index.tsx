import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Styles } from '../styles/styles';
import routes from './config';

const Router = () => {
  const stickyHeader = () => {
    const header = document.getElementById('header') as HTMLDivElement;
    const sticky = header.offsetTop;
    if (window.scrollY >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header id={'header'} />
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              Component={lazy(() => import(`../pages/${routeItem.component}/index.tsx`))}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
