import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_SECRET,
  LOAD_SECRETS,
  DELETE_SECRET,
  EDIT_SECRET,
  SET_EDIT_ID,
  USER_LOGIN,
  USER_LOGOUT
} from "./types";
import axios from "axios";

let apiUrl = "http://localhost:8080/secrets";
let userUrl = "http://localhost:8080/users";

let nextCartId = 0;

export const AddToCart = secret => ({
  type: ADD_TO_CART,
  item: secret,
  cartId: nextCartId++
});

export const RemoveFromCart = id => ({
  type: REMOVE_FROM_CART,
  id: id
});

export const CreateSecret = (title, price) => {
  return dispatch => {
    return axios.post(apiUrl, { title, price }).then(response => {
      dispatch(createSecretSuccess(response.data));
    });
  };
};

export const createSecretSuccess = data => ({
  type: CREATE_SECRET,
  data
});

export const FetchSecrets = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => dispatch(fetchSecretsSuccess(response.data)));
  };
};

export const fetchSecretsSuccess = secrets => {
  return {
    type: LOAD_SECRETS,
    secrets
  };
};

export const DeleteSecret = id => {
  return dispatch => {
    return axios.delete(apiUrl + "/" + id).then(response => {
      dispatch(deleteSecretSuccess(response.data));
    });
  };
};

export const deleteSecretSuccess = data => ({
  type: DELETE_SECRET,
  data
});

export const EditSecret = secret => {
  return dispatch => {
    return axios.put(apiUrl + "/" + secret._id, secret).then(response => {
      dispatch(editSecretSuccess(response.data));
    });
  };
};

export const editSecretSuccess = data => ({
  type: EDIT_SECRET,
  data
});

export const SetEditID = id => ({
  type: SET_EDIT_ID,
  id
});

export const UserLogin = (username, password) => {
  return dispatch => {
    return axios
      .post(userUrl + "/signin", { username: username, password: password })
      .then(response => {
        dispatch(userLoginSuccess(response.data.username, response.data._id));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const userLoginSuccess = (username, token) => {
  return {
    type: USER_LOGIN,
    username: username,
    token: token
  };
};

export const UserLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
