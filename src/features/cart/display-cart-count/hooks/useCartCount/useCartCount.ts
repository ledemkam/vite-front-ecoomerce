import { useQuery } from '@tanstack/react-query';
import type { StateData } from 'features/common/state/types';
import { getCartCount } from 'features/cart/api/cart';

type UseCartCountReturn = {
cartCount?: StateData['cartCount'];
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