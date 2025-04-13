// import { BlackholeVortex } from "sparkels_ui";
// import { Link } from "react-router-dom";
// const Home = () => {
//     return (
//         <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
//             <BlackholeVortex />

//             <div className="absolute items-start w-full flex flex-col mb-96">
//                 <h1 className="text-5xl font-extrabold text-transparent w-[100vw] flex ml-10 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mr-50">
//                     Make your websites<br /> look 10x modern
//                 </h1>
//                 <p className="text-lg text-gray-300 max-w-xl">
//                     Copy-paste the most trending components and use them in your websites without having to worry about styling and animations.
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-4 ml-14">
//                 <Link to="/components" ><button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all">
//                         Browse Components
//                     </button></Link>
//                     <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all">
//                         Custom Components
//                     </button>
//                 </div>

//                 <div className="mt-8 flex flex-wrap ml-14 gap-6 text-gray-400 text-sm">
//                     <span className="px-3 py-1 bg-gray-900 rounded-lg">Next.js</span>
//                     <span className="px-3 py-1 bg-gray-900 rounded-lg">React</span>
//                     <span className="px-3 py-1 bg-gray-900 rounded-lg">TailwindCSS</span>
//                     <span className="px-3 py-1 bg-gray-900 rounded-lg">Framer Motion</span>
//                 </div>

//                 {/* Newly added content */}
               
//             </div>
//             <div className="mt-16 text-center px-6">
//     <h2 className="text-4xl font-semibold text-white">
//         A hundred percent free, and at least twice as awesome
//     </h2>
    
//     {/* Stats Cards */}
//     <div className="flex justify-center items-center gap-6 mt-8">
//         {/* Components Card */}
//         <div className="bg-cyan-500 p-6 rounded-xl shadow-lg text-black w-96 h-48 flex flex-col justify-center">
//             <span className="text-5xl font-bold">30+</span>
//             <span className="text-lg">Components</span>
//         </div>

//         {/* Variants Card */}
//         <div className="border border-cyan-500 p-6 rounded-xl shadow-lg text-cyan-400 w-96 h-48 flex flex-col justify-center relative">
//             <span className="text-5xl font-bold">space</span>
//             <span className="text-lg">Variants</span>
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Randomized particle effect (You can replace this with an actual animation) */}
              
//             </div>
//         </div>
//     </div>

//     {/* Copy & Paste Section */}
//     <div className="mt-12">
//         <div className="flex justify-center gap-2">
//             <span className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md">JS</span>
//             <span className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md">TAILWIND</span>
//             <span className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md">FRAMER MOTION</span>
            
//         </div>

//         <h3 className="text-2xl font-semibold text-white mt-4">Simply copy & paste</h3>
//         <p className="text-lg text-gray-400">Pick your favourite technologies, copy, enjoy!</p>
//     </div>
// </div>

//         </div>
//     );
// };

// export default Home;
import { BlackholeVortex } from "sparkels_ui";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center text-white overflow-x-hidden">
      <BlackholeVortex />
      
      {/* Hero Section */}
      <div className="absolute w-full flex flex-col items-center lg:items-start pt-16 sm:pt-24 md:pt-32 z-10 -mt-[500px] sm:-mt-[600px]">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl -mt-60  sm:mt-0 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center lg:text-left">
            Make your websites<br className="hidden sm:block" /> look 10x modern
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-xl  mx-auto lg:mx-0 text-center lg:text-left sm:mt-0 mt-60">
            Copy-paste the most trending components and use them in your websites without having to worry about styling and animations.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link to="/components">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all text-sm sm:text-base">
                Browse Components
              </button>
            </Link>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition-all text-sm sm:text-base">
              Custom Components
            </button>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <span className="px-2 sm:px-3 py-1 bg-gray-900 rounded-lg">Next.js</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-900 rounded-lg">React</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-900 rounded-lg">TailwindCSS</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-900 rounded-lg">Framer Motion</span>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="  w-full max-w-7xl px-4 sm:px-6 z-10 sm:mt-0 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          A hundred percent free, and at least twice as awesome
        </h2>
        
        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 sm:mt-8">
          {/* Components Card */}
          <div className="bg-cyan-500 p-4 sm:p-6 rounded-xl shadow-lg text-black w-full md:w-96 h-36 sm:h-48 flex flex-col justify-center">
            <span className="text-4xl sm:text-5xl font-bold">30+</span>
            <span className="text-base sm:text-lg">Components</span>
          </div>
          
          {/* Variants Card */}
          <div className="border border-cyan-500 p-4 sm:p-6 rounded-xl shadow-lg text-cyan-400 w-full md:w-96 h-36 sm:h-48 flex flex-col justify-center relative mt-4 md:mt-0">
            <span className="text-4xl sm:text-5xl font-bold">space</span>
            <span className="text-base sm:text-lg">Variants</span>
            <div className="absolute inset-0 overflow-hidden">
              {/* Randomized particle effect goes here */}
            </div>
          </div>
        </div>
        
        {/* Copy & Paste Section */}
        <div className="mt-4 sm:mt-12 pb-16">
          <div className="flex justify-center gap-2">
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-md shadow-md text-xs sm:text-sm">JS</span>
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-md shadow-md text-xs sm:text-sm">TAILWIND</span>
            <span className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-md shadow-md text-xs sm:text-sm">FRAMER MOTION</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-semibold text-white mt-3 sm:mt-4">Simply copy & paste</h3>
          <p className="text-base sm:text-lg text-gray-400">Pick your favourite technologies, copy, enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;