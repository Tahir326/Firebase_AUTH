// import React from 'react'
// import { Link} from "react-router-dom";

// function Home2() {
//   return (
//     <div>
//     <h1>You Have Succesfully SignedUp</h1>
//     <button >
//         <Link to="/">LOGIN</Link>
//     </button>
//     </div>
//   )
// }

// export default Home2


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
import React from 'react'
import logo from '../../assets/logo.png'; 
import { Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-blur-xl flex justify-center items-center">
            <div className="min-w-[480px] p-6 bg-white shadow-2xl shadow-[#76ea99] rounded-lg flex flex-col items-center gap-3">
                <img className='ml-[1%] h-auto w-64 mb-4' src={logo} alt="LOGO" />
                <h1 className="text-2xl text-[#596675]  ml-8 font-bold mb-4">You Have Successfully SignedUp</h1>
                <Link to="/"className="text-[#04962F] font-bold py-2 px-4   hover:underline">Go back to Login</Link>
   
            </div>
        </div>
    )
}

export default Home;
