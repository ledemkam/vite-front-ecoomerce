import { ActionData } from "../actions/types";
import { StateData } from "../state/types";

export const reducer = (state: StateData, action: ActionData):
StateData => {
switch (action.type) {
 case 'products/fetched': {
    const productsFetched = action.payload;
    const newState = {
    ...state,
    products: productsFetched,
    };
    return newState;
 }
 case 'products/filtered': {
    const productsFiltered = action.payload;
    const newState = {
    ...state,
    products: productsFiltered,
 };
 return newState;
 }
 case 'product/fetched': {
 const productFetched = action.payload;
 const newState = {
 ...state,
 product: productFetched,
 };
 return newState;
 }
 case 'cartCount/fetched': {
 const cartCountFetched = action.payload;
 const newState = {
 ...state,
 cartCount: cartCountFetched,
 };
 return newState;
 }
 case 'cartProducts/fetched': {
 const cartProductsFetched = action.payload;
 const newState = {
 ...state,
 cartProducts: cartProductsFetched,
 };
 return newState;
 }
 case 'cart/added': {
 const updatedCart = action.payload;
 const newState = {
 ...state,
 cartCount: updatedCart.cartCount,
 cartProducts: updatedCart.cartProducts,
 };
 return newState;
 }
 case 'cart/removed': {
 const updatedCart = action.payload;
 const newState = {
 ...state,
 cartCount: updatedCart.cartCount,
 cartProducts: updatedCart.cartProducts,
 };
 return newState;
 }
}
};
