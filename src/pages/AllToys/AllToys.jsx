import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [toys, setToys]=useState([])
    useEffect(()=>{
        fetch('https://assignment-11-server-five-omega.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div>
            <h1 className='text-white'>All toys :{toys.length}</h1>
        </div>
    );
};

export default AllToys;