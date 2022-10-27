const initState = {
    todoInput: "",
    todoList: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "set_todo_input":
            return {
                ...state,
                todoInput: action.payload,
            };
        case "add_todo":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case "delete_todo":
            const newTodo = state.todoList;
            newTodo.splice(action.payload, 1);
            return {
                ...state,
                todoList: newTodo,
            };
        default:
            throw new Error("Unknown action type");
    }
};

export { initState };
export default reducer;
