import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
