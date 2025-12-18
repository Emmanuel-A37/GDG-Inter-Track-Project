import React from "react";
import Searchbar from "../../../components/Searchbar.jsx";
import entries from "../../../data/data.js";
import Item from "../../../components/Item.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F8] p-4">
      <h1 className="text-[32px] font-bold text-[#111418]">
        Welcome, Student!
      </h1>
      <Searchbar />

      <div className="flex gap-4 py-3 px-4">
        <div className="flex flex-col items-center justify-center h-40 bg-amber-400 w-full rounded-2xl p-6 my-3">
          <img className="w-14" src="" alt="" />
          <p className="font-bold">Find Building</p>
        </div>
        <div className="flex flex-col items-center justify-center h-40 bg-blue-400 w-full rounded-2xl p-6 my-3">
          <img className="w-14" src="" alt="" />
          <p className="font-bold">Find Lecturer</p>
        </div>
      </div>

      <h3 className="text-[#111418] font-bold text-lg">Recent</h3>
      <div className="flex flex-col gap-4  ">
        {entries.map((entry) => (
          <Item key={entry.id} title={entry.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
