import React from "react";
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect } from "react";

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          ></Route>
          <Route
            path="/Login"
            element={<AdminLoginPage />}
          ></Route>
        </Routes>
      );
      break;
    default:
      return (
        <Routes>
          <Route exact path="/admin/dashboard" element={<NotFoundPage />}></Route>
          <Route path="/Login" exact element={<AdminLoginPage />}></Route>
        </Routes>
      );
      break;
  }
}

function Main() {
  const { state } = React.useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/login", {replace: true})
  }, [])

  return (
    <div className="h-[100%]">
      <div className="flex w-full">
        <div className="w-full">
          <div className="page-wrapper w-full py-10 px-5">
            {!state.isAuthenticated
              ? renderRoutes("none")
              : renderRoutes(state.role)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
