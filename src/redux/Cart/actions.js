import { CANON, DELL, VIVOBOOK } from "./actionTypes"

export const vivoBookClick = () => {
    return {
        type: VIVOBOOK,
        payload: {
            quantity: 1,
            price: 35500
        }
    }
}
export const dellClick = () => {
    return {
        type: DELL,
        payload: {
            quantity: 1,
            price: 9300
        }
    }
}
export const canonClick = () => {
    return {
        type: CANON,
        payload: {
            quantity: 1,
            price: 36500
        }
    }
}