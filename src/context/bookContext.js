import React, { createContext, useEffect, useState } from "react";


export const BookContext = createContext();

export function BookProvider(props) {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);



    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            const res = await axios.get("https://5e6e46d05171ce0016084efb.mockapi.io/api/v1/books");
            setBooks(res.data);
            setLoading(false);
        }

        fetchBooks();
    }, []);


    /// Get current book
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    <BookContext.Provider value={{

    }}>

        {props.children}
    </BookContext.Provider>
}