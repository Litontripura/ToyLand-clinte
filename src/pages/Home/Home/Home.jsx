import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ToysCard from "./ToysCard";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Language");
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    if (activeTab) {
      fetch(`http://localhost:5000/toystext/${activeTab}`)
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
      <div className="md:grid grid-cols-3 justify-center gap-6 my-5 mx-auto">
        {allToys.map((alltoy) => (
          <ToysCard
            key={alltoy._id}
            alltoy={alltoy}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
