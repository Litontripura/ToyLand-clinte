import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';


const ToysCard = ({ alltoy }) => {
  const {user}=useContext(AuthContext)
  const {
    availablequantity,
    category,
    name,
    photo,
    price,
    rating,
    _id
  } = alltoy;

  
  

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-1 mx-auto">
    <figure><img className='h-[300px] w-full' src={photo} alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title">
       Toy Name:  {name}
   
      </h2>
      <p className='text-xl text-orange-600 font-bold'>Price : {price}</p>
     <div className='flex gap-5 items-center'>
     <span className='text-orange-600 font-bold text-xl'> Ratings :</span>
    <div>
    
    <Rating 
      placeholderRating={rating}
      readonly
      emptySymbol={<FaRegStar></FaRegStar>}
      placeholderSymbol={<FaStar className='text-orange-600'></FaStar>}
      fullSymbol={<FaStar></FaStar>}
      >

      </Rating>
      <span className='text-orange-600 font-bold text-xl'> {rating}</span>
      
    </div>
     </div>
     
     <Link to={`/alltoys/${_id}`}><button className="btn btn-outline btn-accent">Vew Details</button></Link>
    </div>
  </div>
  );
};

export default ToysCard;