import React from 'react';
import './FeaturedCom.css'


const FeaturedCom = (props) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite,location,  fulltime_or_parttime, salary } = props.feature;
    return (
        <div className=''>
            <div className="card shadow-xl fe text-left ms-5 ps-8 pt-3">
                <img src={company_logo} alt="" />
                <h3 className="">{company_name}</h3>
                <div className="flex flex-row gap-2">
                    <div className="border-1">{remote_or_onsite}</div>
                    <div className="">{fulltime_or_parttime}</div>
                </div>
                <div className="">
                    <p>{location}</p>
                    <p>$ {salary}</p>
                </div>
                <button className='btn  btn-primary bg-gradient-to-r from-indigo-500 to-purple-700 px-4 py-2 rounded-md text-white m-5'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedCom;