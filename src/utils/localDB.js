// Storing Read books in LocalDB

const getReadBooksFromLocalDB = () => {
    const allReadBooks = localStorage.getItem("readBooks")

    if (allReadBooks) return JSON.parse(allReadBooks);
    return [];
}

const addReadBooksToLocalDB = (book) => {
    const allBooks = getReadBooksFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readBooks", JSON.stringify(allBooks))
    }
}



// Storing Wishlist books in LocalDB

const getWishlistFromLocalDB = () => {
    const allWishlist = localStorage.getItem("wishList")

    if (allWishlist) return JSON.parse(allWishlist);
    return [];
}

const addWishlistToLocalDB = (book) => {
    const allWishBooks = getWishlistFromLocalDB();
    const isAlreadyExist = allWishBooks.find(bk => bk.bookId === book.bookId)

    if (!isAlreadyExist) {
        allWishBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allWishBooks))
    }
}
export { getReadBooksFromLocalDB, addReadBooksToLocalDB, getWishlistFromLocalDB, addWishlistToLocalDB }