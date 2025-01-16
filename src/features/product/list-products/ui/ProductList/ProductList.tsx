import type { ReactElement } from 'react';
import ProductItem from '../ProductItem';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';



    const ProductList = (): ReactElement => {
      const { products } = useProducts();

    return (
     <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center gap-2'>
     {products?.map((product) => {
     const { id, ...productWithoutId } = product;
     return (
        <Link key={id} to={`/product/${id}`}>
           <ProductItem product={productWithoutId} />
        </Link>)
     })}
     </div>
    );
    };
    export default ProductList;