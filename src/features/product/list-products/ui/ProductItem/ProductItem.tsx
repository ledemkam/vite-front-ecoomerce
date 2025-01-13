import type { ReactElement } from 'react';
import { Panorama } from '@mui/icons-material';


type Props = {
    product: {
     name: string;
     picture: string;
     price: number;
    };
    };
    

    const ProductItem = ({
        product: { picture, name, price },
        }: Props): ReactElement => {
        return (
         <div className="flex flex-col items-center justify-center w-64 p-4
        m-4 bg-white rounded shadow-md">
         <div className="w-48 h-48 shrink-0">
         {picture && (
         <img className="size-full object-contain" src={picture}
        alt={name} />
         )}
         {!picture && (
         <div
         className="flex items-center justify-center
        size-full bg-orange-100"
         >
         <Panorama fontSize="large" color="disabled" />
         </div>
         )}
         </div>
         <div className="flex flex-col items-center justify-center w-full
        mt-4">
         <h3 className="text-lg font-semibold text-center">{name}</h3>
         <p className="mt-1 text-lg font-semibold text-center">{price}
        €</p>
         </div>
         </div>
        );
        };

    export default ProductItem;
