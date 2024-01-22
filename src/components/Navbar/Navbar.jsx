import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ShoppingCartRounded } from "@mui/icons-material"
import SearchBar from "../SearchBar/SearchBar"

const Navbar = ({ cartList, productList, handleClick }) => {

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-200 sticky top-0 h-16">
      <Link className="font-bold italic" to="/">FakeShop</Link>
      <SearchBar productList={productList} />
      <button type="button" onClick={handleClick}>
        {cartList.length > 0 ?
          <div className="w-2 h-2 relative left-6 bottom-2 rounded-full bg-cyan-900 animate-ping inline-block"></div> :
          null
        }
        <ShoppingCartRounded />
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
