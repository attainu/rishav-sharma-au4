function todoReducer(state =[], action){
    if(action.type === "ADD_TODO") {
        state = [...state, action.date]
    }
    if(action.type ==="COMPLETED") {
        state = state.map(obj => {
            if(obj.todo ===action.data){
                obj.completed = !obj.completed
            }
            return obj;
        })
    }
    if(action.type === "DELETE_TODO") {
        state = state.filter(obj => obj.todo !== action.data)
    }
    return state
}
export default todoReducer
    