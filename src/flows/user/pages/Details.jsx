import React from "react";
import Navbar from "../../../components/Navbar";

const Details = ({ option, goBack }) => {
  if (!option) return <p>No details available</p>;

  return (
    <div>
      <Navbar title={option.title} />
      <button onClick={goBack}>Go back</button>

      <img src={option.img} alt="" />
      <p>{option.info}</p>
    </div>
  );
};

export default Details;
