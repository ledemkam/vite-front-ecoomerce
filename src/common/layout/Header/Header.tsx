import CartCount from 'features/cart/display-cart-count/ui/CartCount';
import ProductSearch from 'features/product/search-products/ui/ProductSearch';
import type { ReactElement } from 'react';

type Props = {
  onSubmit: (search: string) => void;
  cartcount: number;

};


const Header = ({ onSubmit, cartcount }: Props): ReactElement => {
return (
 <header className='flex flex-col justify-center bg-primary p-4 lg:flex-row-reverse lg:items-center'>
    <div className='flex justify-end'>
      <CartCount  cartCount={cartcount}/>
    </div>
    <div className='flex justify-center w-full lg:w-10/12'>
       <ProductSearch onSubmit={onSubmit} />
    </div>
 </header>
);
};
export default Header;
