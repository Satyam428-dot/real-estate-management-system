import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import buildingImage from "../assets/d1.jpg";
import "./css/Login.css";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { JAVA_BACKEND_URL } from "../utils/config";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${JAVA_BACKEND_URL}/login`,{
                email,password,
            });

            console.log("Login successful",response.data);
            const user = response.data;

            //Store token separately
            localStorage.setItem("token",user.token);

            //Store complete user object
            localStorage.setItem("loggedInUser",JSON.stringify(user));

            toast.success("Login Successful");

            //Role based navigation
            if(user.userRole === "ADMIN"){
                navigate("/admin/dashboard");
            }else if (user.userRole === "OWNER"){
                navigate("/owner/dashboard");
            }else{
                navigate("/buyer/dashboard");
            }
        } catch (error) {
            console.log("Error Logging in",error);
            toast.error("Invalid email or Password. Please! try again");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                {/*LeftSection*/}
                <div className="left-panel">
                    <img src={buildingImage} alt="Real Estate Building" className="building-image" />
                </div>

                {/*RightSection*/}
                <div className="right-panel">
                    <div className="login-form-container">
                        <div className="logo-circle">🏚️</div>
                        <h2>Welcome!</h2>
                        <p className="subtitle">Welcome Back! Explore effortlessly</p>

                        <form onSubmit={handleLogin}>
                            {/*Email*/}
                            <div className="mb-3">
                                <input type="email" className="form-control custom-input" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            {/*Password*/}
                            <div className="mb-2 password-field">
                                <input type={showPassword ? "text" : "password"} className="form-control custom-input" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <button type="button" className="password-toggle" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword}>
                                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                </button>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <input type="checkbox" />Remember Me
                                </div>

                                <a href="/">Forget Password</a>
                            </div>

                            {/*Login Button*/}
                            <button type="submit" className="btn login-btn w-100">Login</button>

                            {/*Google Login Button*/}
                            <button type="button" className="btn google-btn w-100 mt-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" width="20" />
                                Sign in with Google
                            </button>
                        </form>

                        <div className="signup-text">Don't have an account?
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;