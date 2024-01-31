import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/logo.png'

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

function Login() {
  const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);

    const Icon = (
      <span
        onClick={() => setVisibility((visibility) => !visibility)}
        title={visible ? "Hide Password" : "Show Password"}
      >
        {visible ? (
          <FaEye className="h-auto w-[1.2rem]" />
        ) : (
          <FaEyeSlash className="h-auto w-[1.2rem]" />
        )}
      </span>
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
  };
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/HOME");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handlereset=()=>{
    navigate("/Reset");
  }
  return (
    <div className="min-h-screen bg-blur-xl  flex justify-center items-center">
      <div className="min-w-[480px] p-6 bg-white shadow-2xl shadow-[#76ea99] rounded-lg flex flex-col gap-3">
        <img className='ml-[18.5%] h-auto w-64' src={logo} alt="LOGO" />


        <div className="relative">
           <InputControl
            label="Email"
            
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />

          <div className="absolute right-[0.8rem] bottom-[0.9rem] "title={"Email"}>
            <span>
            <MdEmail className='h-auto w-[1.15rem]' />
            </span>
          </div>
        </div>

        <div className="relative">
          <InputControl
            id="password"
            label="Password"
            placeholder="Enter password"
            type={PasswordInputType}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))

            }
            
          />
         
         
          <div className="absolute right-[0.8rem] bottom-[0.9rem] cursor-pointer">
            <span>
              {ToggleIcon}
            </span>
          </div>
        </div>
          <p className="cursor-pointer -ml-[69.5%] text-[#04962F] mt-2 text-sm font-bold  hover:underline" onClick={handlereset}>Forgot Password..?</p>



        <div className="flex flex-col gap-4">
          <b className="text-red-600 font-semibold text-center">{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className={`bg-[#04962F] text-white rounded-md font-bold py-2 ${
              submitButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "hover:shadow-lg hover:shadow-[#04962F]"
            }`}
          >
            Login
          </button>
          <p className="font-semibold text-center">
            Don't have an account?{" "}
            <span>
              <Link to="/signup" className="text-[#04962F] font-bold  hover:underline ">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
