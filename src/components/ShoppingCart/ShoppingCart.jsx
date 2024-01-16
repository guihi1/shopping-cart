import PropTypes from "prop-types"
import { CloseRounded } from "@mui/icons-material";

const ShoppingCart = ({ handleClick }) => {
  return (
    <div className="fixed top-0 flex h-screen w-screen">
      <div className="origin-top-left animate-slidein bg-black opacity-50 flex-auto w-0" onClick={handleClick}></div>
      <div className="origin-top-right animate-slidein w-screen md:w-80 bg-fuchsia-200">
        <button className="m-2" type="button" onClick={handleClick}><CloseRounded /></button>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  handleClick: PropTypes.func,
}

export default ShoppingCart;
