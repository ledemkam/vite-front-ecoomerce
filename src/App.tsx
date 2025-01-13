import Header from "common/layout/Header"

const onSubmit = (search: string) => {
  console.log(search)

}

const cartcount = 10

const App = () => {
  return (
    <Header onSubmit={onSubmit} cartcount={cartcount} />
  )
}
export default App