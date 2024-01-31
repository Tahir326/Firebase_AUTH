import React from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { MdEmail } from "react-icons/md";
import { auth } from "../../firebase";
import logo from '../../assets/logo.png';

function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        sendPasswordResetEmail(auth, emailVal)
        .then(() => {
            alert("Check your email to reset your password.");
            navigate("/");
        })
        .catch((err) => {
            switch(err.code) {
                case "auth/user-not-found":
                    alert("No user found with this email.");
                    break;
                case "auth/invalid-email":
                    alert("Invalid email format.");
                    break;
                default:
                    alert("Error: " + err.message);
                    break;
            }
    });

    };

    return (
        <div className="min-h-screen bg-blur-xl flex justify-center items-center">
            <div className="min-w-[480px] p-6 bg-white shadow-2xl shadow-[#76ea99] rounded-lg flex flex-col gap-3">
                <img className='ml-[16%] h-auto w-64' src={logo} alt="LOGO" />

                <h1 className="text-center text-2xl text-[#596675] font-bold mb-4">Forgot Password</h1>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                        <input 
                            name="email" 
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#76ea99]"
                        />
                        <div className="absolute right-4 top-3">
                            <MdEmail className="text-gray-400 w-5 h-5" />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="bg-[#04962F] text-white rounded-md font-bold py-2 hover:shadow-lg hover:shadow-[#04962F] disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Reset Password
                    </button>
                </form>

                <div className="flex justify-center items-center">
                    <span className="text-sm">
                        Remembered?{" "}
                        <button 
                            onClick={() => navigate("/")}
                            className="text-[#04962F] font-bold hover:underline"
                        >
                             Log in 
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;

