import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const SearchBar = ({ productList }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <input className="p-1 rounded-xl w-52 lg:w-96" type="search" value={searchInput} placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)} />
      <div className="fixed flex flex-col bg-white">
        {productList.filter((product) => {
          if (searchInput.toLowerCase() === product.title.slice(0, searchInput.length).toLowerCase() && searchInput !== "") {
            return true;
          }
        }).map((product) =>
          <Link to={`/item/${product.id}`} onClick={() => setSearchInput("")} className="w-60 lg:w-96 border-2 border-b-black hover:bg-neutral-100" key={product.id + product.title}>{product.title}</Link>
        )}
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  productList: PropTypes.array,
}

export default SearchBar;

