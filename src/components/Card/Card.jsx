import PropTypes from 'prop-types'

const Card = ({ title, price, image }) => {
  return (
    <div className="max-w-72 flex flex-col justify-center items-center text-center gap-3">
      <h3 className="text-xl">{title}</h3>
      <img className="w-60 h-auto" src={image} alt="Product illustration" />
      <p className="text-xl">{price}</p>
      <div className="flex gap-3">
        <label htmlFor="qty">Quantity:</label>
        <select name="qty" id="qty">
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
      <button type="button">Add to cart</button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}

export default Card
