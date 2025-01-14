import Header from "common/layout/Header"
import { ProductData } from "features/product/display-product/types"
import Product from "features/product/display-product/ui/Product"


const onSubmit = (search: string) => {
  console.log(search)

}

const addToCart = () => {
  console.log(product)
}

const cartcount = 10

const product: ProductData = {
  name: 'Mobile phone',
  picture: '',
  price: 1000,
  description:
  'The mobile phone is a superior smartphone that offers unmatched performance and top-tier camera features. Enjoy the sleek design, powerful A15 Bionic chip, and durable Ceramic Shield front cover. Itoffers Dual 12MP camera system: Ultra Wide and Wide cameras, and up to 19 hours of video playback. Experience the next level of smarttechnology with the mobile phone.',
 };
 
 

const App = () => {
  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <Product product={product} addToCart={addToCart} />
    </>
  )
}
export default App