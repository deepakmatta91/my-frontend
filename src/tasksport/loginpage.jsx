import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import N1 from "./loginpage.module.css"

const Loginpage = () => {
    const [mode, setMode] = useState("login"); // start in login mode
    const navigate = useNavigate(); // initialize navigate

    const handleLoginClick = () => {
        // Optional: you can add validation here later
        navigate("/"); // navigate to Home page
    };

    return (
        <div className={N1.container}>
            <div className={N1.container1}>
                <div className={N1.header}>
                    <div className={N1.text}>{mode === "login" ? "Login" : "Signup"}</div>
                    <div className={N1.underline}></div>
                </div>

                <div className={N1.inputs}>
                    {mode === "login" ? null : (
                        <div className={N1.input}>
                            <input placeholder="Name" type="text" />
                        </div>
                    )}
                    <div className={N1.input}>
                        <input placeholder="Email" type="email" />
                    </div>
                    <div className={N1.input}>
                        <input placeholder="Password" type="password" />
                    </div>
                </div>

                {mode === "signup" ? null : (
                    <div className={N1.forgotpassword}>
                        Lost Password? <span>Click me</span>
                    </div>
                )}

                <div className={N1.submitcontainer}>
                    <div
                        className={ N1.mode === "signup" ? "submit gray" : "submit"}
                        onClick={() => setMode("signup")}
                    >
                        Sign Up
                    </div>

                    <div
                        className={ N1.mode === "login" ? "submit gray" : "submit"}
                        onClick={() => {
                            if (mode === "login") {
                                handleLoginClick(); // 🔥 login and navigate
                            } else {
                                setMode("login"); // just switch to login mode
                            }
                        }}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;