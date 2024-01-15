import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Navbar = ({ handleClick }) => {
  return (
    <nav className="flex justify-between p-4 bg-slate-200 sticky top-0">
      <Link to="/">FakeShop</Link>
      <button type="button" onClick={handleClick}>Cart</button>
    </nav>
  )
}

Navbar.propTypes = {
  handleClick: PropTypes.func,
}

export default Navbar;
