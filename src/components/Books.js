import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ books, loading }) => {



    if (loading) {
        return <h2>Loading ...</h2>
    }
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publisher</th>
                </tr>
            </thead>

            <tbody>

                {books.map(book => (
                    <tr key={book.id}>
                        <td style={itemStyle}><Link to={{ pathname: `/detail/${book.id}` }}>{book.title}</Link></td>
                        <td style={itemStyle}>{book.author}</td>
                        <td style={itemStyle}>{book.publisher}</td>
                    </tr>
                ))
                }

            </tbody >
        </table >


    )
}

var itemStyle = {
    cursor: 'pointer',
}

export default Books;
