import { products } from "../../utils/data";
const initialState = {
  products: products,
  carts: [],
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "ADD_TO_CART":
      console.log(payload);
      const itemInCart = state.carts.find((item) => item.id === payload);
      const newItemCart = state.products.find((item) => item.id === payload);
      if (!itemInCart) {
        return {
          ...state,
          carts: [...state.carts, newItemCart],
        };
      } else {
        return {
          state,
        };
      }
    case "INCREMENT":
      console.log(payload);
      const originalPrice = state.products.find(
        (item) => item.id === payload
      ).price;

      const incCarts = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: incCarts,
      };

    case "DECREMENT":
      console.log(payload);
      const decOrignalPrice = state.products.find(
        (item) => item.id === payload
      ).price;

      const decCarts = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price - decOrignalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: decCarts,
      };
    case "REMOVE":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };
      case "RESET":
        return{
          ...state,
          carts: []
        }
  }
};

export default productReducer;
