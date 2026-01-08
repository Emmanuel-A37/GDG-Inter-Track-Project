import Header from "../../components/Header";
import UploadCards from "../../components/UploadCards";
import Building from "../../assets/building.jpg";
import Direction from "../../assets/direction.jpg";
import UploadIcon from "../../assets/upload.svg";
import ArrowIcon from "../../assets/arrow_forward.svg";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="p-4">
        <h1 className="text-dark font-bold mt-3.5 text-[32px]">
          Welcome, <span className="text-primary">Administrator</span>
        </h1>
        <UploadCards
          imageSrc={Building}
          title="Upload Building Data"
          subtitle="Add or edit campus structures, landmarks, and lecture halls."
          buttonText="Upload Buildings"
          buttonIcon={ArrowIcon}
          onClick={() => navigate("/")}
        />
        <UploadCards
          imageSrc={Direction}
          title="Upload Directions"
          subtitle="Update routes, shortcuts, and card-based navigation paths."
          buttonText="Upload Routes"
          buttonIcon={UploadIcon}
          onClick={() => navigate("/admin/upload-route")}
        />

        {/* Manage Routes Card (not in figma) */}
        <div 
          onClick={() => navigate("/admin/manage-routes")}
          className="border border-borderGrey p-4 rounded-lg bg-white mb-4 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-dark">Manage Routes</h3>
              <p className="text-sm text-gray-500">Edit or delete existing routes</p>
            </div>
          </div>
        </div>

        <div className="border border-borderGrey p-4 rounded-lg bg-[#f9fafb]">
          <h2 className="font-bold text-[14px] text-dark mb-3">
            System Overview
          </h2>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            <div>
              <p className="text-[14px] text-[#6b7280] mb-1">Total Buildings</p>
              <p className="font-bold text-lg text-dark">42</p>
            </div>

            <div className="flex justify-center px-6">
              <span className="h-8 w-px bg-[#e5e7eb]" />
            </div>

            <div>
              <p className="text-[14px] text-[#6b7280] mb-1">Active Routes</p>
              <p className="font-bold text-lg text-dark">128</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
