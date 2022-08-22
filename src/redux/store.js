import { createStore } from "redux";
import cartReducer from "./Cart/cartReducer";


const store = createStore(cartReducer);

export default store;