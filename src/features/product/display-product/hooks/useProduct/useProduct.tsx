import { useMatch } from 'react-router-dom';
import type { StateData } from 'features/common/state/types';
import { getProduct } from '../../api/getProducts';
import { useQuery , skipToken} from '@tanstack/react-query';

type UseProductReturn = {
   product?: StateData['product'];
};


const useProduct = (): UseProductReturn => {
    const matchProductPage = useMatch('/product/:id');
    const productIdInURL = matchProductPage?.params.id


const query = useQuery({
    queryKey: ['product', productIdInURL],
    queryFn: productIdInURL ? () => getProduct(productIdInURL) :
   skipToken,
   });
   return {
    product: query.data,
   };
   

};
export default useProduct;
