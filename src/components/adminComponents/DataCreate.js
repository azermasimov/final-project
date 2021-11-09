import { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../../actions";
import ProductForm from "./ProductForm";

class DataCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createProduct(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Product</h3>
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createProduct })(DataCreate);
