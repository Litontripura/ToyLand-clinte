import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://assignment-11-server-five-omega.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto w-full mb-5 p-10">
      <h1 className="text-2xl font-bold text-orange-600 text-center my-10">
        All Toys
      </h1>
      <div className="mb-5 text-center">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-400 rounded-md p-2 w-1/2 mx-auto"
        />
      </div>
      <table className="table w-full">
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
          {isLoading ? (
            <tr>
              <td colSpan={5} className="text-center text-3xl font-bold text-orange-400">
                Loading...
              </td>
            </tr>
          ) : (
            filteredToys.map((toy) => (
              <ToyCard key={toy._id} toy={toy} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
