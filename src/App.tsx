import CartCount from "features/cart/display-cart-count/ui/CartCount"

const App = () => {
  return (
    <div className="mt-5">
      <CartCount cartCount={5} />
    </div>
  )
}
export default App