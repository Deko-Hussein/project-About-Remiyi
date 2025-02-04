// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     farmType: '',
//   });
  
//   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Sign Up Data:', formData);
// //     alert('Sign-up successful! Welcome to the farming community.');
// //     setIsSubmitted(true); 
// //     setFormData({ name: '', email: '', password: '', farmType: '' });
// //   };

// //   if (isSubmitted) {
// //     return <Navigate to="/" />;
// //   }

// //   return (
// //     <div className="max-w-md mx-auto p-4 border rounded-lg">
// //       <h2 className="text-2xl font-semibold text-center">Sign Up for Farming</h2>
// //       <form onSubmit={handleSubmit} className=" flex flex-col gap-6 mr-16 p-10 shadow-lg rounded-lg bg-lime-500 my-10 shadow-black bottom-40 mt-4">
// //         <div className="mb-4">
// //           <label className="block mb-2">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="border rounded w-full p-2 username  border-gray-200 focus:outline-none focus:border-gray-800"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="border rounded w-full p-2"
// //             required
// //           />
// //         </div>
// //         <div className="relative mb-2 pb-1">
// //           <label className="block mb-2">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className="border rounded w-full p-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Type of Farm</label>
// //           <input
// //             type="text"
// //             name="farmType"
// //             value={formData.farmType}
// //             onChange={handleChange}
// //             className="border rounded w-full p-2"
// //             placeholder="e.g., vegetable, livestock"
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="bg-blue-500 text-white rounded w-full p-2">
// //           Sign Up
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default SignUp;
// // 


import React, { useState } from 'react';
import Header from "../component/Header";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
   <button className='bg-lime-600' > alert('Your message has been sent successfully!');</button>
    setFormData({ name: '', email: '', message: '' });
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <Header />
      <section className="">
        <div className=" grid grid-cols-2 gap-16 p-16 bg-lime-600 m-auto">
          {/* <aside className="bg-white mt-[40%] shadow-lime-600 shadow-lg p-12 rounded-lg relative bottom-40">
            <div className="side_image w-48 mb-8">
              <img src="./images/Work_from_anywhere.png" alt="Work from anywhere"/>
            </div>
            <h2 className="text-left mb-4 text-2x font-semibold">Contact Us</h2>
            <p className="text-md mb-8 space-r-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, impedit.</p>

            <ul className="contact_details mb-4">
              <li className="flex items-center gap-4 mb-4 text-center">
                <i className="uil uil-phone"></i>
                <h5>25261...</h5>
              </li>
              <li className="flex items-center gap-4 mb-4">
                <i className="uil uil-envelope"></i>
                <span>dFoojaa@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="uil uil-map-marker"></i>
                <h5>Mogadishu, Dayniile</h5>
              </li>
            </ul>

            <ul className="flex gap-4 mt-12">
              <li><a href="#" className="bg-gray-200 p-2 rounded-full text-xs transition-all hover:bg-transparent"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" className="bg-gray-200 p-2 rounded-full text-xs transition-all hover:bg-transparent"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#" className="bg-gray-200 p-2 rounded-full text-xs transition-all hover:bg-transparent"><i className="fa-brands fa-whatsapp"></i></a></li>
              <li><a href="#" className="bg-gray-200 p-2 rounded-full text-xs transition-all hover:bg-transparent"><i className="fa-brands fa-whatsapp"></i></a></li>
            </ul>
          </aside> */}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mr-16 p-10 shadow-lg rounded-lg bg-lime-500 my-10 shadow-black bottom-40" id="form">
            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="username" className="mb-1">Username</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="username w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="name" id="username" required />
            </div>

            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="email w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="email" id="email" required />
            </div>

            <div className="form-control relative mb-2 pb-1">
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="password w-full p-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-800" placeholder="Your message" id="message" required />
            </div>

            <button type="submit" className="btn w-full bg-lime-600 text-white p-3 rounded-md hover:bg-blue-500">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
