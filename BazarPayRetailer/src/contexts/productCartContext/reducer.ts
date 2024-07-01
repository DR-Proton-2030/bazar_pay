import actions from "./store";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.SET_PRODUCTCART:
      return {
        ...state,
        products: action.payload.products,
      };
    case actions.RESET_PRODUCTCART:  // New action case
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default reducer;
