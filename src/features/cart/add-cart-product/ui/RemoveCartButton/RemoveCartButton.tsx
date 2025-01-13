import { ReactElement } from 'react';
import Button from 'common/design-system/Button';


type Props = {
removeToCart: () => void;
};


const RemoveCartButton = ({ removeToCart }: Props) : ReactElement => {
return (
 <Button variant="contained" onClick={removeToCart}>
     Warenkorb entfernen
 </Button>
);
};
export default RemoveCartButton;
