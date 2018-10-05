import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_SECRET,
  LOAD_SECRETS
} from "../actions/types";

const initialState = {
  secrets: [],
  cart: []
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
        cart: [...state.cart.filter(x => x.cartId !== action.id)]
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
    default:
      return state;
  }
};
