import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Cek apakah token sudah tersedia (misal token disimpan di localStorage)
  const token = localStorage.getItem("token");

  if (!token) {
    // Jika token tidak ada, arahkan ke halaman login
    return <Navigate to="/dashboard" replace />;
  }

  // Jika token ada, render child component-nya
  return children;
};

export default ProtectedRoute;
