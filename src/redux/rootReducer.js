import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
    products: productReducer, 
    carts: cartReducer,
    pages: pageReducer});

export default rootReducer;