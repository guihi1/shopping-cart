import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../../components/Card/Card";

const Shopping = ({ productList, handleAdding }) => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <div className="m-5 text-center lg:m-10 lg:text-left">
        <label htmlFor="category">Category: </label>
        <select
          className="p-2 rounded-md ml-2"
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men&apos;s clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women&apos;s clothing</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-5 m-5 justify-center items-center">
        {productList
          .filter((product) => {
            if (category === product.category || category === "all") {
              return true;
            }
          })
          .map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              handleAdding={handleAdding}
            />
          ))}
      </div>
    </>
  );
};

Shopping.propTypes = {
  productList: PropTypes.array,
  handleAdding: PropTypes.func,
};

export default Shopping;
