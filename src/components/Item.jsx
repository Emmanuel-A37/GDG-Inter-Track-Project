import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Item = ({ title, id }) => {
  return (
    <Link to={`/recent/${id}`}
      
      className="flex items-center justify-between  rounded-xl p-3 bg-white h-18"
    >
      <div className="flex gap-2">
        <img src="" alt="" />
        <p className="font-bold">{title}</p>
      </div>
      <span className="">
        <ChevronRight />
      </span>
    </Link>
  );
};

export default Item;
