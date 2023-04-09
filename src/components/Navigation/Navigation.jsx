import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='flex flex-row justify-around justify-items-center space-x-5  bg-gray-100 p-8 ms-5'>
            <h1 className=' text-2xl font-bold'> <Link to="/">JobBiFy</Link></h1>
            <div className="  flex flex-row gap-4 justify-items-center mt-2 text-slate-600 ">
            <Link to="/">Home</Link>
            <Link to="./statistics">Statistics</Link>
            <Link to="applied">Applied Jobs</Link>
            <Link to="blog">Blog</Link>
            </div>
            <button className='bg-gradient-to-r from-indigo-500 to-purple-400 p-3 rounded-md text-white'>Start Applying</button>
        </nav>
    );
};

export default Navigation;