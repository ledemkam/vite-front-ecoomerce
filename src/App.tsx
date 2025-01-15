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
import { getProduct } from "features/product/display-product/api/getProducts"
import { searchProducts } from "features/product/search-products/api/searchProducts"
import { addProductToCart, getCartCount, getCartProducts, removeProductFromCart } from "features/cart/api/cart"
import { getProducts } from "features/product/list-products/api/getProducts"






const App = (): ReactElement => {

   const matchHomePage = useMatch('/');
   const matchProductPage = useMatch('/product/:id');
    const matchCartPage = useMatch('/cart');


  const[products,setProducts]= useState<ProductItemData[]>(allProducts)
  const[product,setProduct]= useState<ProductData>(productToDisplay['1'])
  const[cartProducts,setCartProducts]= useState<CartProductItemData[]>([])
  const[cartcount,setCartcount]= useState(0)

  const onSubmit = async (search: string): Promise<void> => {
    const filteredProducts = await searchProducts(search);
    setProducts(filteredProducts);
   };
   const addToCart = async (productId: string): Promise<void> => {
    const updatedCart = await addProductToCart(productId);
    setCartProducts(updatedCart.cartProducts);
    setCartcount(updatedCart.cartCount);
   };

   const removeFromCart = async (productId: CartProductItemData['id']): Promise<void> => {
 const updatedCart = await removeProductFromCart(productId);
 setCartProducts(updatedCart.cartProducts);
 setCartcount(updatedCart.cartCount);
};



const fetchProducts = async (): Promise<void> => {
  const initialProducts = await getProducts();
  setProducts(initialProducts);
 };

 const fetchCartCount = async (): Promise<void> => {
  const initialCartCount = await getCartCount();
  setCartcount(initialCartCount);
 };

 const fetchCartProducts = async (): Promise<void> => {
  const initialCartProducts = await getCartProducts();
  setCartProducts(initialCartProducts);
 };

  const fetchProduct = async (productId: string): Promise<void> => {
    const product = await getProduct(productId);
    setProduct(product);
   };
   


  useEffect(() => {
    const productIdInURL = matchProductPage?.params.id;
    if (productIdInURL) {
    fetchProduct(productIdInURL);
    }
   }, [matchProductPage]);

   const cartCount = cartProducts.length;
   useEffect(() => {
    setCartcount(cartCount);
   }, [cartProducts]);



   useEffect(() => {
    fetchCartCount();
   }, []);

   useEffect(() => {
    if(matchHomePage) fetchProducts();
   }, [matchHomePage]);

   useEffect(() => {
    if(matchCartPage) fetchCartProducts();
   }, [matchCartPage]);


 
 



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