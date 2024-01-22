import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ShoppingCartRounded } from "@mui/icons-material"

const Navbar = ({ cartList, productList, handleClick }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-200 sticky top-0 h-16">
      <Link className="font-bold italic" to="/">FakeShop</Link>
      <div>
        <input className="p-1 rounded-xl w-60 lg:w-96" type="search" value={searchInput} placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)} />
        <div className="fixed flex flex-col bg-white">
          {productList.filter((product) => {
            if (searchInput.toLowerCase() === product.title.slice(0, searchInput.length).toLowerCase() && searchInput !== "") {
              return true;
            }
          }).map((product) =>
            <Link to={`/item/${product.id}`} onClick={() => setSearchInput("")} className="w-60 lg:w-96 border-2 border-b-black" key={product.id + product.title}>{product.title}</Link>
          )}
        </div>
      </div>
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
