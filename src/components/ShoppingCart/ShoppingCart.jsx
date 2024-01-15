import PropTypes from "prop-types"

const ShoppingCart = ({ handleClick }) => {
  return (
    <div className="absolute right-0 top-0 w-screen md:w-80 bg-black h-screen">
      <button type="button" onClick={handleClick}>Close</button>
    </div>
  );
}

ShoppingCart.propTypes = {
  handleClick: PropTypes.func,
}

export default ShoppingCart;
