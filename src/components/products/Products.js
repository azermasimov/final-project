import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { addToCart } from "../../actions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        {!this.props.products ? (
          <div>Loading... </div>
        ) : (
          <ul>
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div>
                  <a href={"#" + product._id}>
                    <img
                      key={product._id}
                      src={product.image}
                      style={{ width: "150px", height: "190px" }}
                      alt={product.description}
                    />
                    <p>{product.title}</p>
                  </a>
                  <div>
                    <div>{`$ ${product.price}`}</div>
                    <button onClick={() => this.props.addToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
