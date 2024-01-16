import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-shop bg-cover flex flex-col gap-5 justify-center items-center h-[calc(100vh-36px)]">
      <h1 className="text-6xl m-5 backdrop-blur p-3 italic font-bold">Fake Shop</h1>
      <h2 className="text-2xl m-5 backdrop-blur p-3">This is a project trying to simulate a shopping page, no product is purchasable here</h2>
      <Link className="text-2xl m-5 border-2 border-indigo-500 bg-indigo-400 p-3 rounded-lg shadow-xl hover:scale-110 transition-transform duration-300 delay-75 hover:bg-indigo-600" to="/items">Shop now!</Link>
    </div>
  );
}

export default Home;
