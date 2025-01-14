import type { ReactElement } from 'react';
import classNames from 'classnames';
import { Panorama } from '@mui/icons-material';
import { CartProductItemData } from '../../types';
import RemoveCartButton from 'features/cart/remove-cart-product/ui/RemoveCartButton';


type Props = {
    cartProduct: Omit<CartProductItemData, 'id'>;
    removeFromCart: () => void;
};
const CartProductItem = ({ cartProduct: { name, picture, price } , removeFromCart}:Props): ReactElement => {

return (
    <div className="flex gap-3 w-full">
            <div className="w-28 h-32 shrink-0">
                {picture && (
                <img
                    className="w-full h-full object-contain"
                    src={picture}
                    alt={name}
                />
                )}
                {!picture && (
                <div
                    className={classNames(
                        'flex',
                        'items-center justify-center',
                        'w-full h-full',
                        'bg-orange-100',
                    )}
                    >
                    <Panorama fontSize="large" color="disabled" />
                </div>  
                )}
            </div>
                    <div className="lg:flex lg:justify-between w-full">
                    <h2 className="text-lg">{name}</h2>
                    <p className="text-2xl font-bold">{price}€</p>

            </div>
            <div className="w-fit">
            <RemoveCartButton removeFromCart={removeFromCart}  />
            </div>
    </div>
);
};
export default CartProductItem;
