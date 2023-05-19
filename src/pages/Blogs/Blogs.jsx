import React from "react";

const Blogs = () => {
  return (
    <div className="py-10">
      <div className="card w-2/3 bg-slate-300  p-5 mx-auto text-black">
        <div className="card-body items-center text-left">
          <h2 className="card-title text-2xl font-bold text white">What is an access token and refresh token? How do they Work and Where should we store the on the clinte site?</h2>
          <p><span className=" font-bold text-xl">Access token:  </span> An access token is a credential that is issued to a user after successfull authentication</p>
          <p><span className=" font-bold text-xl">Refresh token:  </span> A fefresh token is a long lived token that is also issued during the authentication process. it is used to obtain a new access token once the original access token expires.</p>
          <p><span className=" font-bold text-xl">Where should Stor them:  </span> We Can store tokens as cookies on the client-side. When useing cookies, its recommended to set the httpOnly flag to prevent client-sid scripts from accessing them</p>
        
        </div>
      </div>
      <div class="container mx-auto p-10 bg-slate-300 w-2/3 my-5 rounded-lg">
        <h1 className="text-center font-bold text-2xl my-3">SQL Database vs NoSQL Database</h1>
  <table class="table-auto w-full border-collapse">
    <thead>
      <tr>
        <th class="bg-gray-100 border text-left px-4 py-2">Aspect</th>
        <th class="bg-gray-100 border text-left px-4 py-2">SQL Database</th>
        <th class="bg-gray-100 border text-left px-4 py-2">NoSQL Database</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4 py-2">Data Model</td>
        <td class="border px-4 py-2">Structured, with predefined schema</td>
        <td class="border px-4 py-2">Flexible, with dynamic schema</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Scalability</td>
        <td class="border px-4 py-2">Vertical scaling (limited by hardware)</td>
        <td class="border px-4 py-2">Horizontal scaling (easily distributed across multiple servers)</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Query Language</td>
        <td class="border px-4 py-2">Structured Query Language (SQL)</td>
        <td class="border px-4 py-2">Variety of query languages (e.g., MongoDB Query Language)</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Schema</td>
        <td class="border px-4 py-2">Enforced schema with rigid structure</td>
        <td class="border px-4 py-2">Dynamic schema with flexible structure</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Scaling</td>
        <td class="border px-4 py-2">More challenging to scale horizontally</td>
        <td class="border px-4 py-2">Designed for easy horizontal scaling</td>
      </tr>
      <tr>
        <td class="border px-4 py-2">Data Integrity</td>
        <td class="border px-4 py-2">Strong data consistency and ACID transactions</td>
        <td class="border px-4 py-2">Eventual consistency, suitable for distributed systems</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="w-2/3 mx-auto p-4">
  <div className="bg-slate-300 shadow-lg rounded-lg overflow-hidden">
    <div className="bg-slate-300 px-4 py-3 border-b">
      <h2 className="text-xl font-bold">What is Express.js?</h2>
    </div>
    <div className="p-4">
      <p className="text-gray-700">
        Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for web and mobile applications, such as routing, middleware support, and template engine integration. With its simplicity and extensive ecosystem, Express.js allows developers to quickly build server-side applications and APIs.
      </p>
    </div>
  </div>
</div>

<div className="w-2/3 mx-auto p-4">
  <div className="bg-slate-300 shadow-lg rounded-lg overflow-hidden">
    <div className="bg-slate-300 px-4 py-3 border-b">
      <h2 className="text-xl font-bold">What is Nest.js?</h2>
    </div>
    <div className="p-4">
      <p className="text-gray-700">
        Nest.js is a progressive, extensible, and versatile Node.js framework for building efficient and scalable server-side applications. It uses modern JavaScript (or TypeScript) and adopts architectural patterns such as MVC, dependency injection, and module-based organization. Nest.js leverages the powerful features of TypeScript and integrates well with frameworks like Express.js, providing a solid foundation for building enterprise-grade applications.
      </p>
    </div>
  </div>
</div>

<div className="w-2/3 mx-auto p-4">
  <div className="bg-slate-300 shadow-lg rounded-lg overflow-hidden">
    <div className="bg-slate-300 px-4 py-3 border-b">
      <h2 className="text-xl font-bold">What is MongoDB aggregate and How does it work?</h2>
    </div>
    <div className="p-4">
      <p className="text-gray-700">
        MongoDB aggregate is a powerfull feature that allows you to perform complex data processing and analysis operations on a monodb collection. it provides a way to perform calculations, transformations, and aggregations on the data stored in a collection
      </p>
      <p>Each stage in the pipeline performs a specific operation on the input documents and passes the results to the next stage.</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Blogs;
