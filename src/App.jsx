import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import "./index.css";
import Home from './pages/Home/Home';
import Shopping from './pages/Shopping/Shopping';

const App = () => {
  const [cartHidden, setCartHidden] = useState(true);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json()
      })
      .then(json => setProductList(json))
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

  const handleAddingToCart = (title, qty, image, price) => {
    let exists = cartList.filter((product) => {
      return Object.values(product).includes(title);
    }).length > 0;

    if (exists) {
      const updatedCart = cartList.map((product) => {
        if (product.title === title) {
          return {
            ...product,
            qty: Number(qty) + Number(product.qty),
          }
        }
        return product;
      });
      setCartList(updatedCart);
    } else {
      setCartList((cartList) => ([...cartList, { title, qty: Number(qty), image, price: Number(price) }]));
    }
  }

  const onQtyChange = (e) => {
    const updatedCart = cartList.map((product) => {
      if (product.image === e.target.id) {
        return {
          ...product,
          qty: Number(e.target.value),
        }
      }
      return product;
    })
    setCartList(updatedCart);
  }

  if (error) return <p>A network error was encountered</p>
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-blue-400 border-sky-50 border-8 rounded-full w-20 h-20"></div>
      </div>
    );
  }

  console.log(cartList);
  return (
    <div className="">
      <Navbar handleClick={handleCartClick} />
      {window.location.pathname === "/" ?
        <Home /> :
        window.location.pathname === "/shop" ?
          <Shopping productList={productList} handleAdding={handleAddingToCart} /> :
          null}
      {cartHidden ?
        null :
        <ShoppingCart cartList={cartList} handleClick={handleCartClick} handleChange={onQtyChange} />
      }
    </div>
  )
}

export default App;
