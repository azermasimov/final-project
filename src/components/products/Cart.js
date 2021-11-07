import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/index";
import LanguageContext from "../../contexts/LanguageContext";

class Cart extends Component {
  renderTotalText({ language }) {
    return language === "english" ? "Total" : "Umumi";
  }

  renderBuyText({ language }) {
    return language === "english" ? "Buy Now" : "Indi Al";
  }

  renderRemoveText({ language }) {
    return language === "english" ? "Remove" : "Sil";
  }

  renderEmptyText({ language }) {
    return language === "english" ? "Empty" : "Bos";
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div style={{ float: "right" }}>
        <div>
          {cartItems.length === 0 ? (
            <div>
              <LanguageContext.Consumer>
                {this.renderEmptyText}
              </LanguageContext.Consumer>
            </div>
          ) : (
            <div>You have {cartItems.length} in the Cart</div>
          )}
        </div>
        <div>
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  {/* <div>
                    <img
                      style={{ width: "40px", height: "35px" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div> */}
                  <div>
                    <div>{item.title}</div>
                    <div>$ {`${item.price} x ${item.count}`}</div>
                    <button onClick={() => this.props.removeFromCart(item)}>
                      <LanguageContext.Consumer>
                        {this.renderRemoveText}
                      </LanguageContext.Consumer>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <LanguageContext.Consumer>
            {this.renderTotalText}
          </LanguageContext.Consumer>
          {": "}
          <b>{cartItems.reduce((a, b) => a + b.price * b.count, 0)}</b>
        </div>
        <div>
          <button>
            <LanguageContext.Consumer>
              {this.renderBuyText}
            </LanguageContext.Consumer>{" "}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
