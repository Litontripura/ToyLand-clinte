import React from 'react';

const Banner2 = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About us</h1>
      <p className="py-6 text-xl">Toyland fosters a sense of community by facilitating interaction among users. Parents and educators can share their experiences, tips, and ideas for maximizing the educational value of the toys.</p>
     
    </div>
  </div>
</div>
    );
};

export default Banner2;