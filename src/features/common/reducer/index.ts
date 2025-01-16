import { ActionData } from "../actions/types";
import { StateData } from "../state/types";

export const reducer = (state: StateData, action: ActionData) => {

    switch (action.type) {
        case 'products/fetched':
            return { ...state, products: action.payload };
        case 'products/filtered':
            return { ...state, products: action.payload };
        case 'product/fetched':
            return { ...state, product: action.payload };
        case 'cartCount/fetched':
            return { ...state, cartCount: action.payload };
        case 'cartProducts/fetched':
            return { ...state, cartProducts: action.payload };
        case 'cart/added':
            return { ...state, cartProducts: action.payload.cartProducts, cartCount: action.payload.cartCount };
        case 'cart/removed':
            return { ...state, cartProducts: action.payload.cartProducts, cartCount: action.payload.cartCount };
        default:
            return state;
    }
}