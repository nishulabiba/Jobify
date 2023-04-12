import React from 'react';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';
import Featured from '../Featured/Featured';
import './Home.css'

const Home = () => {
    return (
        <div className='lg:w-auto h' >
             
             <Header></Header>
             <JobCat></JobCat>
             <Featured></Featured>

        
        </div>
    );
};

export default Home;