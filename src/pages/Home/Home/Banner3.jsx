import React from 'react';

const Banner3 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Join with us</h1>
            <p className="py-6">The learning toys available in Toyland cover diverse subjects such as mathematics, science, language skills. Each toy is thoughtfully crafted to stimulate different aspects of a childs cognitive and physical growth while promoting curiosithy , imagination and a love for learning</p>
            <button className="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
    );
};

export default Banner3;