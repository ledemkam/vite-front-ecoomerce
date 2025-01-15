import { allProducts } from "features/product/list-products/data/allProducts";
import { ProductItemData } from "features/product/list-products/types";



export const searchProducts = (search: string): Promise<ProductItemData[]> => {
const filteredProducts = allProducts.filter((product) =>

product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
,
);
return Promise.resolve(filteredProducts);
};
