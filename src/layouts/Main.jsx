import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;