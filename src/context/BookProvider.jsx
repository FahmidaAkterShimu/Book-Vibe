import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);


    const handleMarkAsRead = (currentBook) => {
        // const isExistInWishList = wishList.find((book) => book.bookId === currentBook.bookId)

        // if (isExistInWishList) {
        //     toast.error("This book is already in Wishlist.")
        //     return;
        // }
        
        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error("The book is already exist in Read-list");
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to Read-list`);
        }
    };

    const handleWishList = (currentBook) => {
        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error("This book is already in read list.")
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error("The book is already exist in Wishlist");
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Wishlist`);
        }
    };

    const data = {
        storedBooks,
        setStoredBooks,
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