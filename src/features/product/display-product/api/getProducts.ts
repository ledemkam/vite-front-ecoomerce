
import { productToDisplay } from '../data/productToDisplay';
import type { ProductData } from '../types';


export const getProduct = (productId: string): Promise<ProductData> => {
const product = productToDisplay[productId];
return Promise.resolve(product);
};