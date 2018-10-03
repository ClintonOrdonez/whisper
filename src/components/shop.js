import React from "react";
import { connect } from "react-redux";
import { AddToCart } from "../actions/actions";

const mapStateToProps = state => {
  return {
    secrets: state.secrets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: secret => dispatch(AddToCart(secret))
  };
};

const Shop = props => (
  <div>
    <h1 className="cover-heading">Secrets...</h1>
    {props.secrets.map(s => (
      <div key={s.id} className="row d-flex justify-content-between">
        {s.title}
        <button
          className="btn btn-default"
          onClick={() => props.onAddToCart(s)}
        >
          ${s.price}
        </button>
      </div>
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
