/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
import { initialState } from "./initialState";

const findProductInCart = (state, action) => {
  return state.find((p) => p.productId === action.payload.id);
};

const nextId = (state) => {
  return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = findProductInCart(state, action);
      if (product) {
        return state.map((p) => {
          if (p.productId === product.productId) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          } else {
            return p;
          }
        });
      } else {
        return [
          ...state,
          {
            ...action.payload,
            id: nextId(state),
            quantity: 1,
            productId: action.payload.id,
          },
        ];
      }
    case REMOVE_FROM_CART:
      return state.filter((p) => p.id !== action.payload);

    case INCREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });

    case DECREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });

    default:
      return state;
  }
};

export default cartReducer;
