import PropTypes from "prop-types"
import { CloseRounded } from "@mui/icons-material";
import CartCard from "../CartCard/CartCard";

const ShoppingCart = ({ cartList, handleClick, handleChange, handleRemove }) => {
  return (
    <div className="fixed top-0 flex h-screen w-screen">
      <div className="origin-top-left animate-slidein bg-black opacity-50 flex-auto w-0" onClick={handleClick}></div>
      <div className="overflow-y-scroll flex flex-col items-center origin-top-right animate-slidein w-screen md:w-96 bg-slate-50">
        <div className="flex justify-start w-full">
          <button className="m-2" type="button" onClick={handleClick}><CloseRounded /></button>
        </div>
        <div className="flex-auto flex flex-col gap-3">
          {cartList.map((product) =>
            <CartCard key={product.title} title={product.title} price={product.price} image={product.image} qty={product.qty} handleChange={handleChange} handleRemove={handleRemove} />
          )}
        </div>
        <h2>Total Price: ${(cartList.reduce((acc, curr) => acc + curr.price * curr.qty, 0)).toFixed(2)}</h2>
        <button className="m-2 p-3 bg-sky-200 border-cyan-300 hover:bg-sky-400 hover:border-cyan-500 border-2 rounded-lg max-w-72" type="button">CHECKOUT</button>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.array,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  handleRemove: PropTypes.func,
}

export default ShoppingCart;
