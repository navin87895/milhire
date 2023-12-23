import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/home" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </>
  );
};

export default App;
