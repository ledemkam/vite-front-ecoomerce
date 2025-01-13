import RemoveCartButton from "features/cart/add-cart-product/ui/RemoveCartButton"

const App = () => {

  const removeToCart = () => {
    alert('removes cart')
  }
  return <RemoveCartButton removeToCart={removeToCart} />
    
}
export default App