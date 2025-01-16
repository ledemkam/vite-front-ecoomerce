import { useQuery } from "@tanstack/react-query";
import { StateData } from "features/common/state/types";
import { getProducts } from "../../api/getProducts";

 


type UseProductsReturn = {
    products?: StateData['products'];
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