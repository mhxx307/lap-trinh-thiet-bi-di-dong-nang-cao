import { FETCH_BOOKS, SET_BOOK_INPUT, ADD_BOOK } from "./constants";

export const setBookInput = (payload) => ({
    type: SET_BOOK_INPUT,
    payload,
});

export const fetchBooks = (payload) => ({
    type: FETCH_BOOKS,
    payload,
});

export const addBook = (payload) => ({
    type: ADD_BOOK,
    payload,
});
