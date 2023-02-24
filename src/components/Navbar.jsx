import { Link } from "react-router-dom";
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="nav-center">
        <Link to="/">
          {/* Placeholder title for now, will be replacing with img */}
          {/* <h3>Cocktails</h3> */}
          <img src={logo} alt="" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className="link-hover">
              Home
            </Link>
          </li>

          <li>
            <Link to="about" className="link-hover">
              About
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default Navbar;
