import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addProductToCart } from 'features/cart/api/cart';

type UseAddToCart = {
    addToCart: (productId: string) => void;
    hasBeenAddedToCart: boolean;
}

const useAddToCart = ():UseAddToCart => {
const queryClient = useQueryClient();

const { mutate, isSuccess: hasBeenAddedToCart } = useMutation({
    mutationFn: (productId: string) => addProductToCart(productId),
    onSuccess: ({ cartCount, cartProducts }) => {
    queryClient.setQueryData(['cartCount'], cartCount);
    queryClient.setQueryData(['cartProducts'], cartProducts);
    },
   });
   const addToCart = (productId: string) => {
    mutate(productId);
   };
   return { addToCart, hasBeenAddedToCart };
   };
export default useAddToCart;
