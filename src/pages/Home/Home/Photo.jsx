import React from 'react';

const Photo = ({ photo }) => {
  const { img } = photo;
  return (
    <div className="relative">
      <img
        className="w-[350px] rounded-lg transition-opacity duration-300 my-4 md:my-0"
        src={img}
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default Photo;
