import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyCard = ({ mytoy ,setRemainingToy,remainingToys}) => {
  const { _id, availablequantity, category, name, photo, price, rating } =
    mytoy;
  const handleDelet = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-five-omega.vercel.app/toys/${_id}`,{
          method:"DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount < 0) {
              Swal.fire(
                " Deleted", 
              "Your Your Toy has been deleted.", 
              "success")
              const remaining = remainingToys.filter(remainToy=> remainToy._id !== _id)
              setRemainingToy(remaining)
            }
          });

      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{name} </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{category} Toys</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{availablequantity}</div>
          </div>
        </div>
      </td>

      <th className="flex gap-2">
      <Link to={`/update/${_id}`}>Update</Link>
        <button onClick={() => handleDelet(_id)}>Delete</button>
        <Link
          to={`/alltoys/${_id}`}
          className="btn btn-ghost btn-xs text-orange-400 font-bold"
        >
          Vew Details
        </Link>
      </th>
    </tr>
  );
};

export default MyToyCard;
