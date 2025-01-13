import AddCartButton from "features/cart/add-cart-product/ui/AddCartButton"

const App = () => {

  const addToCart = () => {
    console.log('Add to cart')
  }
  return <AddCartButton addToCart={addToCart} />
    
}
export default App