import type { ReactElement } from "react";
import { CartProductItemData } from "../../types";
import CartProductItem from "../CartProductItem";

type Props = {
    cartProducts: CartProductItemData[];
    removeFromCart: (productId:CartProductItemData["id"]) => void;
    };
    

const CartProductList = ({cartProducts, removeFromCart} : Props) : ReactElement => {
  return (
    <div className="flex flex-col gap-4">
        {cartProducts.map((cartProduct) => {
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