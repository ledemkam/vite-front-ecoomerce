import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCartButton from './AddCartButton';

const addToCart = jest.fn();

describe('AddCartButton',  () => {
  it('should display a button named "in den Warenkorb"', 
     ()=>{
       render(<AddCartButton addToCart={addToCart} />);   
        expect(
         screen.getByRole('button', { name: 'in den Warenkorb' }),).toBeInTheDocument();
});

it('should call addToCart when button is clicked', 
  async ()=>{
    const user = userEvent.setup();
     render(<AddCartButton addToCart={addToCart} />);
    await user.click(screen.getByRole('button', { name: 'in den Warenkorb' }));
    expect(addToCart).toHaveBeenCalled();
  
});
});