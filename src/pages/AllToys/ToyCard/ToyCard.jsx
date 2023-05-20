import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const {_id, availablequantity, category,sellerName, name, photo, price, rating } = toy;
  console.log(toy);
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
    
  
    <th>
      <Link to={`/alltoys/${_id}`}  className="btn btn-ghost btn-xs text-orange-400 font-bold">Vew Details</Link>
    </th>
  </tr>
  );
};

export default ToyCard;
