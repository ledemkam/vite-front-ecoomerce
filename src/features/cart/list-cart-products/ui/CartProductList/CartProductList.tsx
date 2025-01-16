import type { ReactElement } from "react";
import CartProductItem from "../CartProductItem";
import useCartProducts from "../../hooks";
import useRemoveFromCart from "features/cart/remove-cart-product/hooks/useRemoveFromCart";


    

const CartProductList = () : ReactElement => {
  const { cartProducts } = useCartProducts();
  const { removeFromCart } = useRemoveFromCart();

  return (
    <div className="flex flex-col gap-4">
        {cartProducts?.map((cartProduct) => {
        const { id, ...cartProductWithoutId } = cartProduct;
        return (
            <div
            key={id}
            className="[&:not(:last-child)]:border-b border-gray-300
           border-solid pb-4"
            >
            <CartProductItem
            cartProduct={cartProductWithoutId}
            removeFromCart={() => removeFromCart(id)}
            />
            </div>
            );
        })}
    </div>        
  );
}
export default CartProductList