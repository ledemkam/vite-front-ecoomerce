import type { ChangeEvent,ReactElement,FormEvent } from "react"
import {  useState } from "react"
import { Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import useOnSubmit from "../../hooks/useOnsubmit"



const ProductSearch = (): ReactElement => {
const {onSubmit} = useOnSubmit()
 const[search,setSearch] = useState("")



const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(search)
  }
  return (
    <form onSubmit={handleSubmit} className="flex w-full">
        <input
            type="search"
            id="product-search"
            name="product-search"
            placeholder="produkt suchen"
            aria-label="produkt suchen"
            value={search}
            onChange={handleChange}
            className="w-full"
        />
        <IconButton aria-label="Suchen" type="submit">
           <Search />
        </IconButton>
    </form>
  )
}
export default ProductSearch