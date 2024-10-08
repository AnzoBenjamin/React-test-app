import React, { lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";

// Lazy-loaded pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ChooseUser = lazy(() => import("./pages/ChooseUser"));

// Initialize app
initializeApp();

// Check for login and initialize axios

function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app/*" element={<Layout />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
}

export default App;
