import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Featured = () => {

    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('featured.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    }, [])
    console.log(data)
    return (
        <div className='text-center mt-8'>
             <h3 className='text-3xl font-bold mb-5'>Featured Jobs</h3>
            <p className='text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className=""></div>
            
        </div>
    );
};

export default Featured;