import React from 'react'
import ReactDom from 'react-dom'
import Book from './Book'
import books from './books'
import './index.css'

const BookList = () => {
    return (
        <section className='booklist'>
            {books.map((book) => (
                <Book key={book.id} {...book}>
                    <p>{book.pra}</p>
                </Book>
            ))}
        </section>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))
