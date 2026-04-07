import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => `text-lg ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""}`}>Home</NavLink></li>
        <li><NavLink to={"/books"} className={({ isActive }) => `text-lg ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""}`}>Listed Books</NavLink></li>
        <li><NavLink to={"/page-to-read"} className={({ isActive }) => `text-lg ${isActive ? "text-[#23BE0A] border border-[#23BE0A]" : ""}`}>Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* for small device */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* logo */}
                <h2 className="text-[28px] font-bold">Book Vibe</h2>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className='btn bg-[#23BE0A] text-lg font-semibold text-white rounded-lg py-6 px-5'>Sign In</button>
                <button className='btn bg-[#59C6D2] text-lg font-semibold text-white rounded-lg py-6 px-5'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;