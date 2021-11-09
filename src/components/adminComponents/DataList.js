import { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import Data from "./Data";

class DataList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map((product, index) => (
      <Data key={index} product={product} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Datas</h2>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps, { fetchProducts })(DataList);
