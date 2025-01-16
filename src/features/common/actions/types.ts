import { ChangeInCartResponse } from "features/cart/api/cart";
import { CartProductItemData } from "features/cart/list-cart-products/types";
import { ProductItemData } from "features/product/list-products/types";

interface ProductsFetchedActionData {
    type: 'products/fetched';
    payload: ProductItemData[];
}

interface ProductsFilteredActionData {
    type: 'products/filtered';
    payload: ProductItemData[];

}

interface ProductFetchedActionData {
    type: 'product/fetched';
    payload: ProductItemData;
}

interface CartCountFetchedActionData {
    type: 'cartCount/fetched';
    payload: number;
}

interface CartProductsFetchedActionData {
    type: 'cartProducts/fetched';
    payload: CartProductItemData[];
}

interface CartAddedActionData {
    type: 'cart/added';
    payload: ChangeInCartResponse;
}

interface CartRemovedActionData {
    type: 'cart/removed';
    payload: ChangeInCartResponse;
}

export type ActionData = ProductsFetchedActionData | ProductsFilteredActionData | ProductFetchedActionData | CartCountFetchedActionData | CartProductsFetchedActionData  | CartAddedActionData   | CartRemovedActionData;

