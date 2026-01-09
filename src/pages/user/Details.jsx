import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronLeft } from "lucide-react";
import { apiCall } from "../../utils/api";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const isRoute = location.pathname.includes("routes");
  const stateItem = location.state?.item;

  const [item, setItem] = useState(stateItem || null);
  const [loading, setLoading] = useState(!stateItem);
  const [error, setError] = useState("");

  useEffect(() => {
    if (stateItem) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        const endpoint = isRoute
          ? `/routes/${id}`
          : `/buildings/${id}`;

        const res = await apiCall(endpoint);
        setItem(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, isRoute, stateItem]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!item) return <p className="p-4">Item not found</p>;

  const pageTitle = isRoute
    ? `${item.start_building.name} → ${item.end_building.name}`
    : item.name;

  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <Navbar title={pageTitle}>
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
      </Navbar>

      {!isRoute && item.image_url && (
        <div className="h-80 overflow-hidden">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}


      <h3 className="text-2xl font-bold pl-4 mt-4">
        {pageTitle}
      </h3>

      {!isRoute && item.description && (
        <p className="pl-4 pt-3 text-gray-600">
          {item.description}
        </p>
      )}
      {isRoute && (
        <div className="p-4 space-y-4">
          <h4 className="font-semibold text-lg">Directions</h4>

          {item.steps.map((step) => (
            <div
              key={step.step_number}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <p className="font-semibold">
                Step {step.step_number}
              </p>

              <p className="text-gray-600 mt-1">
                {step.instruction}
              </p>

              {step.image_url && (
                <img
                  src={step.image_url}
                  alt={`Step ${step.step_number}`}
                  className="mt-3 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
