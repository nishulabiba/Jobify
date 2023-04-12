import React, {useState, useEffect} from 'react';
import Category from '../Category/Category';
import './JobCat.css'

const JobCat = () => {
    
    const [data, setCategory] = useState([]);
    useEffect(()=> {
        fetch('category.json')
        .then(res=> res.json())
        .then(data=> setCategory(data)) }, [])
        console.log(data)

    return (
        <div className='job mt-8 text-center text-black bg-white'>
            <h3 className='text-3xl font-bold mb-5'>Job Category List</h3>
            <p className='text-slate-500 mb-3'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="flex justify-center justify-items-center place-items-center">
                {
                    data.map(category=> <Category
                    key = {category.id}
                    category ={category}
                    ></Category>)

                }

            </div>
        </div>
    );
};

export default JobCat;