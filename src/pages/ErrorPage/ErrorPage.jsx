import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center m-5">
      <h1 className="text-3xl">This route doesn&apos;t exist! </h1>
      <Link className="text-3xl text-cyan-600 hover:underline">You can go back to the home page clicking here!</Link>
    </div>
  )
}

export default ErrorPage;
