import { Navigate } from "react-router-dom"


const UserProtectedRoute = ({ children}) => {
    const isUserAuthenticated = localStorage.getItem("user_auth") === "true"

    if (!isUserAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children
}

export default UserProtectedRoute