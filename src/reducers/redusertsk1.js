
const initialState = [
    "text 1",
    "text 2"
]

export default function playlist(state = initialState, action) {
    if (action.type === "ADD_TRACK") {
        return [
            ...state,
            action.playload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        state.splice(action.playload, 1)
        return [...state];
    }
    return state
}