import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-black text-white'>
            <div className="flex flex-row justify-around p-8">
            <div className=" text-white w-1/6 text-left align-center">
                <h4 className='font-bold m-3 '>JobBify</h4>
                <div className="ms-3">
                <small className='text-slate-500 mb-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</small>
                <img className='mt-4 ' src="./Group.png" alt="" />
                </div>
            </div>
            <div className=" w-1/9 text-left">
                <h5 className='font-bold m-3 '>Company</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>About Us</small></p>
                <p className='text-slate-500 '><small>Work</small></p>
                <p className='text-slate-500 '><small>Latest News</small></p>
                <p className='text-slate-500 '><small>Careers</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Product</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>Prototype</small></p>
                <p className='text-slate-500 '><small>Plans & Pricing</small></p>
                <p className='text-slate-500 '><small>Customers</small></p>
                <p className='text-slate-500 '><small>Integrations</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Support</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>Help Desk</small></p>
                <p className='text-slate-500 '><small>Sales</small></p>
                <p className='text-slate-500 '><small>Become a Partner</small></p>
                <p className='text-slate-500 '><small>Developers</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Contact</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>524 Broadway , NYC</small></p>
                <p className='text-slate-500 '><small>+1 777 - 978 - 5570</small></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;