import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ShoppingCartRounded } from "@mui/icons-material"
import SearchBar from "../SearchBar/SearchBar"

const Navbar = ({ cartList, productList, handleClick }) => {

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-200 sticky top-0 h-16">
      <Link className="font-bold italic" to="/">FakeShop</Link>
      <SearchBar productList={productList} />
      <button className="flex gap-2" type="button" onClick={handleClick}>
        <ShoppingCartRounded />
        <div className="border-2 border-gray-500 w-6 h-6 flex justify-center items-center">{cartList.length}</div>
      </button>
    </nav >
  )
}

Navbar.propTypes = {
  cartList: PropTypes.array,
  productList: PropTypes.array,
  handleClick: PropTypes.func,
}

export default Navbar;
