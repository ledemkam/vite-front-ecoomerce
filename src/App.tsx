import type { ReactElement } from "react"
import { useEffect, useState } from "react"
import Header from "common/layout/Header"
import { CartProductItemData } from "features/cart/list-cart-products/types"
import CartProductList from "features/cart/list-cart-products/ui/CartProductList"
import { ProductData } from "features/product/display-product/types"
import Product from "features/product/display-product/ui/Product"
import { ProductItemData } from "features/product/list-products/types"
import ProductList from "features/product/list-products/ui/ProductList"
import { Route, Routes, useMatch } from "react-router-dom"
import { allProducts } from "features/product/list-products/data/allProducts"
import { productToDisplay } from "features/product/display-product/data/productToDisplay"
import { productToAddToCart } from "features/cart/add-cart-product/data/productToAddToCart"






const App = (): ReactElement => {

const matchProductPage = useMatch('/product/:id');


  const[products,setProducts]= useState<ProductItemData[]>(allProducts)
  const[product,setProduct]= useState<ProductData>(productToDisplay['1'])
  const[cartProducts,setCartProducts]= useState<CartProductItemData[]>([])
  const[cartcount,setCartcount]= useState(0)

  const onSubmit = (search: string): void => {
        const filteredProducts = allProducts.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ,
    );
    setProducts(filteredProducts);
  }

  const changeURL = (productId: CartProductItemData["id"]): void => {
    setProduct(productToDisplay[productId]);
   };
   

  useEffect(() => {
    const productIdInURL = matchProductPage?.params.id;
    if (productIdInURL) {
    changeURL(productIdInURL);
    }
   }, [matchProductPage]);

   const cartCount = cartProducts.length;
   useEffect(() => {
    setCartcount(cartCount);
   }, [cartProducts]);


   const addToCart = (productId : string): void => {
      const isProductInCart = cartProducts.some((product) => product.id === productId);
      if (!isProductInCart) {
        const productToAdd = productToAddToCart[productId];
        setCartProducts([...cartProducts, productToAdd]);
        setCartcount(cartcount + 1);
      }
  }

  const removeFromCart = (productId: string): void => {
    const cartProductsWithoutTheRemovedOne = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(cartProductsWithoutTheRemovedOne);
    setCartcount(cartcount - 1);
  }

  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route
          path="/product/:id"
          element={<Product product={product} addToCart={() =>addToCart(product.id)} />}  />
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