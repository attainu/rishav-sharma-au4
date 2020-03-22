function todoReducer(state =[], action){
    if(action.type === "ADD_TODO") {
        state = [...state, action.date]
        console.log(state)

    }
    return state
}
export default todoReducer
    