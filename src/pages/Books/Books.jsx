import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContext);

    return (
        <div>
            Books
        </div>
    );
};

export default Books;