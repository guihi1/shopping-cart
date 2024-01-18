import PropTypes from 'prop-types'
import { Delete } from '@mui/icons-material'

const CartCard = ({ title, price, image, qty }) => {
  return (
    <div className="bg-stone-100 h-28 gap-2 justify-center items-center rounded-lg w-[22rem] border-2 border-stone-400 flex">
      <img className="h-20 w-auto" src={image} alt={title} />
      <h3 className="h-20 w-52 overflow-y-scroll">{title}</h3>
      <div>
        <h3>Price: ${price * qty}</h3>
        <div>
          <label htmlFor={image}>Quantity: </label>
          <input type="number" name="qty-cart" id={image} defaultValue={qty} min="1" max="10" />
        </div>
      </div>
      <div className="h-full flex items-start p-2"><Delete color="action" /></div>
    </div>
  )
}

CartCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  qty: PropTypes.number,
}

export default CartCard;
