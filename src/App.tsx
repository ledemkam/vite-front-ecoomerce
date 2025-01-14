import Header from "common/layout/Header"
import { CartProductItemData } from "features/cart/list-cart-products/types"
import CartProductList from "features/cart/list-cart-products/ui/CartProductList"
import { ProductData } from "features/product/display-product/types"


const onSubmit = (search: string) => {
  console.log(search)

}

const removeFromCart = () => {
  console.log("remove fron cart")
}

const cartcount = 10

const product: ProductData = {
  name: 'Mobile phone',
  picture: '',
  price: 1000,
  description:
  'The mobile phone is a superior smartphone that offers unmatched performance and top-tier camera features. Enjoy the sleek design, powerful A15 Bionic chip, and durable Ceramic Shield front cover. Itoffers Dual 12MP camera system: Ultra Wide and Wide cameras, and up to 19 hours of video playback. Experience the next level of smarttechnology with the mobile phone.',
 };

const cartProduct: Omit<CartProductItemData, 'id'> = {
  name: 'Mobile phone',
  picture: '',
  price: 1000,
}

const cartProducts: CartProductItemData[] = [
  {
    id: '1',
    name: 'Mobile phone',
    picture: '',
    price: 200,
  },
  {
    id: '2',
    name: 'tablet',
    picture: '',
    price: 100,
  },
  {
    id: '3',
    name: 'laptop',
    picture: '',
    price: 1000,
  },
]
 
 

const App = () => {
  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <CartProductList cartProducts={cartProducts} removeFromCart={removeFromCart} />
    </>
  )
}
export default App