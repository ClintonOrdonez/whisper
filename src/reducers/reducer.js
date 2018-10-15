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
} from "../actions/types";

const initialState = {
  secrets: [],
  cart: [],
  editID: "",
  username: null,
  token: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.item);
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, { ...action.item, cartId: action.cartId }]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(s => s.cartId !== action.id)]
      };
    case CREATE_SECRET:
      return {
        ...state,
        secrets: [...state.secrets, action.data]
      };
    case LOAD_SECRETS:
      return {
        ...state,
        secrets: action.secrets
      };
    case DELETE_SECRET:
      return {
        ...state,
        cart: [...state.cart.filter(s => s._id !== action.data._id)],
        secrets: [...state.secrets.filter(s => s._id !== action.data._id)]
      };
    case EDIT_SECRET:
      return {
        ...state,
        //cart: [...state.cart.filter(s => s._id !== action.data._id)],
        secrets: [
          ...state.secrets.filter(s => s._id !== action.data._id),
          action.data
        ]
      };
    case SET_EDIT_ID:
      return {
        ...state,
        editID: action.id
      };
    case USER_LOGIN:
      return {
        ...state,
        username: action.username,
        token: action.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        username: null,
        token: null
      };
    default:
      return state;
  }
};
