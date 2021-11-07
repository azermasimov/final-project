import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";

class SearchBar extends Component {
  state = { term: "" };

  renderText({ language }) {
    return language === "english" ? "Search Product" : "Mehsul Axtar";
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            <LanguageContext.Consumer>
              {this.renderText}
            </LanguageContext.Consumer>
          </label>
          <br />
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
