import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard/ToyCard';

const AllToys = () => {
    const [toys, setToys]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setToys(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-white'>All toys :{toys.length}</h1>
         <div className='md:grid grid-cols-3 justify-center gap-4 p-5 mx-auto'>
         {
                toys.map(toy=><ToyCard
                key={toy._id}
                toy={toy}
                ></ToyCard>)
            }
         </div>
        </div>
    );
};

export default AllToys;