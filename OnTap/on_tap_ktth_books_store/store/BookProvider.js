import React, { useEffect, useState } from "react";
import { BookContext } from "./Context";
import { request } from "../utils/request";

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const fetchBooks = async () => {
        try {
            const booksData = await request.get("/books");
            setBooks(booksData.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchBookById = async (id) => {
        try {
            const book = await request.get(`/books/${id}`);
            setBooks([book.data]);
        } catch (error) {
            console.log(error);
            Alert.alert("Maybe you have a wrong id?");
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <BookContext.Provider
            value={{
                books,
                setBooks,
                fetchBooks,
                name,
                setName,
                url,
                setUrl,
                fetchBookById,
            }}
        >
            {children}
        </BookContext.Provider>
    );
}

export default Provider;
