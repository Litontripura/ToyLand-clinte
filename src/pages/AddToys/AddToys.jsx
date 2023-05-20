import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const ToyForm = () => {
  const {user}= useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.toysphoto.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availablequantity = form.rating.value;
    const description = form.description.value;
    const userInfo = {
      photo,
      name,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      availablequantity,
      description,
    };
    fetch("https://assignment-11-server-five-omega.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            icon:"success",
            title:"Toy Added successfully",
            text:`You added ${name} Toy`
          })
        }
        form.reset()
      });
    console.log(userInfo);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
          Add a Toy
        </h1>
        <div className="bg-slate-300 shadow-2xl rounded px-8 py-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Toys Picture
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="toysPhoto"
              type="text"
              name="toysphoto"
              placeholder="Enter your toys photo URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-name"
              name="sellerName"
              type="text"
              defaultValue={user.displayName}
              placeholder="Seller Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Seller Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-email"
              name="sellerEmail"
              defaultValue={user.email}
              type="email"
              placeholder="Seller Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sub-category
            </label>
            <select
              name="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sub-category"
            >
              <option>Math</option>
              <option>Language</option>
              <option>Science</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              placeholder="Rating"
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
              placeholder="Add toy description"
              rows="5"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="p-3 rounded-lg text-lg font-bold text-white bg-blue-500 w-full md:w-1/2 mx-auto" type="submit">
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToyForm;
