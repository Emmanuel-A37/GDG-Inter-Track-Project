import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";
import Signup from "./pages/user/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login"
import Buildings from "./pages/user/Buildings";
import UploadDirectionsDesktop from "./pages/Desktop/UploadDesktop/UploadDirectionsDesktop";
import UploadBuildingDesktop from "./pages/Desktop/UploadDesktop/UploadBuildingDesktop";
import UploadBuildingIpod from "./pages/Ipod/UploadIpod/UploadBuildingIpod";
import EditBuildingIpod from "./pages/Ipod/EditBuildingIpod";
import EditBuildingIpad from "./pages/Ipad/EditBuildingIpad";
import EditBuildingDesktop from "./pages/Desktop/EditBuildingDesktop";
import EditBuildingMobile from "./pages/Mobile/EditBuildingMobile";
import UploadSuccessDesktop from "./pages/Desktop/UploadDesktop/UploadSuccessDesktop";
import UploadFailureDesktop from "./pages/Desktop/UploadDesktop/UploadFailureDesktop";  
import ManageRoutes from "./pages/admin/ManageRoutes";
import SplashPage from "./pages/user/SplashPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/home"
          element={
            <AdminProtectedRoute>
              <AdminHome />
            </AdminProtectedRoute>
          }
        />
        <Route path="/admin/upload-route" element={<AdminProtectedRoute><UploadDirectionsDesktop /></AdminProtectedRoute>} />
        <Route path="/admin/edit-route/:id" element={<AdminProtectedRoute><UploadDirectionsDesktop /></AdminProtectedRoute>} />
        <Route path="/admin/upload-success" element={<AdminProtectedRoute><UploadSuccessDesktop /></AdminProtectedRoute>} />
        <Route path="/admin/upload-failure" element={<AdminProtectedRoute><UploadFailureDesktop /></AdminProtectedRoute>} />
        <Route path="/admin/manage-routes" element={<AdminProtectedRoute><ManageRoutes /></AdminProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/" element={<SplashPage />} />
        <Route
          path="/home"
          element={ 
            
              <Home />
            
          }
        />
      </Routes>
      {/* <EditBuildingMobile/> */}
    </>
  );
};

export default App;
