import { productToAddToCart } from "../add-cart-product/data/productToAddToCart";
import { CartProductItemData } from "../list-cart-products/types";

type ChangeInCartResponse = {
    cartProducts: CartProductItemData[];
    cartCount: number;
};

    let cartProducts: CartProductItemData[] = [];
    let cartCount = 0;

export const getCartCount = (): Promise<number> => {
    return Promise.resolve(cartCount);
};

export const getCartProducts = (): Promise<CartProductItemData[]> => {
     return Promise.resolve(cartProducts);
};

export const addProductToCart = (productId: string):Promise<ChangeInCartResponse> => {
const isProductInCart = cartProducts.some((product) => product.id === productId);
if (!isProductInCart) {
    const productToAdd = productToAddToCart[productId];
    cartProducts = [...cartProducts, productToAdd];
    cartCount += 1;
}
return Promise.resolve({ cartProducts, cartCount });
};

export const removeProductFromCart = (productId: CartProductItemData['id'],): Promise<ChangeInCartResponse> => {
    cartProducts = cartProducts.filter((cartProduct) => cartProduct.id !== productId);
    cartCount -= 1;
    return Promise.resolve({ cartProducts, cartCount });
};

