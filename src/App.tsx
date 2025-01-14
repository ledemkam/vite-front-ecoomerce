import Header from "common/layout/Header"
import { ProductItemData } from "features/product/list-products/types"
import ProductList from "features/product/list-products/ui/ProductList"

const onSubmit = (search: string) => {
  console.log(search)

}

const cartcount = 10

const products: ProductItemData[] = [
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
 
 

const App = () => {
  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <ProductList products={products} />
    </>
  )
}
export default App