import PropTypes from 'prop-types'
import { Delete } from '@mui/icons-material'

const CartCard = ({ title, price, image, qty, handleChange, handleRemove }) => {
  return (
    <div className="bg-stone-100 h-28 gap-2 justify-center items-center rounded-lg md:w-[22rem] border-2 border-stone-400 flex">
      <img className="h-20 w-auto" src={image} alt={title} />
      <h3 className="h-20 w-52 overflow-y-scroll flex items-center">{title}</h3>
      <div className="flex flex-col gap-2">
        <h3>Price: ${(price * qty).toFixed(2)}</h3>
        <div>
          <label htmlFor={image}>Quantity: </label>
          <select name="qty" value={qty} id={image} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value={qty}>{qty}</option>
          </select>
        </div>
      </div>
      <div className="h-full flex items-start p-2 cursor-pointer" onClick={() => handleRemove(title)}><Delete color="action" /></div>
    </div>
  )
}

CartCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  qty: PropTypes.number,
  handleChange: PropTypes.func,
  handleRemove: PropTypes.func,
}

export default CartCard;
