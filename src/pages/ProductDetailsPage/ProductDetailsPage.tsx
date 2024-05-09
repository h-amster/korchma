import { useLocation } from 'react-router-dom';
import './ProductDetailsPage.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect } from 'react';

export const ProductDetailsPage: React.FC = () => {
  const location = useLocation();
  const id = Number(location.pathname.split('/').at(-1));
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<number[]>(
    'recentlyViewed',
    [],
  );

  useEffect(() => {
    if (recentlyViewed.includes(id)) {
      return;
    }

    if (recentlyViewed.length >= 4) {
      setRecentlyViewed([id, ...recentlyViewed.slice(0, 3)]);
    } else {
      setRecentlyViewed([id, ...recentlyViewed]);
    }
  }, [id]);

  return <h1>Product Details with id {id}</h1>;
};
