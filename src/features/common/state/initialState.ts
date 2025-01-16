
import { productToDisplay } from "features/product/display-product/data/productToDisplay";
import { allProducts } from "features/product/list-products/data/allProducts";
import { StateData } from "./types";


export const initialState: StateData = {
    products: allProducts,
    product: productToDisplay['1'],
    cartProducts: [],
    cartCount: 0,
};