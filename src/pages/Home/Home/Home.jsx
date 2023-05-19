import React, { useState } from "react";
import Banner from "./Banner";

const Home = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Banner></Banner>
      <div className="tabs tabs-boxed flex justify-center">
        <button
          onClick={() => handleActiveTab('Math Toys')}
          className={`p-3 font-bold ${activeTab === 'Math Toys' ? 'bg-orange-600 text-white' : ''}`}
        >
          Math Toys
        </button>
        <button
          onClick={() => handleActiveTab('Language Toys')}
          className={`p-3 font-bold ${activeTab === 'Language Toys' ? 'bg-orange-600 text-white' : ''}`}
        >
          Language Toys
        </button>
        <button
          onClick={() => handleActiveTab('Science Toys')}
          className={`p-3 font-bold ${activeTab === 'Science Toys' ? 'bg-orange-600 text-white' : ''}`}
        >
          Science Toys
        </button>
      </div>
    </div>
  );
};

export default Home;
