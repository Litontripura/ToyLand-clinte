import React from 'react';

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Toy land</h1>
          <p className="mb-5">Toyland is an educational project aimed at providing children with an engaging and interactive learning experience throught toys. The website recognizes the importance of play in a childs development and leverages the power of toys to facilitate learning and knowledge acquisition</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;