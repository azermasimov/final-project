import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { addToCart } from "../../actions";
import LanguageContext from "../../contexts/LanguageContext";
import ProductImage from "./ProductImage";

class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderAddText({ language }) {
    return language === "english" ? "Add to Cart" : "Sebete elave et";
  }

  renderLoadingText({ language }) {
    return language === "english" ? "Loading..." : "Yuklenir...";
  }

  render() {
    return (
      <div>
        {!this.props.products ? (
          <div>
            <LanguageContext.Consumer>
              {this.renderLoadingText}
            </LanguageContext.Consumer>
          </div>
        ) : (
          <ul>
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div>
                  <a href={"#" + product._id}>
                    {this.props.photos.map((photo) => (
                      <ProductImage key={photo.urls.regular} photo={photo} />
                    ))}

                    <p>{product.title}</p>
                  </a>
                  <div>
                    <div>{`$ ${product.price}`}</div>
                    <button onClick={() => this.props.addToCart(product)}>
                      <LanguageContext.Consumer>
                        {this.renderAddText}
                      </LanguageContext.Consumer>
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

export default connect(mapStateToProps, { fetchProducts, addToCart })(
  ProductsList
);
