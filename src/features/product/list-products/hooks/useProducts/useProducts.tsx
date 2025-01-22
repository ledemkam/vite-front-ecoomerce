import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/getProducts";
import { ProductItemData } from "../../types";

 


type UseProductsReturn = {
    products?: ProductItemData[];
    };
    
const useProducts = (): UseProductsReturn => {
    const query = useQuery({
     queryKey: ['products'],
     queryFn: getProducts,
    });
    return {
     products: query.data
    }};
    

   export default useProducts;