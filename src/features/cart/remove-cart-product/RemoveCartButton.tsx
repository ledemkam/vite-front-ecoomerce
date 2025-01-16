import { ReactElement } from 'react';
import Button from 'common/design-system/Button';


type Props = {
removeFromCart: () => void;
};


const RemoveCartButton = ({removeFromCart }: Props) : ReactElement => {
return (
 <Button disabled={false} onClick={removeFromCart}>
     Warenkorb entfernen
 </Button>
);
};
export default RemoveCartButton;