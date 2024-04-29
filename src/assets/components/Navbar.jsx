import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <>
      <h1 className="m-2">Welcome to Eshop</h1>

      <ul className="d-flex gap-3">
        <li className="list-unstyled ">
          <Link className="text-decoration-none" to="/"> Home </Link>
        </li>
        <li className="list-unstyled ">
          <Link className="text-decoration-none" to="/shop"> Shop </Link>
        </li>
        <li className="list-unstyled ">
          <Link className="text-decoration-none" to="/contact"> Contact Us </Link>
        </li>
      </ul>
    </>
  );
}
