import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ShoppingCartRounded } from "@mui/icons-material"

const Navbar = ({ cartList, handleClick }) => {
  return (
    <nav className="flex justify-between p-4 bg-slate-200 sticky top-0">
      <Link className="font-bold italic" to="/">FakeShop</Link>
      <button type="button" onClick={handleClick}>
        {cartList.length > 0 ?
          <div className="w-2 h-2 relative top-2 left-4 rounded-full bg-cyan-900 animate-ping"></div> :
          null
        }
        <ShoppingCartRounded />
      </button>
    </nav>
  )
}

Navbar.propTypes = {
  cartList: PropTypes.array,
  handleClick: PropTypes.func,
}

export default Navbar;
