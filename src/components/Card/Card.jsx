import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({ id, title, price, image, handleAdding }) => {
  const [qty, setQty] = useState(1);
  return (
    <div className="w-72 h-96 p-3 rounded-xl border-4 border-stone-400 bg-stone-100 flex flex-col justify-center items-center text-center gap-1">
      <Link to={`/item/${id}`}>
        <h3 className="text-xl h-14 overflow-hidden">{title}</h3>
      </Link>
      <Link to={`/item/${id}`}>
        <img className="w-auto h-44" src={image} alt="Product illustration" />
      </Link>
      <p className="text-xl">${price}</p>
      <div className="flex gap-3">
        <label htmlFor={id}>Quantity:</label>
        <select name="qty" id={id} onChange={(e) => setQty(e.target.value)}>
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
        </select>
      </div>
      <button className="rounded-xl bg-green-300 p-2 hover:bg-green-400 active:bg-green-500" type="button" onClick={() => handleAdding(id, title, qty, image, price)}>Add to cart</button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  handleAdding: PropTypes.func,
}

export default Card
