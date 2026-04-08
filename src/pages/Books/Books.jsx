import React from 'react';

const Books = () => {
    const { storedBooks } = useContext(BookContext);

    return (
        <div>
            Books
        </div>
    );
};

export default Books;