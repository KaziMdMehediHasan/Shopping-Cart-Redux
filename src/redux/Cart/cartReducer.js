import { CANON, DELL, VIVOBOOK } from "./actionTypes";

const initialState = {
    totalItem: 0,
    totalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIVOBOOK:
            return {
                ...state,
                totalItem: state.totalItem + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.price
            }
        case DELL:
            return {
                ...state,
                totalItem: state.totalItem + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.price
            }
        case CANON:
            return {
                ...state,
                totalItem: state.totalItem + action.payload.quantity,
                totalPrice: state.totalPrice + action.payload.price,
            }

        default:
            return state;
    }

}

export default cartReducer;