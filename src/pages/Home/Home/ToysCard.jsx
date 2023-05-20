import React from 'react';

const ToysCard = ({ alltoy }) => {
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
        {name}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
      <button >Vew details</button>
    </div>
  </div>
  );
};

export default ToysCard;
