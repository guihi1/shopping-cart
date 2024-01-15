import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import "./index.css";
import PropTypes from "prop-types";

const App = ({ children }) => {
  const [cartHidden, setCartHidden] = useState(true);

  const handleCartClick = () => {
    if (cartHidden) {
      setCartHidden(false);
    } else {
      setCartHidden(true);
    }
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
