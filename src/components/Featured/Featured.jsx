import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCom from '../FeaturedCom/FeaturedCom';

const Featured = () => {

    const data = useLoaderData();
    
    const [showAll, setShowAll] = useState(false);
    return (
        <div className='grid grid-cols-1 place-content-center place-items-center text-center mt-8'>
             <h3 className='text-3xl font-bold mb-5'>Featured Jobs</h3>
            <p className='text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="grid grid-cols-2 gap-1 place-content-center place-items-center mt-8">
                {
                    showAll ? (
                        data.map((feature, key) => ( <FeaturedCom
                            key ={key}
                            feature= {feature}></FeaturedCom>))
                      ) : (
                        data.slice(0, 4).map((feature, key) => ( <FeaturedCom
                            key ={key}
                            feature= {feature}></FeaturedCom>
                            ))
                        
                      )
                     
                }
            </div>
            <button onClick={()=>{ setShowAll(!showAll)}}className='bg-gradient-to-r from-indigo-500 to-purple-700 px-8 py-3 rounded-md text-white m-5'>See all</button>
            
        </div>
    );
};

export default Featured;