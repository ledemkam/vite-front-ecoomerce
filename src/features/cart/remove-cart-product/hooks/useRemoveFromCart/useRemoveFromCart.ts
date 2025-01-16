import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProductFromCart } from 'features/cart/api/cart';
import { CartProductItemData } from 'features/cart/list-cart-products/types';


const useRemoveFromCart = () => {
const queryClient = useQueryClient();
const { mutate } = useMutation({
    mutationFn: (productId: string) => removeProductFromCart(productId),
     onSuccess: ({ cartCount, cartProducts }) => {
         queryClient.setQueryData(['cartCount'], cartCount);
         queryClient.setQueryData(['cartProducts'], cartProducts);
         },
        });
        const removeFromCart = (productId: CartProductItemData['id']) => {
         mutate(productId);
        };
        return { removeFromCart };
        };
export default useRemoveFromCart;
        