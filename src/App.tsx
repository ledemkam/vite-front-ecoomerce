import RemoveCartButton from "features/cart/remove-cart-product/ui/RemoveCartButton"



const App = () => {

  const removeFromCart = () => {
    alert('removes cart')
  }
  return <RemoveCartButton removeFromCart={removeFromCart}/>
    
}
export default App