import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    return (
        <div className="card playfair bg-base-100 shadow-sm rounded-2xl border border-[#13131326] p-2">
            <figure className='bg-[#F3F3F3] m-6 rounded-2xl py-8 px-24'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-xl' />
            </figure>

            <div className="card-body space-y-3">

                <div className='flex items-center gap-3'>
                    {book.tags.map((tag, ind) => (
                        <div key={ind} className="badge work-sans text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-4xl py-4 px-4">{tag}</div>
                    ))}
                </div>

                <h2 className="card-title text-2xl font-bold">
                    {book.bookName}
                </h2>

                <p className='work-sans text-base font-medium'>By: {book.author}</p>

                <div className='border-t-2 border-dashed border-[#13131326]'></div>

                <div className="work-sans text-base font-medium flex justify-between">
                    <div>{book.category}</div>
                    <div className='flex justify-between items-center gap-2'>
                        {book.rating}
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;