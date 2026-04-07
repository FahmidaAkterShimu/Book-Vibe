import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-600 mt-2 max-w-md mx-auto">
                Ooops! The page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage...
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;