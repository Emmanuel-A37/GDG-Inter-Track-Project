import React, { useState, useEffect } from "react";
import Searchbar from "../../../components/Searchbar.jsx";
import Item from "../../../components/Item.jsx";

const Home = ({ goTo, setSelectedOption }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Missing data.json");
        return res.json();
      })
      .then(setEntries)
      .catch(() => setEntries([]));
  }, []);

  const handleClick = (option) => {
    setSelectedOption(option);
    goTo("details");
  };
  return (
    <div className="min-h-screen bg-[#F6F7F8] p-4">
      <h1 className="text-[32px] font-bold text-dark">
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

      <h3 className="text-dark font-bold text-lg">Recent</h3>
      <div className="flex flex-col gap-4  ">
        {entries.map((entry) => (
          <Item key={entry.id} title={entry.title} onClick={()=>handleClick(entry)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
