import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    return (
        <div>
            <h2 className='text-[40px] font-bold text-center mb-9'>Books</h2>

{/* cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map((book, ind) => {
                        return (
                            <BookCard key={ind} book={book}></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;