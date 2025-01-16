import type { CartProductItemData } from "features/cart/list-cart-products/types";
import type { ProductData } from "features/product/display-product/types";
import type  { ProductItemData } from "features/product/list-products/types";


export interface StateData {
    products: ProductItemData[];
    product: ProductData;
    cartProducts: CartProductItemData[];
    cartCount: number;
}

