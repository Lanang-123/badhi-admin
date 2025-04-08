import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contribution from "./pages/Contribution/Contribution";
import ContributionDetail from "./pages/Contribution/ContributionDetail";
import ContributionInformation from "./pages/Contribution/ContributionInformation";
import RequestTemple from "./pages/RequestTemple/RequestTemple";
import Login from "./pages/Login/Login"; // Pastikan path ini sesuai dengan struktur proyek Anda
import ProtectedRoute from "./middleware/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route login untuk pengguna yang belum login */}
        <Route path="/" element={<Login />} />

        {/* Semua route setelah login dibungkus dalam layout utama */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contribution" element={<Contribution />} />
                    <Route
                      path="/contribution/detail/:id"
                      element={<ContributionDetail />}
                    />
                    <Route
                      path="/contribution/detail/information/:id"
                      element={<ContributionInformation />}
                    />
                    <Route
                      path="/request-temple"
                      element={<RequestTemple />}
                    />
                  </Routes>
                </Layout>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
