import React from "react";

const Item = ({ title }) => {
  return (
    <div className="flex items-center justify-between  rounded-xl p-3 bg-white h-18">
        <div className="flex gap-2"><img src="" alt="" />
      <p className="font-bold">{title}</p></div>
      <button>next</button>
        
    </div>
  );
};

export default Item;
