import React from 'react';
import './Category.css'

const Category = (props) => {
    const {img, category_name, jobs_available }=props.category;
    return (
        <div className=" ">
            <div className="cat py-3 m-3 text-left bg-slate-100 rounded-lg">
                <img  src={img} alt="" />
                <h5 className='font-bold my-1'>{category_name}</h5>
                <p className='text-slate-500'><small>{jobs_available} Jobs available</small></p>

            </div>
        </div>
    );
};

export default Category;