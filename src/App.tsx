import Header from "common/layout/Header"
import { CartProductItemData } from "features/cart/list-cart-products/types"
import CartProductList from "features/cart/list-cart-products/ui/CartProductList"
import { ProductData } from "features/product/display-product/types"
import Product from "features/product/display-product/ui/Product"
import { ProductItemData } from "features/product/list-products/types"
import ProductList from "features/product/list-products/ui/ProductList"
import { useEffect, useState } from "react"
import { Route, Routes, useMatch } from "react-router-dom"





const removeFromCart = () => {
  console.log("remove fron cart")
}




const cartcount = 10

 



const cartProduct: Omit<CartProductItemData, 'id'> = {
  name: 'Mobile phone',
  picture: '',
  price: 1000,
}


 
 

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

  const productToDisplay: Record<string, ProductData> = {
    '1': {
          id: '1',
          name: 'Mobile phone',
          picture: '',
          price: 1000,
          description:
          'The mobile phone is a superior smartphone that offersunmatched performance',
    },
    '2': {
          id: '2',
          name: 'Laptop',
          picture: '',
          price: 1500,
          description:
          'The Laptop is a superior laptop that offers unmatched performance',
          },
    '3': {
            id: '3',
            name: 'Tablet',
            picture: '',
            price: 500,
            description:
            'The Tablet is a superior tablet that offers unmatchedperformance',
    },
   };

   const productToAddToCart: Record<string, CartProductItemData> = {
    '1': {
    id: '1',
    name: 'Mobile phone',
    picture: '',
    price: 1000,
    },
    '2': {
    id: '2',
    name: 'Laptop',
    picture: '',
    price: 1500,
    },
    '3': {
    id: '3',
    name: 'Tablet',
    picture: '',
    price: 500,
    },
   };
   

   const matchProductPage = useMatch('/product/:id');


  const[products,setProducts]= useState<ProductItemData[]>(allProducts)
  const[product,setProduct]= useState<ProductData>(productToDisplay['1'])
  const[cartProducts,setCartProducts]= useState<CartProductItemData[]>([])

  const onSubmit = (search: string): void => {
        const filteredProducts = allProducts.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ,
    );
    setProducts(filteredProducts);
  }

  const changeURL = (productId: string): void => {
    setProduct(productToDisplay[productId]);
   };
   

  useEffect(() => {
    const productIdInURL = matchProductPage?.params.id;
    if (productIdInURL) {
    changeURL(productIdInURL);
    }
   }, [matchProductPage]);


   const addToCart = (productId : string): void => {
      const isProductInCart = cartProducts.some((product) => product.id === productId);
      if (!isProductInCart) {
        const productToAdd = productToAddToCart[productId];
        setCartProducts([...cartProducts, productToAdd]);
      }
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