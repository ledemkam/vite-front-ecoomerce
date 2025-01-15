import Header from "common/layout/Header"
import { CartProductItemData } from "features/cart/list-cart-products/types"
import CartProductList from "features/cart/list-cart-products/ui/CartProductList"
import { ProductData } from "features/product/display-product/types"
import Product from "features/product/display-product/ui/Product"
import { ProductItemData } from "features/product/list-products/types"
import ProductList from "features/product/list-products/ui/ProductList"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"





const removeFromCart = () => {
  console.log("remove fron cart")
}

const addToCart = () => {
  console.log("add to cart")
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
  const allProducts: ProductItemData[] = [
    {
    id: '1',
    name: 'Mobile phone',
    picture: '',
    price: 1000,
    },
    {
    id: '2',
    name: 'Laptop',
    picture: '',
    price: 1500,
    },
    {
    id: '3',
    name: 'Tablet',
    picture: '',
    price: 500,
    },  
  ]
  const[products,setProducts]= useState<ProductItemData[]>(allProducts)

  const onSubmit = (search: string): void => {
        const filteredProducts = allProducts.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ,
    );
    setProducts(filteredProducts);
  }
  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route
          path="/product/:id"
          element={<Product product={product} addToCart={addToCart} />}  />
          <Route
          path="/cart"
          element={
          <CartProductList
          cartProducts={cartProducts}
          removeFromCart={removeFromCart} /> } />
       </Routes>
    </>
  )
}
export default App