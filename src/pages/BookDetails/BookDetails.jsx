import React from 'react';
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {

    const { id } = useParams()

    // const books = use(booksPromise);
    const books = useLoaderData()

    const expectedBook = books.find((book) => book.bookId === Number(id))
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
    return (
        <div className="grid md:grid-cols-2 gap-4 max-h-175 card-side bg-base-100">
            <figure className='bg-[#F3F3F3] rounded-2xl p-18.5'>
                <img
                    src={image}
                    alt={bookName}
                    className='rounded-xl object-fill' />
            </figure>

            <div className="card-body space-y-6">
                <div>
                    <h2 className="card-title playfair text-[40px] font-bold">{bookName}</h2>
                    <p className='work-sans text-xl font-medium'>By: {author}</p>
                </div>

                <div className='work-sans text-xl font-medium border-t border-b border-[#13131326] py-4'>{category}
                </div>

                <div className='work-sans text-base font-bold '>
                    Review :
                    <span className='font-normal text-[#131313B3]'> {review}</span>
                </div>

                <div className='flex justify-start items-center gap-3'>
                    <div className='work-sans text-base font-bold'>Tag</div>
                    {tags.map((tag, ind) => (
                        <div key={ind} className="badge work-sans text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-4xl py-4 px-4">#{tag}</div>
                    ))}
                </div>

                <div className='divider'></div>

                <div className='flex gap-14'>
                    <div className='work-sans text-base text-[#131313B3] space-y-3'>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>

                    <div className='work-sans text-base font-semibold space-y-3'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>

                </div>

                <div className="flex justify-start items-center gap-4">
                    <button className="btn">Read</button>
                    <button className="btn">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;