import React from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const item = state?.item;

  if (!item) return <p>No details available</p>;

  const navigate = useNavigate();

  return (
    <div>
      <Navbar title={item.title}>
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
      </Navbar>

      <div className="h-80 overflow-hidden">
        <img src={item.img} alt={item.title} />
      </div>

      <h3 className="text-2xl font-bold pl-3">{item.main}</h3>

      <p className="pl-6 pt-20">{item.info}</p>
    </div>
  );
};

export default Details;
