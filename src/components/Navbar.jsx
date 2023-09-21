import { Link } from "react-router-dom";
import "../css/style.css";

function Navbar() {
  return (
    <nav>
      <Link to="/#top" className="site-title">
        Henry.dev
      </Link>
      <ul>
        <li>
          <Link to="/#top">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
