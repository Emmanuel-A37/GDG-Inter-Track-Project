import React, { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar.jsx";
import Item from "../../components/Item.jsx";
import { Link } from "react-router-dom";
import { House, PersonStanding } from "lucide-react";

const Home = () => {
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

  
  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <h1 className="text-[32px] font-bold text-dark pl-4 pt-[104.14px]">Welcome, Student!</h1>
      <Searchbar />

      <div className="flex gap-4 py-3 px-4">
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#E7F2FE] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#137FEC] rounded-full flex items-center justify-center">
            <House size={30} className="text-white"/>
          </div>
          <p className="font-bold">Find Building</p>
        </Link>
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#FEF5E9] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#F8B449] rounded-full flex items-center justify-center">
            <PersonStanding size={30} className="text-white"/>
          </div>
          <p className="font-bold">Find Lecturer</p>
        </Link>
      </div>

      <h3 className="text-dark font-bold text-lg">Recent</h3>
      <div className="flex flex-col gap-4  pl-4 pr-4">
        {entries.map((entry) => (
          <Item key={entry.id} item={entry} />
        ))}
      </div>
    </div>
  );
};

export default Home;
