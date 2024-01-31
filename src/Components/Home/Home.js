
// import { signOut } from 'firebase/auth'
// import React from 'react'
// import { auth } from '../../firebase';
// import { useNavigate } from 'react-router-dom'; 

// const Home = () => {
//     const navigate = useNavigate();
//     const handleLogout = async () => {
//       await signOut(auth);
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       navigate("/"); 
//     }

// return (
//     <div>
//     <h1>You Have Succesfully Logged in</h1>
//     <button onClick={handleLogout}>Logout</button>
//     </div>
// )
// }
// export default Home;

import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/logo.png'; // Assuming you have a logo to display

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/"); 
    }

    return (
        <div className="min-h-screen bg-blur-xl flex justify-center items-center">
            <div className="min-w-[480px] p-6 bg-white shadow-2xl shadow-[#76ea99] rounded-lg flex flex-col items-center gap-3">
                <img className='-ml-[5%] h-auto w-64 mb-4' src={logo} alt="LOGO" />
                <h1 className=" text-2xl font-bold text-[#596675] ml-6 mb-4">You Have Successfully Logged in</h1>
                <button 
                    onClick={handleLogout}
                    className="bg-[#04962F] text-white rounded-md font-bold py-2 px-4 hover:shadow-lg hover:shadow-[#04962F]"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home;
