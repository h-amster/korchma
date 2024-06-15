import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { FaqPage } from './pages/FaqPage/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
// eslint-disable-next-line max-len
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';
import { About } from './pages/About/About';
import { ScrollToTop } from './utils/ScrollToTop';
import { VendorDetailsPage } from './pages/VendorDetailsPage/VendorDetailsPage';
import { VendorsPage } from './pages/VendorsPage/VendorsPage';

export const Root: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="catalog">
            <Route index element={<CatalogPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="vendorslist">
            <Route index element={<NotFoundPage />} />
            <Route path=":vendorId" element={<VendorDetailsPage />} />
          </Route>

          <Route path="vendors" element={<VendorsPage />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
