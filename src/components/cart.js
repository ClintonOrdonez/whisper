import React from "react";
import { connect } from "react-redux";
import { RemoveFromCart } from "../actions/actions";

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: id => dispatch(RemoveFromCart(id))
  };
};

const Cart = props => (
  <div>
    <h1 className="cover-heading">
      Cart: ${props.cart.reduce((sum, x) => sum + x.price, 0)}
    </h1>
    {props.cart.map(s => (
      <div
        key={s.cartId}
        className="row d-flex justify-content-between form-group"
      >
        <span>{s.title}</span>
        <div className="d-flex justify-content-between">
          <span>${s.price}</span>
          <button
            className="btn btn-secondary"
            onClick={() => props.onRemoveItem(s.cartId)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
