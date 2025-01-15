import { allProducts } from '../data/allProducts';
import type { ProductItemData } from '../types';

export const getProducts = (): Promise<ProductItemData[]> => {
return Promise.resolve(allProducts);
};
