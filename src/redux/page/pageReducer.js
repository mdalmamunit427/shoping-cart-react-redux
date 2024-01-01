const initialStae = {
  home: true,
};
const pageReducer = (state = initialStae, action) => {
  switch (action.type) {
    case "HOME":
      return { home: true };
    case "CART":
      return { home: false };
    default:
      return state;
  }
};

export default pageReducer;
