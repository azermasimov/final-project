import React, { Component } from "react";

class CategoryFilter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count} Products</div>
      </div>
    );
  }
}

export default CategoryFilter;
