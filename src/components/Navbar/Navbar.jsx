import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ShoppingCartRounded } from "@mui/icons-material"

const Navbar = ({ handleClick }) => {
  return (
    <nav className="flex justify-between p-4 bg-slate-200 sticky top-0">
      <Link className="font-bold italic" to="/">FakeShop</Link>
      <button type="button" onClick={handleClick}><ShoppingCartRounded /></button>
    </nav>
  )
}

Navbar.propTypes = {
  handleClick: PropTypes.func,
}

export default Navbar;
