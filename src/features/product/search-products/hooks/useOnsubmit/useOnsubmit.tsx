import { useQueryClient,useMutation } from "@tanstack/react-query";
import { searchProducts } from "../../api/searchProducts";


const useOnSubmit = () => {
    const queryClient = useQueryClient();
    const { mutate }= useMutation({
     mutationFn: (search: string) => searchProducts(search),
     onSuccess: (filteredProducts) => {
     queryClient.setQueryData(['products'], filteredProducts);
     },
    });
     
    const onSubmit = (search: string) => {
     mutate(search);
    };

    return { onSubmit };
        
};

        export default useOnSubmit;
