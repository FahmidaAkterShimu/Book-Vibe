import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard';

const ListedWishlistBooks = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);

    const [filteredWishlist, setFilteredWishlist] = useState(wishList)

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFilteredWishlist(sortedData)
            }
            else if (sortingType === 'rating') {
                const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
                setFilteredWishlist(sortedData)
            }
        }
    }, [sortingType, wishList]);

    if (filteredWishlist.length === 0) {
        return <div className='h-[50vh] flex justify-center items-center bg-gray-100 rounded-2xl mt-8'>
            <h2 className='text-3xl font-bold'>There are no books found in your Wishlist.</h2>
        </div>
    }

    return (
        <div className='mt-8'>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    filteredWishlist.map((book, ind) => (
                        <BookCard key={ind} book={book}></BookCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishlistBooks;