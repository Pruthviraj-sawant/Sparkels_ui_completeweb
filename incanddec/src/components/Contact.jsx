import { useState } from "react";
import { sendContactForm } from "../api/api"; // adjust path as needed
import { Stars } from "sparkels_ui";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        await sendContactForm(formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        alert(error.message);
      }
    } else {
      setErrors(newErrors);
    }
  };
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
      
      
//       <div><Stars /></div>
//       <div className="w-[100vw] h-full flex absolute items-center space-x-96">
//       <div className=" text-white p-8 rounded-xl w-[500px] max-w-4xl mx-auto space-y-8 shadow-lg ml-32">
//   {/* Top CTA Message */}
//   <div className="text-center">
//     <h2 className="text-2xl font-bold mb-2">Want a Website for Your Business?</h2>
//     <p className="text-gray-300 text-sm">
//       We're on a mission to build stunning, responsive websites for clients. If you’re looking to take your business online, get in touch with us!
//     </p>
//   </div>

//   {/* Contact Blocks */}
//   <div className="grid grid-cols-1 md:grid-row-3 gap-6">
//     {/* Chat Block */}
//     <div className="bg-[#1F2937] p-6 rounded-lg space-y-2">
//       <div className="flex items-center space-x-3">
//         <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h6" />
//         </svg>
//         <h3 className="text-lg font-semibold">Chat on us</h3>
//       </div>
//       <p className="text-sm text-gray-300">Our friendly team is here to help.</p>
//       <p className="text-sm font-semibold">FUTUREMENTOR@gmail.com</p>
//     </div>

//     {/* Visit Block */}
//     <div className="bg-[#1F2937] p-6 rounded-lg space-y-2">
//       <div className="flex items-center space-x-3">
//         <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.313 8.343 16.657A8 8 0 1117.657 16.657z" />
//         </svg>
//         <h3 className="text-lg font-semibold">Visit us</h3>
//       </div>
//       <p className="text-sm text-gray-300">Come and say hello at our office HQ.</p>
//       <p className="text-sm font-semibold">
//         Plot No 52 Mukt Sainik Colony,<br />Kolhapur PIN - 416005
//       </p>
//     </div>

//     {/* Call Block */}
//     <div className="bg-[#1F2937] p-6 rounded-lg space-y-2">
//       <div className="flex items-center space-x-3">
//         <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59a1 1 0 00.9.41h6.72a1 1 0 00.9-.41L21 5H3z" />
//         </svg>
//         <h3 className="text-lg font-semibold">Call us</h3>
//       </div>
//       <p className="text-sm text-gray-300">Mon - Fri From 8am to 5pm</p>
//       <p className="text-sm font-semibold text-cyan-300">+91 9322793132</p>
//     </div>
//   </div>
// </div>

       
//       <div className="flex flex-row justify-center items-center text-white absolute sm:w-full flex-col mb-84 w-[300px]">
//         <div className="text-2xl sm:text-3xl font-semibold tracking-wide mb-4">ascaius</div>

//         <div className="flex justify-center items-center text-white absolute w-full flex-col mb-84">
//           <div className="w-full max-w-md bg-gray-900/90 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-2xl transition-all duration-300">
//             <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

//             {submitted && (
//               <p className="text-green-400 text-center mb-4 transition-opacity duration-300">
//                 Message sent successfully!
//               </p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 text-sm text-gray-300">Full Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-gray-300">Email</label>
//                 <input
//                   type="email"
//                   className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   placeholder="example@email.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//                 {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm text-gray-300">Message</label>
//                 <textarea
//                   className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   rows="4"
//                   placeholder="Write your message here..."
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 ></textarea>
//                 {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Contact;
return (
  <div className="relative flex flex-col items-center  justify-center min-h-screen  sm:px-6 lg:px-8 text-center text-white overflow-hidden">
    <div className="relative flex flex-col w-[100vw]  h-full items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white overflow-x-hidden overflow-y-auto">
      <div className="h-[100vh] w-[100vw]">
        <Stars />
      </div>

      <div className="absolute  flex flex-col lg:flex-row w-full max-w-7xl space-y-60 justify-center items-center lg:space-y-0 lg:space-x-28 z-10 lg:mt-0 mt-[700px] lg:h-full h-[30rem]">
        
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center lg:h-full h-[500px] text-white w-[300px] sm:w-full ">
         

          <div className="w-full p-8 rounded-xl mx-auto space-y-8 shadow-lg bg-[#111827]/90 backdrop-blur border border-gray-700 lg:mt-0 mt-96">
            {/* Top CTA Message */}
            <div className="text-center">
              <h2 className="text-[2rem] font-bold mb-2">Want a Website for Your Business?</h2>
              <p className="text-gray-300 text-sm">
                We're on a mission to build stunning, responsive websites for clients. If you’re looking to take your business online, get in touch with us!
              </p>
            </div>

            {/* Contact Blocks */}
            <div className="grid grid-cols-1 md:grid-rows-3 gap-6">
              {/* Chat */}
              <div className="bg-[#1F2937] lg:p-6 p-2  rounded-lg space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h6" />
                  </svg>
                  <h3 className="text-lg font-semibold">Chat with us</h3>
                </div>
                <p className="text-sm text-gray-300">Our friendly team is here to help.</p>
                <p className="text-sm font-semibold">sawantprithviraj1@gmail.com</p>
              </div>

              {/* Visit */}
              <div className="bg-[#1F2937] lg:p-6 p-2  rounded-lg space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.313 8.343 16.657A8 8 0 1117.657 16.657z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Visit us</h3>
                </div>
                <p className="text-sm text-gray-300">Come and say hello at our office HQ.</p>
                <p className="text-sm font-semibold">
                  Plot No 52 Mukt Sainik Colony,<br />Kolhapur PIN - 416005
                </p>
              </div>

              {/* Call */}
              <div className="bg-[#1F2937] lg:p-6 p-2  rounded-lg space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59a1 1 0 00.9.41h6.72a1 1 0 00.9-.41L21 5H3z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Call us</h3>
                </div>
                <p className="text-sm text-gray-300">Mon - Fri From 8am to 5pm</p>
                <p className="text-sm font-semibold text-cyan-300">+91 9322793132</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col items-center text-white w-[20rem] lg:w-full  lg:mt-0">
          <div className="w-full max-w-md bg-[#1A1A2E]/90 backdrop-blur border border-[#2E2E3A] p-6 rounded-2xl shadow-2xl transition-all duration-300 lg:mt-0 mt-32">
           <h2 className="text-2xl font-bold text-center mb-4 text-[#E0E0E0]">Contact Us</h2>

            {submitted && (
              <p className="text-green-400 text-center mb-4 transition-opacity duration-300">
                Message sent successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-lg bg-[#2C2C3E] border border-[#3F3F5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-lg bg-[#2C2C3E] border border-[#3F3F5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">Message</label>
                <textarea
                  className="w-full p-2 rounded-lg bg-[#2C2C3E] border border-[#3F3F5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
export default Contact;
