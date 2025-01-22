import { useQuery } from '@tanstack/react-query';
import { getCartCount } from 'features/cart/api/cart';

type UseCartCountReturn = {
cartCount?: number;
};

const useCartCount = (): UseCartCountReturn => {
const query = useQuery({
 queryKey: ['cartCount'],
 queryFn: getCartCount,
});
return {
 cartCount: query.data,
};
};
export default useCartCount;