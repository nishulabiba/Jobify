import React from 'react';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import JobCat from '../JobCat/JobCat';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className='' >
             
             <Header></Header>
             <JobCat></JobCat>
             <Featured></Featured>

        
        </div>
    );
};

export default Home;