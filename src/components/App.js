import React, { Component } from "react";
import NavBar from "./NavBar";
import ProductsList from "./products/ProductsList";
import SearchBar from "./products/SearchBar";
import unsplash from "../apis/unsplash";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Cart from "./products/Cart";

class App extends Component {
  state = {
    photos: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results[5].urls.regular);
    this.setState({
      photos: response.data.results,
    });
  };

  render() {
    return (
      <div>
        <LanguageStore>
          <NavBar />
          <div>
            <LanguageSelector />
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} />

          {this.state.photos.length > 0 ? (
            <ProductsList photos={this.state.photos} />
          ) : null}
          <Cart />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
