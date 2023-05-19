import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Home = () => {
  return (
    <div>
        <section className="relative py-20">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute inset-0 opacity-100 hover:opacity-60 transition-opacity duration-300"></div>
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4">
          Welcome to the Disney Dolls Marketplace
        </h1>
        <p className="text-lg lg:text-xl text-white mb-8">
          Find your favorite Disney dolls and add magic to your collection.
        </p>
        <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full font-medium">
          Explore Now
        </button>
      </div>
    </section>
      <Tabs>
        <TabList className="grid grid-cols-3 gap-2">
          <Tab>
            <button className="bg-orange-500 p-2">Title 1</button>
          </Tab>
          <Tab>
            <button className="bg-orange-500 p-2">Title 1</button>
          </Tab>
          <Tab>
            <button className="bg-orange-500 p-2">Title 1</button>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
