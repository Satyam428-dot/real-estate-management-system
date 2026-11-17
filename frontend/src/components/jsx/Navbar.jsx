import "../css/Navbar.css";
import home_icon from "../../assets/home_icon.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    
    const navigate = useNavigate();
    const registerClick = (e) => {
        navigate("/Register");
    }

    const loginClick = (e) => {
        navigate("/Login");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5">
            <div className="container-fluid">
                {/*Logo*/}
                <a className="navbrar-brand d-flex align-items-center" href="/">
                    <img src={home_icon} alt="UEstate Logo" width="40" height="40" className="me-2"/>
                    <span className="fw-bold logo-text">UEstate<span className="logo-HQ">VHQ</span></span>
                </a>
            </div>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item">
                        <a className="nav-link active text-primary fw-semibold" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/properties">PROPERTIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/agents">AGENTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">BLOG</a>
                    </li>
                </ul>
            </div>

            {/*Buttons*/}
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onCLick={registerClick}>REGISTER</button>
                <button className="btn btn-outline-primary" onClick={loginClick}>LOGIN</button>
            </div>
        </nav>
    )
}