import React, { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar.jsx";
import Item from "../../components/Item.jsx";
import { Link, useNavigate } from "react-router-dom";
import { House, PersonStanding } from "lucide-react";
import { getRecent } from "../../utils/recent";

const Home = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  setEntries(getRecent());
}, []);


  const handleItemClick = (item) => {
    if (item.type === "building") {
      navigate(`/home/buildings/${item.id}`, { state: { item } });
    } else if (item.type === "route") {
      navigate(`/home/routes/${item.id}`, { state: { item } });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <h1 className="text-[32px] font-bold text-dark pl-4 pt-[104.14px]">
        Welcome, Student!
      </h1>
      <Searchbar
        onResults={(results) => {
          setEntries(results);
        }}
      />

      <div className="flex gap-4 py-3 px-4">
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#E7F2FE] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#137FEC] rounded-full flex items-center justify-center">
            <House size={30} className="text-white" />
          </div>
          <p className="font-bold">Find Building</p>
        </Link>
        <Link
          to=""
          className="flex flex-col items-center justify-center h-40 bg-[#FEF5E9] w-full rounded-2xl p-6 my-3"
        >
          <div className="w-14 h-14 bg-[#F8B449] rounded-full flex items-center justify-center">
            <PersonStanding size={30} className="text-white" />
          </div>
          <p className="font-bold">Find Lecturer</p>
        </Link>
      </div>

      <h3 className="text-dark font-bold text-lg p-4">
        {entries.length > 0 ? "Recent Searches" : "No Recent Searches"}
      </h3>
      <div className="flex flex-col gap-4  pl-4 pr-4">
        {entries.map((entry, index) => (
          <Item
            key={`${entry.type}-${entry.id}`}
            item={entry}
            index={index}
            onClick={() => handleItemClick(entry)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
