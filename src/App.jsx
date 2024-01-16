import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import "./index.css";
import PropTypes from "prop-types";

const App = ({ children }) => {
  const [cartHidden, setCartHidden] = useState(true);
  const [productList, setProductList] = useState([]);
  const [buyList, setBuyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json()
      })
      .then(json => setProductList([json]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, []);

  const handleCartClick = () => {
    if (cartHidden) {
      setCartHidden(false);
    } else {
      setCartHidden(true);
    }
  }

  if (error) return <p>A network error was encountered</p>
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-blue-400 border-sky-50 border-8 rounded-full w-20 h-20"></div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar handleClick={handleCartClick} />
      {children}
      {cartHidden ?
        null :
        <ShoppingCart handleClick={handleCartClick} />
      }
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App;
