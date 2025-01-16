import { useMediaQuery } from '@mui/material';
import CartCount from 'features/cart/display-cart-count/ui/CartCount';
import useOnSubmit from 'features/product/search-products/hooks/useOnsubmit';
import ProductSearch from 'features/product/search-products/ui/ProductSearch';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';




const Header = (): ReactElement => {
  const { onSubmit } = useOnSubmit();
  return (
    <header className="p-4 bg-primary flex flex-col lg:flex-row lg:justify-center">
      {useMediaQuery('(max-width: 1023px)') && (
      <>
          <div className="mb-2 flex justify-between">
          <Link to="/" className="text-white font-bold">
            Site
          </Link>
          <Link to="/cart">
            <CartCount />
          </Link>
          </div>
          <ProductSearch onSubmit={onSubmit} />
      </>
      )}
      {useMediaQuery('(min-width: 1024px)') && (
      <div className="flex items-center justify-center gap-4 lg:w4/5">
      <Link to="/" className="text-white font-bold">
      Site
      </Link>
        <ProductSearch onSubmit={onSubmit} />
        <Link to="/cart">
          <CartCount  />
        </Link>
      </div>
      )}
    </header>
);
};
  
export default Header;
