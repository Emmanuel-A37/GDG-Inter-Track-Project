import React from "react";
import { ChevronRight } from "lucide-react";

const Item = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between  rounded-xl p-3 bg-white h-18"
    >
      <div className="flex gap-2">
        <img src="" alt="" />
        <p className="font-bold">{title}</p>
      </div>
      <span className="">
        <ChevronRight />
      </span>
    </button>
  );
};

export default Item;
