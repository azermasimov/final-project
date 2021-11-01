import { Component } from "react";
import Products from "./products/Products";
// import CategoryFilter from "./products/CategoryFilter";
import Cart from "./products/Cart";
import NavBar from "./NavBar";
import SearchBar from "./products/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <CategoryFilter count={this.state.products.length} /> */}
        <Products></Products>
        <Cart />
      </div>
    );
  }
}

export default App;
