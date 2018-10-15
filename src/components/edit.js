import React from "react";
import { connect } from "react-redux";
import { EditSecret } from "../actions/actions";

const mapStateToProps = state => {
  return {
    id: state.editID,
    secret: state.secrets.filter(s => s._id === state.editID)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditSecret: secret => dispatch(EditSecret(secret))
  };
};

const Edit = props => {
  let newTitle;
  let newPrice;

  return (
    <div>
      <div className="form-group">{props.id}</div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder={props.secret.title}
          ref={t => (newTitle = t)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder={props.secret.price}
          ref={p => (newPrice = p)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-secondary"
          onClick={() => {
            props.onEditSecret({
              ...props.secret,
              title: newTitle.value ? newTitle.value : props.secret.title,
              price: parseInt(
                newPrice.value ? newPrice.value : props.secret.title
              )
            });
            props.history.push("/secrets");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
