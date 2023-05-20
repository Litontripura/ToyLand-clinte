import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ToysCard from "./ToysCard";
import Galary from "./Galary";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Language");
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    if (activeTab) {
      fetch(`https://assignment-11-server-five-omega.vercel.app/toystext/${activeTab}`)
        .then((res) => res.json())
        .then((data) => setAllToys(data));
    }
  }, [activeTab]);

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div>
      <Banner></Banner>
      <Galary></Galary>
      <div>
        <h1 className="text-orange-600 font-bold text-3xl text-center my-5">Shop By Catagory</h1>
      <div className="tabs tabs-boxed flex justify-center">
        <button
          onClick={() => handleActiveTab("Math")}
          className={`p-3 font-bold ${activeTab === "Math" ? "bg-orange-600 text-white" : ""}`}
        >
          Math Toys
        </button>
        <button
          onClick={() => handleActiveTab("Language")}
          className={`p-3 font-bold ${
            activeTab === "Language" ? "bg-orange-600 text-white" : ""
          }`}
        >
          Language Toys
        </button>
        <button
          onClick={() => handleActiveTab("Science")}
          className={`p-3 font-bold ${
            activeTab === "Science" ? "bg-orange-600 text-white" : ""
          }`}
        >
          Science Toys
        </button>
      </div>
      </div>
      <div className="md:grid grid-cols-3 justify-center gap-6 my-5 mx-auto">
        {allToys.map((alltoy) => (
          <ToysCard
            key={alltoy._id}
            alltoy={alltoy}
           
          />
        ))}
      </div>
      <Banner2></Banner2>
      <Banner3></Banner3>
    </div>
  );
};

export default Home;
