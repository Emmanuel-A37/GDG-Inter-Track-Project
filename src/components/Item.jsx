import { ChevronRight, Map, Building } from "lucide-react";

const iconMap = {
  building: Building,
  route: Map,
};

const Item = ({ item, index, onClick }) => {
  const Icon = iconMap[item.type] || Building;

  const colors =
    index % 2 === 0
      ? "bg-[#E7F2FD] text-[#137FEC]"
      : "bg-[#FEF5E9] text-[#F8B449]";

  const getTitle = (item) => {
  if (item.type === "route") return `${item.start_building || "?"} to ${item.end_building || "?"}`;
  return item.name || "Untitled";
};


  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl p-3 ${colors}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>

        <p className="font-bold text-left">{getTitle(item)}</p>
      </div>

      <ChevronRight />
    </button>
  );
};

export default Item;
