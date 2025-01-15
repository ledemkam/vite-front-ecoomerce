import type { ReactElement } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

type Props = {
cartCount: number;
};


const CartCount = ({ cartCount }: Props): ReactElement => {
return (
 <Badge badgeContent={cartCount} showZero color="error">
     <ShoppingCart />
 </Badge>
);
};
export default CartCount;
