import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-row justify-around mt-0  ms-5 bg-gray-100 p-5'>
            <div className="ms-8  mt-20 text-left w-1/3">
                <h1 className='text-5xl  font-bold '>One Step Closer To Your </h1>
                <h1 className='text-5xl text-indigo-500 font-bold mb-4'>Dream Job</h1>
                <p className='text-slate-600 mb-4 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-indigo-500 to-purple-700 p-3 rounded-md text-white'>Get Started</button>
            </div>
            <img className='bg-fixed bg-contain bg-left w-1/2 ' src="./m.png" alt="" />
        </div>
    );
};

export default Header;