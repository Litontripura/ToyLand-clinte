import React from 'react';

const MyToyCard = ({mytoy}) => {
    const { availablequantity, category, name, photo, price, rating } = mytoy;
    return (
    
           <tr>
   
   <td>
     <div className="flex items-center space-x-3">
       <div className="avatar">
         <div className="mask mask-squircle w-12 h-12">
           <img src={photo} alt="Avatar Tailwind CSS Component" />
         </div>
       </div>
       <div>
         <div className="font-bold">{name}</div>
         <div className="text-sm opacity-50">United States</div>
       </div>
     </div>
   </td>
   <td>
     Zemlak, Daniel and Leannon
     <br/>
     <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
   </td>
   <td>Purple</td>
   <th>
     <button className="btn btn-ghost btn-xs">details</button>
   </th>
 </tr>
    
    );
};

export default MyToyCard;