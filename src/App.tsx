import ProductSearch from "features/product/search-products/ui/ProductSearch"

const onSubmit = (search: string) => {
  console.log(search)
}

const App = () => {
  return (
    <ProductSearch onSubmit={onSubmit} />
  )
}
export default App