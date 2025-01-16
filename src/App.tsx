import type { ReactElement } from "react"
import Header from "common/layout/Header"
import CartProductList from "features/cart/list-cart-products/ui/CartProductList"
import Product from "features/product/display-product/ui/Product"
import ProductList from "features/product/list-products/ui/ProductList"
import { Route, Routes} from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"



const queryClient = new QueryClient();


const App = (): ReactElement => {


  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route
          path="/product/:id"
          element={<Product  />}  />
          <Route
          path="/cart"
          element={
          <CartProductList /> } />
       </Routes>
    </QueryClientProvider>
  )
}
export default App