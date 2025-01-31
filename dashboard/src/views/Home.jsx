import React from 'react';

const Home = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full sm:w-4/5 lg:w-2/3 border border-black bg-white rounded-lg shadow-lg p-6 sm:p-6 md:p-8 mx-4'>
                <div className='flex items-center justify-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4ea84d]'>Welcome to Admin Dashboard!</h1>
                </div>
                <div>
                    <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4'>Features of this web app:</p>
                    <ul className='text-base sm:text-lg list-disc pl-6 space-y-2 text-gray-600'>
                        <li>Login/Logout</li>
                        <li>Show Dashboard</li>
                        <li>Show/Add/Edit/Delete Categories</li>
                        <li>Show/Add Products</li>
                        <li>Search</li>
                        <li>Pagination</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;