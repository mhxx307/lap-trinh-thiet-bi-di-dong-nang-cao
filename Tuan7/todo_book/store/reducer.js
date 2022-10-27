<script src="http://localhost:8097"></script>;
import { ADD_BOOK, FETCH_BOOKS, SET_BOOK_INPUT } from "./constants";

const initState = {
    books: [],
    bookInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_BOOK_INPUT:
            return {
                ...state,
                bookInput: action.payload,
            };
        case FETCH_BOOKS:
            return {
                ...state,
                books: [...action.payload],
            };
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        default:
            throw new Error("Invalid action type");
    }
}

export { initState };
export default reducer;
