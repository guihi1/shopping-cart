import PropTypes from "prop-types";
import { useState } from "react";
import { Star } from "@mui/icons-material";

const Item = ({ product, handleAdding }) => {
  const [qty, setQty] = useState(1);

  const stars = [];
  for (let i = 5; i > 0; i--) {
    if (Math.round(product.rating.rate) >= i) {
      stars.unshift(<Star color="warning" key={i} />);
    } else {
      stars.unshift(<Star color="disabled" key={i} />);
    }
  }

  return (
    <div className="flex m-5 flex-col lg:flex-row">
      <img src={product.image} className="max-h-screen" />
      <div className="m-5 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="flex items-center">
          <p className="m-2">{product.rating.rate}</p>
          {stars}
          <p className="m-2">({product.rating.count})</p>
        </div>
        <h2 className="text-3xl">${product.price}</h2>
        <p>{product.description}</p>
        <div className="flex gap-3">
          <label htmlFor={product.description}>Quantity:</label>
          <select
            name="qty"
            id={product.description}
            onChange={(e) => setQty(e.target.value)}
          >
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
        <button
          className="rounded-xl bg-green-300 p-2 hover:bg-green-400 active:bg-green-500"
          type="button"
          onClick={() =>
            handleAdding(
              product.id,
              product.title,
              qty,
              product.image,
              product.price,
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.object,
  handleAdding: PropTypes.func,
};

export default Item;
