import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from "../config/firebase" 
import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [name,setNamme]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const auth = getAuth();
  

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const cuser=auth.currentUser;
      if(cuser)
      {
        setDoc(doc(db,"users",cuser.uid),{
          email:cuser.email,
          name:name,
          password:password
        })
      }
      console.log(cuser)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign Up</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setNamme(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm pl-10 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="User Name"
            />
            {/* <FaGoogle className="absolute top-2 left-2 text-pink-500" /> */}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm pl-10 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Email"
            />
            {/* <FaGoogle className="absolute top-2 left-2 text-pink-500" /> */}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="Password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="Confirm Password"
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full px-4 py-2 font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 transition duration-300"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;






















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const auth = getAuth();

//   // const handleSignup = async () => {
//   //   try {
//   //     await createUserWithEmailAndPassword(auth, email, password);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             placeholder="Password"
//           />
//         </div>
//         <button
//           // onClick={handleSignup}
//           className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
//         >
//           Sign Up
//         </button>
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account?{' '}
//           <Link to="/" className="text-blue-500 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
