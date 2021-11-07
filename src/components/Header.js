import { Link } from "react-router-dom";
import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Header extends Component {
  renderProductText({ language }) {
    return language === "english" ? "Products" : "Mehsullar";
  }

  renderAboutText({ language }) {
    return language === "english" ? "About" : "Haqqinda";
  }

  renderContactText({ language }) {
    return language === "english" ? "Contact" : "Elaqe";
  }

  renderLoginText({ language }) {
    return language === "english" ? "Login" : "Daxil ol";
  }

  renderCartText({ language }) {
    return language === "english" ? "Cart" : "Sebet";
  }

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
              <Link to="/products">
                <LanguageContext.Consumer>
                  {this.renderProductText}
                </LanguageContext.Consumer>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <LanguageContext.Consumer>
                  {this.renderAboutText}
                </LanguageContext.Consumer>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <LanguageContext.Consumer>
                  {this.renderContactText}
                </LanguageContext.Consumer>
              </Link>
            </li>
            <li>
              <button>
                <Link to="/login">
                  <LanguageContext.Consumer>
                    {this.renderLoginText}
                  </LanguageContext.Consumer>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/cart">
                  <LanguageContext.Consumer>
                    {this.renderCartText}
                  </LanguageContext.Consumer>
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
