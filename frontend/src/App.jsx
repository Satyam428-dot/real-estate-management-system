import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";

function App() {
    return (
        <>
            <ToastContainer 
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
