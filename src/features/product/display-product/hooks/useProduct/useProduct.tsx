import { useMatch } from 'react-router-dom';
import { getProduct } from '../../api/getProducts';
import { useQuery , skipToken} from '@tanstack/react-query';
import { ProductItemData } from 'features/product/list-products/types';

type UseProductReturn = {
   product?: ProductItemData
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
