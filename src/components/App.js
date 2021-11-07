import React, { Component } from "react";
import NavBar from "./NavBar";
import Products from "./products/Products";
import SearchBar from "./products/SearchBar";
import unsplash from "../apis/unsplash";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

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
          <div>
            <LanguageSelector />
          </div>
          <NavBar />
          <SearchBar onSubmit={this.onSearchSubmit} />
          {this.state.photos.length > 0 ? (
            <Products photos={this.state.photos} />
          ) : null}
        </LanguageStore>
      </div>
    );
  }
}

export default App;
