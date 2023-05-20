import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const Update = () => {
//   const {user}= useContext(AuthContext)
const updateToy = useLoaderData()

console.log(updateToy);
const {_id, availablequantity, price,description }= updateToy



  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availablequantity = form.availablequantity.value;
    const description = form.description.value;
    // Price, available quantity, Detail description
    const update = {
         price,
         availablequantity,
         description,
    };
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          Swal.fire({
            icon:"success",
            title:"Toy Update successfully",
           
          })
        }
        form.reset()
      });
   
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleUpdate} className="max-w-md mx-auto">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
          Update Toy
        </h1>
        <div className="bg-slate-300 shadow-2xl rounded px-8 py-8 mb-4"> 
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="text"
              defaultValue={price}
              placeholder="Price"
            />
          </div>
   
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Available Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              name="availablequantity"
              defaultValue={availablequantity}
              min="0"
              placeholder="Available Quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="description"
              name="description"
              defaultValue={description}
              placeholder="Add toy description"
              rows="5"
            />
          </div>
        </div>
        <div className="text-center">
          <button  className="p-3 rounded-lg text-lg font-bold text-white bg-blue-500 w-full md:w-1/2 mx-auto" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
