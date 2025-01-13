import { ReactElement } from 'react';
import Button from 'common/design-system/Button';


type Props = {
addToCart: () => void;
};


const AddCartButton = ({ addToCart }: Props) : ReactElement => {
return (
 <Button variant="contained" onClick={addToCart}>
     in den Warenkorb
 </Button>
);
};
export default AddCartButton;
