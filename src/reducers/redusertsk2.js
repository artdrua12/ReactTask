
const initialState = {
    curentValue: 2500
}


export default function playlist(state = initialState, action) {
    if (action.type === "ADD_VALUE") {
        return {
            curentValue:action.playload     
        };
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state
    }
    return state
}