import React from "react";
import { connect } from "react-redux";
import { AddToCart, DeleteSecret, SetEditID } from "../actions/actions";

const mapStateToProps = state => {
  return {
    secrets: state.secrets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: secret => dispatch(AddToCart(secret)),
    onDeleteSecret: id => dispatch(DeleteSecret(id)),
    onSetEditID: id => dispatch(SetEditID(id))
  };
};

const Shop = props => (
  <div>
    <h1 className="cover-heading">Secrets...</h1>
    <button
      className="btn btn-secondary form-group"
      onClick={() => props.history.push("/create")}
    >
      New Secret
    </button>
    {props.secrets.map(s => (
      <div
        key={s._id}
        className="row d-flex justify-content-between form-group"
      >
        {s.title}
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => props.onAddToCart(s)}
          >
            ${s.price}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              props.onSetEditID(s._id);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.onDeleteSecret(s._id)}
          >
            Redact
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
