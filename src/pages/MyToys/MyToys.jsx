import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyCard from "./MyToyCard";


const MyToys = () => {
    const {user}=useContext(AuthContext)


    const [myToys, setMytoys]=useState([])
    const [remainingToys, setRemainingToy]=useState(myToys)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        fetch(`https://assignment-11-server-five-omega.vercel.app/toys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMytoys(data);
            setLoading(false)
        })
    },[user])
    return (
        <div>
           
             
           {
            loading ? <p className="text-center text-3xl font-bold text-orange-500">Loading...</p>: <table className="table w-full">
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {myToys.map(mytoy => (
             <MyToyCard
              key={mytoy._id} 
              mytoy={mytoy}
              remainingToys={remainingToys}
              setRemainingToy={setRemainingToy}
              setMytoys={setMytoys}
              ></MyToyCard>
           ))}
            </tbody>
          </table>
           }
        </div>
    );
};

export default MyToys;