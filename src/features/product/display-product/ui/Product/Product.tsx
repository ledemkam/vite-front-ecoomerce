import type { ReactElement } from 'react';
import { Panorama } from '@mui/icons-material';
import AddCartButton from 'features/cart/add-cart-product/ui/AddCartButton';
import classNames from 'classnames';
import useProduct from '../../hooks/useProduct';
import useAddToCart from 'features/cart/add-cart-product/hooks/useAddToCart';




  const borderStyle = 'border border-gray-300 border-solid rounded-lg';

  const Product = (): ReactElement | null => {
  const { addToCart } = useAddToCart();
  const { product } = useProduct();

   if (!product) {
      return null
   }

  const { id,name, picture, price, description } = product;

  return (
   <div>
   <h1 className="text-2xl mb-4">{name}</h1>
   <div className={classNames('flex', 'flex-col lg:flex-row', 'gap4')}>
   <div  className={classNames(borderStyle,'p-10','grow', 'flex','justify-center',)}>
      {picture && <img src={picture} alt={name} />}
      {!picture && (
      <div
      className={classNames(
      'flex',
      'items-center justify-center',
      'w-full h-[40rem]',
      'bg-orange-100',
      )}
   >
   <Panorama fontSize="large" color="disabled" />
   </div>
   )}
   </div>
   <div className={classNames(borderStyle,'p-10 pl-5','w-full lg:w-[25rem]','h-fit')}
   >
   <p className="text-4xl font-bold">{price}€</p>
   <div className="mt-4">
   <AddCartButton addToCart={() => addToCart(id)} />
   </div>
   </div>
   </div>
   <div className={classNames(borderStyle, 'mt-4 p-5')}>
  
   <h2
   className={classNames(
   'pb-2',
   'border-b border-b-gray-300 border-b-solid',
   'text-xl',
   'font-bold',
   )}
   >
   Description du produit
   </h2>
   <p className="mt-3">{description}</p>
   </div>
   </div>
  );
  };
  export default Product;