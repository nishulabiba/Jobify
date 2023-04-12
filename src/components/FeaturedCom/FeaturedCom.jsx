import React from 'react';
import './FeaturedCom.css'
import { Link } from 'react-router-dom';


const FeaturedCom = (props) => {
    const {id, company_logo, job_title, company_name, remote_or_onsite,location,  fulltime_or_parttime, salary } = props.feature;
    return (
        <div className=''>
            <div className="card shadow-xl border-2 fe text-left ms-5 ps-8 pt-3 m-3">
                <img src={company_logo} alt="" />
                <h3 className="font-bold">{job_title}</h3>
                <h4 className='text-slate-600'>{company_name}</h4>
                <div className="flex flex-row gap-2">
                    <div className="b border-2 p-1 m-1 border-primary rounded-lg text-primary">{remote_or_onsite}</div>
                    <div className= "b border-2 p-1 m-1 border-primary rounded-lg text-primary">{fulltime_or_parttime}</div>
                </div>
                <div className="">
                    <p>{location}</p>
                    <p>$ {salary}</p>
                </div>
                <Link to={`/job/${id}`}><button className='btn  btn-primary bg-gradient-to-r from-indigo-500 to-purple-700 px-4 py-2 rounded-md text-white m-5'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedCom;