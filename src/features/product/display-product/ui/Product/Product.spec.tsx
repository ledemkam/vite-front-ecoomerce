import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as getProductModule from 'features/product/display-product/api/getProduct';
import { MemoryRouter } from 'react-router-dom';
import Product from './Product';
import { productToDisplay } from './mocks';
import * as cart from 'features/cart/api/cart';

describe('Product', () => {
  it('should add product to cart', async () => {
    //GIVEN
    jest
        .spyOn(getProductModule, 'getProduct')
        .mockResolvedValue((productToDisplay['1']));

    jest
       .spyOn(cart, 'addProductToCart')
       .mockResolvedValue({
         cartProducts: [
          {
            id: '1',
            name: 'Mobile phone',
            picture: '',
            price: 1000,
          }
         ],
         cartCount: 1,
       });

    const user = userEvent.setup();
    const queryClient = new QueryClient();

    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <QueryClientProvider client={queryClient}>
          <Product />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    //WHEN
    await user.click(
      await screen.findByRole('button', { name: 'in den Warenkorb' }),
    );

    //THEN
    expect(
      await screen.findByText('Le produit a bien été ajouté au panier'),
    ).toBeInTheDocument();
  });
});
