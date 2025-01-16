import { useQuery } from '@tanstack/react-query';
import type { StateData } from 'features/common/state/types';
import { getCartProducts } from 'features/cart/api/cart';


type UseCartProductsReturn = {
   cartProducts?: StateData['cartProducts'];
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
