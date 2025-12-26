import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";
import UploadBuildingDesktop from "./pages/Desktop/UploadDesktop/UploadBuildingDesktop";
import UploadDirectionsDesktop from "./pages/Desktop/UploadDesktop/UploadDirectionsDesktop";

function App() {
  return (
    // <Routes>
    //   <Route path="/admin/login" element={<AdminLogin />} />
    //   <Route
    //     path="/admin/home"
    //     element={
    //       <ProtectedRoute>
    //         <AdminHome />
    //       </ProtectedRoute>
    //     }
    //   />
    // </Routes>
<UploadDirectionsDesktop/>
  );
}

export default App;
