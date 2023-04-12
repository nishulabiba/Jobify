import React, {useState, useEffect} from 'react';
import './ViewDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';

 const ViewDetails = () => {
    const params = useParams();
    const detail = useLoaderData();
    const [view, setView] = useState({});
    useEffect(()=>{
       if(detail) {
        const d = detail.find(obj=> obj.id == params.id)
       if(d)
       {
        setView(d)
       }
       }

    },[])
    console.log(view)

    const {id, company_logo, job_title, experiences, job_description, job_responsibility, educational_requirements, location,  fulltime_or_parttime,email,phone, salary} = view;
    
    return (
        <div className='bg-white text-black'>
            <div className=" bg-slate-100">
            <h1 className='text-2xl font-bold p-8 text-center'>Job Details</h1>
            </div>
            <div className="flex flex-row gap-4 bg-white">
                <div className=" border-2 mx-5 m-5 p-8 details bg-white">
                    <p className='text-slate-500 m-3'> <span className='text-black font-bold'>Job Description :</span> {job_description}</p>
                    <p className='text-slate-500 m-3'> <span className='text-black font-bold'>Job Responsibility :</span> {job_responsibility}</p>
                    <p className='text-slate-500 m-3'> <span className='text-black font-bold'>Educational Requirements :</span> {educational_requirements}</p>
                    <p className='text-slate-500 pb-8 m-3'><span className='text-black font-bold'>Experiences :</span> {experiences}</p>
                    
                </div>
                <div className="mt-6">
                    <div className="bg-purple-200 p-8 rounded-xl">
                        <h3 className='font-semibold'>Job Details</h3>
                    <p className='text-slate-600 m-3'><span>Salary: $</span> {salary}</p>
                    <p className='text-slate-600 m-3'><span>Job Title:</span>{job_title}</p>
                    <h3 className='font-semibold'>Contact Information</h3>
                    <p className='text-slate-600 m-3'><span>Email: </span>{email}</p>
                    <p className='text-slate-600 m-3'><span>Phone: </span>{phone}</p>
                    <p className='text-slate-600 m-3'><span>Address: </span>{location}</p>
                    </div>
                    <button className='b bg-gradient-to-r from-indigo-500 to-purple-700 px-8 py-3 rounded-md text-white m-5'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;