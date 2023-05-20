import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
  const signleToy = useLoaderData();
  const {description,sellerName,sellerEmail, availablequantity, category, name, photo, price, rating, _id } =
    signleToy;
  return (
    <div className="card w-1/2 bg-base-100 shadow-xl mx-auto p-3 my-10">
      <figure>
        <img
        className="w-full h-[500px]"
        
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>Seller name : {sellerName}</p>
        <p>Seller Email : {sellerEmail}</p>
        <p>Toy Price: {price}</p>
        <p>Abailable : {availablequantity}</p>
        <div>
          <span>Ratings :   <Rating 
      placeholderRating={rating}
      readonly
      emptySymbol={<FaRegStar></FaRegStar>}
      placeholderSymbol={<FaStar className='text-orange-600'></FaStar>}
      fullSymbol={<FaStar></FaStar>}
      >

      </Rating></span>
        </div>
        <p>Description : {description}</p>
      
     
      </div>
    </div>
  );
};

export default SingleToy;
