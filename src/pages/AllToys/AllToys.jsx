import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-white">All toys :{toys.length}</h1>
     
   
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
     
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
    
    </tbody>

   
    
  </table>
</div>
    </div>
  );
};

export default AllToys;
