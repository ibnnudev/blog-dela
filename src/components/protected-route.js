import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p>Loading...</p>
    }

    const isAuthenticated = !!user;

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children;
}
