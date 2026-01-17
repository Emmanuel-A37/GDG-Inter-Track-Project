import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Beaker } from "lucide-react";

const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/recent/${item.id}`, {
      state: { item },
    });
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-between  rounded-xl p-3 bg-white h-18"
    >
      <div className="flex gap-2 items-center">
        <div className="bg-[#E7F2FD] w-12 h-12 flex items-center justify-center">
          <Beaker className="text-[#137FEC] w-6 h-6"/>
        </div>
        <p className="font-bold">{item.title}</p>
      </div>
      <span className="">
        <ChevronRight />
      </span>
    </button>
  );
};

export default Item;
