import { Navigate } from "react-router-dom"


const AdminProtectedRoute = ({ children}) => {
    const isUserAuthenticated = localStorage.getItem("user_auth") === "true"

    if (!isUserAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default AdminProtectedRoute