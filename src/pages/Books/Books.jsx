import React, { useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishlistBooks from '../../Components/ListedBooks/ListedWishlistBooks';
import ListedReadBooks from '../../Components/ListedBooks/ListedReadBooks';


const Books = () => {
    const [sortingType, setSortingType] = useState("")

    return (
        < div >
            <div className='text-center'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 work-sans text-lg font-semibold text-white py-6 px-6 bg-[#23BE0A] rounded-lg">Sort By: {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}>
                            <a>Pages</a>
                        </li>
                        <li onClick={() => setSortingType('rating')}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadBooks sortingType={sortingType}></ListedReadBooks>
                </TabPanel>
                <TabPanel>
                    <ListedWishlistBooks sortingType={sortingType}></ListedWishlistBooks>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default Books;