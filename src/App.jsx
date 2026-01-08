import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";
import Signup from "./pages/user/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login"
import UploadDirectionsDesktop from "./pages/Desktop/UploadDesktop/UploadDirectionsDesktop";
import UploadSuccessDesktop from "./pages/Desktop/UploadDesktop/UploadSuccessDesktop";
import UploadFailureDesktop from "./pages/Desktop/UploadDesktop/UploadFailureDesktop";
import ManageRoutes from "./pages/admin/ManageRoutes";
import Buildings from "./pages/user/Buildings";
import RoutePreview from "./pages/user/RoutePreview";

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
        <Route
          path="/"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
        <Route path="/buildings" element={<Buildings />} /> 
        <Route path="/route-preview/:id" element={<RoutePreview />} /> 
      </Routes>
      
    </>
  );
};

export default App;
