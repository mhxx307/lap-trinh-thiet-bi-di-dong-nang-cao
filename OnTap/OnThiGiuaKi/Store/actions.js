import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload) => {
    return {
        type: SET_TODO_INPUT,
        payload,
    };
};

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};
