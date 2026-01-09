import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Item from "../../components/Item";
import { saveToRecent } from "../../utils/recent";
import { apiCall } from "../../utils/api";

const SearchResults = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      setError("");
      try {
        const dataB = await apiCall(`/buildings/search?q=${query}`);
        const dataR = await apiCall(`/routes/search?q=${query}`);

        const items = [];

        if (dataB.success) {
          dataB.data.forEach((b) => {
            items.push({ ...b, type: "building", title: b.name });
          });
        }

        if (dataR.success) {
          dataR.data.forEach((r) => {
            const title = `${r.start_building} → ${r.end_building}`;
            items.push({ ...r, type: "route", title });
          });
        }

        setResults(items);
      } catch (err) {
        console.error("Failed to fetch search results:", err);
        setError("Failed to load search results. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleClick = (item) => {
    saveToRecent(item);
    navigate(
      item.type === "building"
        ? `/home/buildings/${item.id}`
        : `/home/routes/${item.id}`
    );
  };

  if (!query) return <p className="p-4">Please enter a search query.</p>;

  if (loading) return <p className="p-4">Loading results...</p>;

  if (error) return <p className="p-4 text-red-500">{error}</p>;

  if (results.length === 0) return <p className="p-4">No results found.</p>;

  return (
    <div className="p-4 flex flex-col gap-3">
      {results.map((item, i) => (
        <Item
          key={`${item.type}-${item.id}`}
          item={item}
          index={i}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
