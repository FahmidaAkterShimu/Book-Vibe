import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadBooksToLocalDB, addWishlistToLocalDB, getReadBooksFromLocalDB, getWishlistFromLocalDB } from '../utils/localDB';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [readBooks, setReadBooks] = useState(() => getReadBooksFromLocalDB());
    const [wishList, setWishList] = useState(() => getWishlistFromLocalDB());

    const handleMarkAsRead = (currentBook) => {
        addReadBooksToLocalDB(currentBook);

        const isExistInWishList = wishList.find((book) => book.bookId === currentBook.bookId)

        if (isExistInWishList) {
            toast.error("This book is already in Wishlist.")
            return;
        }

        const isExistBook = readBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error("The book already exists in the Read-list.");
        }
        else {
            setReadBooks([...readBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to Read-list`);
        }
    };

    const handleWishList = (currentBook) => {
        addWishlistToLocalDB(currentBook);

        const isExistInReadList = readBooks.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error("This book is already in the Read-list.")
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error("The book already exists in the Wishlist");
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Wishlist`);
        }
    };

    const data = {
        readBooks,
        setReadBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;