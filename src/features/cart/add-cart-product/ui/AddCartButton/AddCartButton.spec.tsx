import { render,screen } from '@testing-library/react';
import AddCartButton from './AddCartButton';

const addToCart = jest.fn();

describe('AddCartButton', () => {
  it('should display a button named "in den Warenkorb"',
    ()=>{
       render(<AddCartButton addToCart={addToCart} />);
       expect(
        screen.getByRole('button', { name: 'in den Warenkorb' }),).toBeInTheDocument();
});
});