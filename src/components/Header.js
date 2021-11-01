import { Link } from "react-router-dom";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <h1>E-commerce App</h1>
              </Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/cart">Cart</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
