import { useState } from "react";
import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import AuthProvider from "./context/authContext/authProvider";
import RequiredAuth from "./context/authContext/auth/requiredAuth";
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequiredAuth>
                            <Dashbord />
                        </RequiredAuth>
                    }
                />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
