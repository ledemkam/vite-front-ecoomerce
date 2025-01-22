import { useQuery } from '@tanstack/react-query';
import { getCartProducts } from 'features/cart/api/cart';
import { CartProductItemData } from '../types';


type UseCartProductsReturn = {
   cartProducts?: CartProductItemData[]
};

const useCartProducts = (): UseCartProductsReturn => {

    const query = useQuery({
    queryKey: ['cartProducts'],
    queryFn: getCartProducts,
    });
return {
 cartProducts: query.data,
};
};


export default useCartProducts;
