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

    const {id, company_logo, job_title, company_name, remote_or_onsite,location,  fulltime_or_parttime, salary} = view;
    return (
        <div className='bg-white text-black'>
            <h1 className='text-2xl'>Job Details</h1>
        </div>
    );
};

export default ViewDetails;