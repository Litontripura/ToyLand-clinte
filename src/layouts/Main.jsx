import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ProjectName from '../pages/ProjectName/ProjectName';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <ProjectName></ProjectName>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;