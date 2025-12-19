import React from "react";
import Navbar from "../../../components/Navbar";
import { ChevronLeft } from "lucide-react";

const Details = ({ option, goBack }) => {
  if (!option) return <p>No details available</p>;

  return (
    <div>
      <Navbar title={option.title} />
      <button onClick={goBack}><ChevronLeft/></button>

      <div className="h-80 overflow-hidden"><img src={option.img} alt={option.title} /></div>

      <h3 className="text-2xl font-bold pl-3">{option.main}</h3>

      <p className="pl-6 pt-20">{option.info}</p>
    </div>
  );
};

export default Details;
