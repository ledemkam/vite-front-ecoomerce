import type { ReactElement } from 'react';
import { ProductItemData } from '../../types';
import ProductItem from '../ProductItem';
import { Link } from 'react-router-dom';


type Props = {
    products: ProductItemData[];
    };
    const ProductList = ({ products }: Props): ReactElement => {
    return (
     <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center gap-2'>
     {products.map((product) => {
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