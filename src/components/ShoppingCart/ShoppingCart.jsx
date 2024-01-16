import PropTypes from "prop-types"
import { CloseRounded } from "@mui/icons-material";

const ShoppingCart = ({ handleClick }) => {
  return (
    <div className="fixed top-0 flex h-screen w-screen">
      <div className="origin-top-left animate-slidein bg-black opacity-50 flex-auto w-0" onClick={handleClick}></div>
      <div className="flex flex-col items-center origin-top-right animate-slidein w-screen md:w-80 bg-fuchsia-200">
        <div className="flex justify-start w-full">
          <button className="m-2" type="button" onClick={handleClick}><CloseRounded /></button>
        </div>
        <button className="p-3 bg-sky-50 border-cyan-50 border-2 rounded-lg max-w-72" type="button">CHECKOUT</button>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  handleClick: PropTypes.func,
}

export default ShoppingCart;
