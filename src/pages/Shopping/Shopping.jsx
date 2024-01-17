import PropTypes from "prop-types"
import Card from "../../components/Card/Card";

const Shopping = ({ productList }) => {
  console.log(productList)
  return (
    <div>
      {productList.map((product) =>
        <Card key={product.id} title={product.title} price={product.price} image={product.image} />
      )}
    </div>
  );
}

Shopping.propTypes = {
  productList: PropTypes.array,
}

export default Shopping;
