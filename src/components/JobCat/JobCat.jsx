import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import './JobCat.css'

const JobCat = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div className='job mt-8 text-center text-black bg-white'>
            <h3 className='text-3xl font-bold mb-5'>Job Category List</h3>
            <p className='text-slate-500 mb-3'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="flex justify-center justify-items-center place-items-center">
                {
                    categories.map(category=> <Category
                    key = {category.id}
                    category ={category}
                    ></Category>)

                }

            </div>
        </div>
    );
};

export default JobCat;