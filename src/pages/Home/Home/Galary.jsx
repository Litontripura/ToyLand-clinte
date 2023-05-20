import React, { useEffect, useState } from 'react';
import Photo from './Photo';

const Galary = () => {
  
    const [photos, setPhotos]=useState([])
    useEffect(()=>{
        fetch('https://assignment-11-server-five-omega.vercel.app/toyGalary')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])

    return (
        <div className='my-10 p-5 text-center'>
          <h1 className='text-white font-bold text-2xl'>Toys Galary</h1>
         <div className='md:grid grid-cols-4 gap-3 justify-center mx-auto p-5'>
         {
                photos.map(photo=><Photo
                key={photo._id}
                photo={photo}
                ></Photo>
                    
                )
            }
         </div>
        </div>
    );
};

export default Galary;