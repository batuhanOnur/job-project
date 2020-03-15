import React, { useState, useEffect } from "react";
import axios from 'axios';
import Books from './Books';
import Pagination from './Pagination';



function BookList() {

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

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3 text-center">Book App</h1>
            <Books books={currentBooks} loading={loading} />
            <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
        </div>
    );
}

export default BookList;
