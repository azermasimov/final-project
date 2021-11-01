import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/index";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div style={{ float: "right" }}>
        <div>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>You have {cartItems.length} in the Cart</div>
          )}
        </div>
        <div>
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img
                      style={{ width: "40px", height: "35px" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div>$ {`${item.price} x ${item.count}`}</div>
                    <button onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          Total:
          {cartItems.reduce((a, b) => a + b.price * b.count, 0)}
        </div>
        <div>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
