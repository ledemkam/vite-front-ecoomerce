import Header from "common/layout/Header"
import ProductItem from "features/product/list-products/ui/ProductItem"

const onSubmit = (search: string) => {
  console.log(search)

}

const cartcount = 10

const product = {
  name: 'Mobile phone',
  picture: '',
  price: 1000,
 };
 

const App = () => {
  return (
    <>
      <Header onSubmit={onSubmit} cartcount={cartcount} />
      <ProductItem product={product} />
    </>
  )
}
export default App