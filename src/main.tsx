import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './app/pages/landing.tsx';
import ProductsView from './app/modules/products/views/ProductsView.tsx';
import ProductShow from './app/modules/products/views/ProductShow.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductShow />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
