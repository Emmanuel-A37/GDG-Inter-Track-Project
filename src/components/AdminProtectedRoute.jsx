import { Navigate } from "react-router-dom"
import AuthService from "../services/auth.service"

const AdminProtectedRoute = ({ children}) => {
    const isAdminAuthenticated = AuthService.isAuthenticated();
 
    if (!isAdminAuthenticated) {
        return <Navigate to="/admin/login" replace />
    }

export default AdminProtectedRoute;
