import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addProductToCart } from 'features/cart/api/cart';


const useAddToCart = () => {
const queryClient = useQueryClient();

const { mutate } = useMutation({
    mutationFn: (productId: string) => addProductToCart(productId),
    onSuccess: ({ cartCount, cartProducts }) => {
    queryClient.setQueryData(['cartCount'], cartCount);
    queryClient.setQueryData(['cartProducts'], cartProducts);
    },
   });
   const addToCart = (productId: string) => {
    mutate(productId);
   };
   return { addToCart };
   };
export default useAddToCart;
