import PropTypes from 'prop-types'

const Card = ({ title, price, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="Product illustration" />
      <p>{price}</p>
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
