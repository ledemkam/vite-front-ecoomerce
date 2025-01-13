import type { ChangeEvent,ReactElement,FormEvent } from "react"
import {  useState } from "react"
import { Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"

type Props = {
    onSubmit: (search: string) => void
}

const ProductSearch = ({onSubmit}: Props): ReactElement => {

 const[search,setSearch] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(search)
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="search"
            id="product-search"
            name="product-search"
            placeholder="produkt suchen"
            aria-label="produkt suchen"
            value={search}
            onChange={handleChange}
        />
        <IconButton aria-label="Suchen" type="submit">
           <Search />
        </IconButton>
    </form>
  )
}
export default ProductSearch