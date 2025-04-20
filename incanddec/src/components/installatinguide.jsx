// // import React from 'react';

// // export default function InstallationGuide() {
// //   return (
// //     <div className="min-h-screen  text-gray-100 p-8  font-sans ">
// //       <h1 className="text-5xl font-bold mb-2">Install React & Tailwind CSS</h1>
// //       <p className="text-xl text-gray-400 mb-8">Install React with Create React App or Vite and configure Tailwind CSS</p>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
// //         <ul className="list-disc pl-6 text-gray-300 space-y-1">
// //           <li>Node.js (v16.0 or higher)</li>
// //           <li>npm (comes with Node.js) or yarn</li>
// //         </ul>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Create a new project</h2>
        
// //         <p className="mb-2">You can create a new React application using either Create React App or Vite:</p>
        
// //         <h3 className="text-xl font-semibold mt-6 mb-2">Option A: Using Create React App</h3>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div className="text-cyan-400">npx</div>
// //           <div><span className="text-green-400">create-react-app</span> my-project</div>
// //           <div className="mt-2 text-cyan-400">cd</div>
// //           <div>my-project</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
        
// //         <h3 className="text-xl font-semibold mt-6 mb-2">Option B: Using Vite (Recommended - Faster)</h3>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">create</span> vite@latest my-project -- --template react</div>
// //           <div className="mt-2 text-cyan-400">cd</div>
// //           <div>my-project</div>
// //           <div className="mt-2"><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span></div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Install Tailwind CSS</h2>
// //         <p className="mb-2">Once your React project is set up, you can install Tailwind CSS:</p>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> -D tailwindcss postcss autoprefixer</div>
// //           <div className="mt-2"><span className="text-cyan-400">npx</span> <span className="text-green-400">tailwindcss</span> init -p</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Install Sparkels UI </h2>
// //         <p className="mb-2"> To use the Sparkels UI component library with your project:</p>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> sparkels_ui</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Configure Tailwind CSS</h2>
// //         <p className="mb-2">Update the <code className="bg-gray-800 px-1 rounded">tailwind.config.js</code> file to scan your React components and Sparkels UI components for Tailwind classes:</p>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-gray-400">/** @type {"{import('tailwindcss').Config}"} */</span></div>
// //           <div><span className="text-cyan-400">module.exports</span> = {"{"}</div>
// //           <div className="ml-2"><span className="text-green-400">content</span>: [</div>
// //           <div className="ml-4"><span className="text-yellow-400">"./src/**/*.{"{js,jsx,ts,tsx}"}"</span></div>
// //           <div className="ml-4"><span className="text-yellow-400">"./node_modules/sparkels_ui/dist/**/*.{"{js,jsx,ts,tsx}"}"</span>  <span className="text-gray-500">// Ensure all components are included</span></div>
// //           <div className="ml-2">]</div>
// //           <div className="ml-2"><span className="text-green-400">theme</span>: {"{"}</div>
// //           <div className="ml-4"><span className="text-green-400">extend</span>: {"{}"}</div>
// //           <div className="ml-2">{"}"}</div>
// //           <div className="ml-2"><span className="text-green-400">plugins</span>: []</div>
// //           <div>{"}"}</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Add Tailwind Directives to CSS</h2>
// //         <p className="mb-2">Create or update your main CSS file (usually <code className="bg-gray-800 px-1 rounded">src/index.css</code> or <code className="bg-gray-800 px-1 rounded">src/App.css</code>) with Tailwind directives:</p>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">@tailwind</span> base;</div>
// //           <div><span className="text-cyan-400">@tailwind</span> components;</div>
// //           <div><span className="text-cyan-400">@tailwind</span> utilities;</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Import CSS in your Application</h2>
// //         <p className="mb-2">Make sure your main CSS file is imported in your application entry point:</p>
        
// //         <h3 className="text-xl font-semibold mt-4 mb-2">For Create React App (<code className="bg-gray-800 px-1 rounded">src/index.js</code>):</h3>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span>;</div>
// //           <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span>;</div>
// //           <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span>;</div>
// //           <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App'</span>;</div>
// //           <div className="mt-2"><span className="text-cyan-400">const</span> root = ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>));</div>
// //           <div>root.<span className="text-green-400">render</span>(</div>
// //           <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
// //           <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
// //           <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
// //           <div>);</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
        
// //         <h3 className="text-xl font-semibold mt-4 mb-2">For Vite (<code className="bg-gray-800 px-1 rounded">src/main.jsx</code>):</h3>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span></div>
// //           <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span></div>
// //           <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App.jsx'</span></div>
// //           <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span></div>
// //           <div className="mt-2">ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>)).<span className="text-green-400">render</span>(</div>
// //           <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
// //           <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
// //           <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
// //           <div>)</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Start the app</h2>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div className="text-gray-400"># For Create React App or Vite</div>
// //           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">run</span> dev   <span className="text-gray-400"># or npm start for Create React App</span></div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Test Tailwind CSS & Sparkels UI</h2>
// //         <p className="mb-2">Update your <code className="bg-gray-800 px-1 rounded">App.jsx</code> or <code className="bg-gray-800 px-1 rounded">App.js</code> file to test Tailwind CSS and Sparkels UI components:</p>
// //         <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
// //           <div><span className="text-gray-400">// If using Sparkels UI</span></div>
// //           <div><span className="text-cyan-400">import</span> {"{ BlackholeVortex }"} <span className="text-cyan-400">from</span> <span className="text-yellow-400">'sparkels_ui'</span>;</div>
// //           <div className="mt-2"><span className="text-cyan-400">function</span> <span className="text-green-400">App</span>() {"{"}</div>
// //           <div className="ml-2"><span className="text-cyan-400">return</span> (</div>
// //           <div className="ml-4">&lt;<span className="text-green-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"min-h-screen bg-gray-100 flex items-center justify-center"</span>&gt;</div>
// //           <div className="ml-6">&lt;<span className="text-green-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"bg-white p-8 rounded-lg shadow-md"</span>&gt;</div>
// //           <div className="ml-8">&lt;<span className="text-green-400">h1</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"text-2xl font-bold text-blue-600 mb-4"</span>&gt;</div>
// //           <div className="ml-10">React + Tailwind CSS + Sparkels UI Setup Complete!</div>
// //           <div className="ml-8">&lt;/<span className="text-green-400">h1</span>&gt;</div>
// //           <div className="ml-8">&lt;<span className="text-green-400">p</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"text-gray-700 mb-4"</span>&gt;</div>
// //           <div className="ml-10">You've successfully set up React with Tailwind CSS and Sparkels UI.</div>
// //           <div className="ml-8">&lt;/<span className="text-green-400">p</span>&gt;</div>
// //           <div className="ml-8">&lt;<span className="text-green-400">Button</span>&gt;This is a Sparkels UI BlackholeVortex Component&lt;/<span className="text-green-400">Button</span>&gt;</div>
// //           <div className="ml-6">&lt;/<span className="text-green-400">div</span>&gt;</div>
// //           <div className="ml-4">&lt;/<span className="text-green-400">div</span>&gt;</div>
// //           <div className="ml-2">);</div>
// //           <div>{"}"}</div>
// //           <div className="mt-2"><span className="text-cyan-400">export</span> <span className="text-cyan-400">default</span> App;</div>
// //           <button className="absolute top-4 right-4 text-gray-400">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="border-l-4 border-gray-700 pl-6 py-2 mb-8">
// //         <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
// //         <ul className="list-disc pl-6 text-blue-400 space-y-1">
// //           <li>React Documentation</li>
// //           <li>Tailwind CSS Documentation</li>
// //           <li>Create React App Documentation</li>
// //           <li>Vite Documentation</li>
// //         </ul>
// //         <p className="mt-4 text-lg font-semibold text-green-400">Happy coding!</p>
// //       </div>
// //     </div>
// //   );
// // }
// import React from 'react';

// export default function InstallationGuide() {
//     const handleCopy = async (text) => {
//         try {
//           await navigator.clipboard.writeText(text);
//           alert('Code copied to clipboard!');
//         } catch (err) {
//           console.error('Failed to copy: ', err);
//         }
//       };
      
//   return (
//     <div className="min-h-screen text-gray-100 p-4 sm:p-6 md:p-8 font-sans max-w-6xl mx-auto overflow-x-hidden">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Install React ,Tailwind CSS & Sparkels_ui </h1>
//       <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">Install React with Create React App or Vite and configure Tailwind CSS</p>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prerequisites</h2>
//         <ul className="list-disc pl-5 sm:pl-6 text-gray-300 space-y-1">
//           <li>Node.js (v16.0 or higher)</li>
//           <li>npm (comes with Node.js) or yarn</li>
//         </ul>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Create a new project</h2>
        
//         <p className="mb-2 text-sm sm:text-base">You can create a new React application using either Create React App or Vite:</p>
        
//         <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2">Option A: Using Create React App</h3>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div className="text-cyan-400">npx</div>
//           <div><span className="text-green-400">create-react-app</span> my-project</div>
//           <div className="mt-2 text-cyan-400">cd</div>
//           <div>my-project</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"  onClick={() => handleCopy('npx create-react-app my-project\ncd my-project')}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
        
//         <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2">Option B: Using Vite (Recommended - Faster)</h3>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">create</span> vite@latest my-project -- --template react</div>
//           <div className="mt-2 text-cyan-400">cd</div>
//           <div>my-project</div>
//           <div className="mt-2"><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span></div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy('npm create vite@latest my-project -- --template react\ncd my-project\nnpm install')}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Install Tailwind CSS</h2>
//         <p className="mb-2 text-sm sm:text-base">Once your React project is set up, you can install Tailwind CSS:</p>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> -D tailwindcss postcss autoprefixer</div>
//           <div className="mt-2"><span className="text-cyan-400">npx</span> <span className="text-green-400">tailwindcss</span> init -p</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() =>
//               handleCopy('npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p')
//             }>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Install Sparkels UI </h2>
//         <p className="mb-2 text-sm sm:text-base"> To use the Sparkels UI component library with your project:</p>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> sparkels_ui</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"   onClick={() => handleCopy('npm install sparkels_ui')}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Configure Tailwind CSS</h2>
//         <p className="mb-2 text-sm sm:text-base">Update the <code className="bg-gray-800 px-1 rounded">tailwind.config.js</code> file to scan your React components and Sparkels UI components for Tailwind classes:</p>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-gray-400">/** @type {"{import('tailwindcss').Config}"} */</span></div>
//           <div><span className="text-cyan-400">module.exports</span> = {"{"}</div>
//           <div className="ml-2"><span className="text-green-400">content</span>: [</div>
//           <div className="ml-4"><span className="text-yellow-400">"./src/**/*.{"{js,jsx,ts,tsx}"}"</span></div>
//           <div className="ml-4"><span className="text-yellow-400">"./node_modules/sparkels_ui/dist/**/*.{"{js,jsx,ts,tsx}"}"</span>  <span className="text-gray-500">// Ensure all components are included</span></div>
//           <div className="ml-2">]</div>
//           <div className="ml-2"><span className="text-green-400">theme</span>: {"{"}</div>
//           <div className="ml-4"><span className="text-green-400">extend</span>: {"{}"}</div>
//           <div className="ml-2">{"}"}</div>
//           <div className="ml-2"><span className="text-green-400">plugins</span>: []</div>
//           <div>{"}"}</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"   onClick={() =>
//               handleCopy(`/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/sparkels_ui/dist/**/*.{js,jsx,ts,tsx}" // Ensure all components are included
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }`)
//             }>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Add Tailwind Directives to CSS</h2>
//         <p className="mb-2 text-sm sm:text-base">Create or update your main CSS file (usually <code className="bg-gray-800 px-1 rounded">src/index.css</code> or <code className="bg-gray-800 px-1 rounded">src/App.css</code>) with Tailwind directives:</p>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">@tailwind</span> base;</div>
//           <div><span className="text-cyan-400">@tailwind</span> components;</div>
//           <div><span className="text-cyan-400">@tailwind</span> utilities;</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"  onClick={() => handleCopy(`@tailwind base;\n@tailwind components;\n@tailwind utilities;`)}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Import CSS in your Application</h2>
//         <p className="mb-2 text-sm sm:text-base">Make sure your main CSS file is imported in your application entry point:</p>
        
//         <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2">For Create React App (<code className="bg-gray-800 px-1 rounded">src/index.js</code>):</h3>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span>;</div>
//           <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span>;</div>
//           <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span>;</div>
//           <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App'</span>;</div>
//           <div className="mt-2"><span className="text-cyan-400">const</span> root = ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>));</div>
//           <div>root.<span className="text-green-400">render</span>(</div>
//           <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
//           <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
//           <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
//           <div>);</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"   onClick={() =>
//       handleCopy(`import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );`)
//     }>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
        
//         <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2">For Vite (<code className="bg-gray-800 px-1 rounded">src/main.jsx</code>):</h3>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span></div>
//           <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span></div>
//           <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App.jsx'</span></div>
//           <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span></div>
//           <div className="mt-2">ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>)).<span className="text-green-400">render</span>(</div>
//           <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
//           <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
//           <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
//           <div>)</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400"  onClick={() =>
//       handleCopy(`import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )`)
//     }>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Start the app</h2>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div className="text-gray-400"># For Create React App or Vite</div>
//           <div><span className="text-cyan-400">npm</span> <span className="text-green-400">run</span> dev   <span className="text-gray-400"># or npm start for Create React App</span></div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={()=>handleCopy(`npm run dev`)}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Test Tailwind CSS & Sparkels UI</h2>
//         <p className="mb-2 text-sm sm:text-base">Update your <code className="bg-gray-800 px-1 rounded">App.jsx</code> or <code className="bg-gray-800 px-1 rounded">App.js</code> file to test Tailwind CSS and Sparkels UI components:</p>
//         <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
//           <div><span className="text-gray-400">// using Sparkels UI</span></div>
//           <div><span className="text-cyan-400">import</span> {"{ BlackholeVortex }"} <span className="text-cyan-400">from</span> <span className="text-yellow-400">'sparkels_ui'</span>;</div>
//           <div className="mt-2"><span className="text-cyan-400">function</span> <span className="text-green-400">App</span>() {"{"}</div>
//           <div className="ml-2"><span className="text-cyan-400">return</span> (</div>
//           <div className="ml-4">&lt;<span className="text-green-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"min-h-screen bg-gray-100 flex items-center justify-center"</span>&gt;</div>
//           <div className="ml-6">&lt;<span className="text-green-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"bg-white p-8 rounded-lg shadow-md"</span>&gt;</div>
//           <div className="ml-8">&lt;<span className="text-green-400">h1</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"text-2xl font-bold text-blue-600 mb-4"</span>&gt;</div>
//           <div className="ml-10">React + Tailwind CSS + Sparkels UI Setup Complete!</div>
//           <div className="ml-8">&lt;/<span className="text-green-400">h1</span>&gt;</div>
//           <div className="ml-8">&lt;<span className="text-green-400">p</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"text-gray-700 mb-4"</span>&gt;</div>
//           <div className="ml-10">You've successfully set up React with Tailwind CSS and Sparkels UI.</div>
//           <div className="ml-8">&lt;/<span className="text-green-400">p</span>&gt;</div>
//           <div className="ml-8">&lt;<span className="text-green-400">Button</span>&gt;This is a Sparkels UI BlackholeVortex Component&lt;/<span className="text-green-400">Button</span>&gt;</div>
//           <div className="ml-6">&lt;/<span className="text-green-400">div</span>&gt;</div>
//           <div className="ml-4">&lt;/<span className="text-green-400">div</span>&gt;</div>
//           <div className="ml-2">);</div>
//           <div>{"}"}</div>
//           <div className="mt-2"><span className="text-cyan-400">export</span> <span className="text-cyan-400">default</span> App;</div>
//           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={()=>{`//  using Sparkels UI
// import { BlackholeVortex } from 'sparkels_ui';
// function App() {
// return (
// <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// <div className="bg-white p-8 rounded-lg shadow-md">
// <h1 className="text-2xl font-bold text-blue-600 mb-4">
// React + Tailwind CSS + Sparkels UI Setup Complete!
// </h1>
// <p className="text-gray-700 mb-4">
// You've successfully set up React with Tailwind CSS and Sparkels UI.
// </p>
// <Button>This is a Sparkels UI BlackholeVortex Component</Button>
// </div>
// </div>
// );
// }
// export default App;`}}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Additional Resources</h2>
//         <ul className="list-disc pl-5 sm:pl-6 text-blue-400 space-y-1">
//   <li>
//     <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
//       React Documentation
//     </a>
//   </li>
//   <li>
//     <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
//       Tailwind CSS Documentation
//     </a>
//   </li>
//   <li>
//     <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">
//       Create React App Documentation
//     </a>
//   </li>
//   <li>
//     <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
//       Vite Documentation
//     </a>
//   </li>
// </ul>

//         <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-green-400">Happy coding!</p>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import starterPackZip from '../assets/starter-pack -sparkels.zip';
export default function InstallationGuide() {
    const handleCopy = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('Code copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      };
      
  return (
    <div className="min-h-screen text-gray-100 p-4 sm:p-6 md:p-8 font-sans max-w-6xl mx-auto overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Install React 18, Tailwind CSS & Sparkels_ui</h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">Setup React 18 with Tailwind CSS and configure Sparkels_ui</p>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prerequisites</h2>
        <ul className="list-disc pl-5 sm:pl-6 text-gray-300 space-y-1">
          <li>Node.js (v16.0 or higher)</li>
          <li>npm (comes with Node.js) or yarn</li>
        </ul>
      </div>
      
      <div className="border-l-4 border-red-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8 bg-red-900 bg-opacity-20 rounded-r">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">⚠️ Important Compatibility Note</h2>
        <p className="mb-2 text-sm sm:text-base">
          <span className="font-bold">Sparkels_ui requires React 18 </span> 
          Make sure to install React 18 as shown in the instructions below.
        </p>
      </div>
      
      <div className="border-l-4 border-green-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8 bg-green-900 bg-opacity-20 rounded-r">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quick Start with Starter Pack</h2>
        <p className="mb-2 text-sm sm:text-base">
          For the fastest setup, download our starter pack with React 18 and Tailwind CSS pre-configured:
        </p>
      
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a href={starterPackZip} download="starter-pack.zip"
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download Starter Pack
  </a>
</div>
        <div className="mt-4 bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div className="text-gray-400"># After downloading and extracting the starter pack</div>
       
        
          <div className="mt-2"><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> sparkels_ui</div>
          <div className="mt-2"><span className="text-cyan-400">npm</span> <span className="text-green-400"></span> start</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy('npm install sparkels_ui\nnpm start')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Manual Setup: Create a new React 18 project</h2>
        <p className="mb-2 text-sm sm:text-base">If you prefer to set up manually, create a new React 18 application:</p>
        
        <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2">Option A: Using Create React App with React 18</h3>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div className="text-cyan-400">npx</div>
          <div><span className="text-green-400">create-react-app</span> my-project --use-npm</div>
          <div className="mt-2 text-cyan-400">cd</div>
          <div>my-project</div>
          <div className="mt-2 text-gray-400"># Force React 18 version</div>
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> react@18.2.0 react-dom@18.2.0</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy('npx create-react-app my-project --use-npm\ncd my-project\nnpm install react@18.2.0 react-dom@18.2.0')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2">Option B: Using Vite with React 18 (Recommended - Faster)</h3>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">create</span> vite@latest my-project -- --template react</div>
          <div className="mt-2 text-cyan-400">cd</div>
          <div>my-project</div>
          <div className="mt-2 text-gray-400"># Install dependencies and force React 18</div>
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span></div>
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> react@18.2.0 react-dom@18.2.0</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy('npm create vite@latest my-project -- --template react\ncd my-project\nnpm install\nnpm install react@18.2.0 react-dom@18.2.0')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>

        <p className="mt-4 text-yellow-400 text-sm sm:text-base">
          Note: If you see warnings about React version conflicts, you may need to use the <code className="bg-gray-800 px-1 rounded">--force</code> flag with npm install.
        </p>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Install Tailwind CSS</h2>
        <p className="mb-2 text-sm sm:text-base">Once your React project is set up, install Tailwind CSS:</p>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> -D tailwindcss postcss autoprefixer</div>
          <div className="mt-2"><span className="text-cyan-400">npx</span> <span className="text-green-400">tailwindcss</span> init -p</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() =>
              handleCopy('npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p')
            }>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Install Sparkels UI</h2>
        <p className="mb-2 text-sm sm:text-base">To use the Sparkels UI component library with your React 18 project:</p>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">install</span> sparkels_ui</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy('npm install sparkels_ui')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Configure Tailwind CSS</h2>
        <p className="mb-2 text-sm sm:text-base">Update the <code className="bg-gray-800 px-1 rounded">tailwind.config.js</code> file to scan your React components and Sparkels UI components for Tailwind classes:</p>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-gray-400">/** @type {"{import('tailwindcss').Config}"} */</span></div>
          <div><span className="text-cyan-400">module.exports</span> = {"{"}</div>
          <div className="ml-2"><span className="text-green-400">content</span>: [</div>
          <div className="ml-4"><span className="text-yellow-400">"./src/**/*.{"{js,jsx,ts,tsx}"}"</span>,</div>
          <div className="ml-4"><span className="text-yellow-400">"./node_modules/sparkels_ui/dist/**/*.{"{js,jsx,ts,tsx}"}"</span>  <span className="text-gray-500">// Ensure all components are included</span></div>
          <div className="ml-2">],</div>
          <div className="ml-2"><span className="text-green-400">theme</span>: {"{"}</div>
          <div className="ml-4"><span className="text-green-400">extend</span>: {"{}"}</div>
          <div className="ml-2">{"}"}</div>
          <div className="ml-2"><span className="text-green-400">plugins</span>: []</div>
          <div>{"}"}</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() =>
              handleCopy(`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/sparkels_ui/dist/**/*.{js,jsx,ts,tsx}" // Ensure all components are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)
            }>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Add Tailwind Directives to CSS</h2>
        <p className="mb-2 text-sm sm:text-base">Create or update your main CSS file (usually <code className="bg-gray-800 px-1 rounded">src/index.css</code> or <code className="bg-gray-800 px-1 rounded">src/App.css</code>) with Tailwind directives:</p>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">@tailwind</span> base;</div>
          <div><span className="text-cyan-400">@tailwind</span> components;</div>
          <div><span className="text-cyan-400">@tailwind</span> utilities;</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy(`@tailwind base;\n@tailwind components;\n@tailwind utilities;`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Import CSS in your Application</h2>
        <p className="mb-2 text-sm sm:text-base">Make sure your main CSS file is imported in your application entry point:</p>
        
        <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2">For Create React App (<code className="bg-gray-800 px-1 rounded">src/index.js</code>):</h3>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span>;</div>
          <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span>;</div>
          <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span>;</div>
          <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App'</span>;</div>
          <div className="mt-2"><span className="text-cyan-400">const</span> root = ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>));</div>
          <div>root.<span className="text-green-400">render</span>(</div>
          <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
          <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
          <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
          <div>);</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() =>
      handleCopy(`import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`)
    }>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2">For Vite (<code className="bg-gray-800 px-1 rounded">src/main.jsx</code>):</h3>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-cyan-400">import</span> React <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react'</span></div>
          <div><span className="text-cyan-400">import</span> ReactDOM <span className="text-cyan-400">from</span> <span className="text-yellow-400">'react-dom/client'</span></div>
          <div><span className="text-cyan-400">import</span> App <span className="text-cyan-400">from</span> <span className="text-yellow-400">'./App.jsx'</span></div>
          <div><span className="text-cyan-400">import</span> <span className="text-yellow-400">'./index.css'</span></div>
          <div className="mt-2">ReactDOM.<span className="text-green-400">createRoot</span>(document.<span className="text-green-400">getElementById</span>(<span className="text-yellow-400">'root'</span>)).<span className="text-green-400">render</span>(</div>
          <div className="ml-2">&lt;<span className="text-green-400">React.StrictMode</span>&gt;</div>
          <div className="ml-4">&lt;<span className="text-green-400">App</span> /&gt;</div>
          <div className="ml-2">&lt;/<span className="text-green-400">React.StrictMode</span>&gt;</div>
          <div>)</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() =>
      handleCopy(`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`)
    }>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Start the app</h2>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div className="text-gray-400"># For Create React App</div>
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">start</span></div>
          <div className="mt-2 text-gray-400"># For Vite</div>
          <div><span className="text-cyan-400">npm</span> <span className="text-green-400">run</span> dev</div>
          <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={() => handleCopy(`# For Create React App\nnpm start\n\n# For Vite\nnpm run dev`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Test Tailwind CSS & Sparkels UI</h2>
        <p className="mb-2 text-sm sm:text-base">Update your <code className="bg-gray-800 px-1 rounded">App.jsx</code> or <code className="bg-gray-800 px-1 rounded">App.js</code> file to test Tailwind CSS and Sparkels UI components:</p>
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 relative overflow-x-auto">
          <div><span className="text-gray-400">// Using Sparkels UI</span></div>
          <div><span className="text-cyan-400">import</span> {"{ BlackholeVortex }"} <span className="text-cyan-400">from</span> <span className="text-yellow-400">'sparkels_ui'</span>;</div>
          <div className="mt-2"><span className="text-cyan-400">function</span> <span className="text-green-400">App</span>() {"{"}</div>
          <div className="ml-2"><span className="text-cyan-400">return</span> (</div>
          <div className="ml-4">&lt;<span className="text-green-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-yellow-400">"w-[100vw] h-[100vh]"</span>&gt;</div>
          <div className="ml-4">&lt;<span className="text-green-400">BlackholeVortex</span> /&gt;</div>
           <div className="ml-4">&lt;/<span className="text-green-400">div</span>&gt;</div>
           <div className="ml-2">);</div>
           <div>{"}"}</div>
           <div className="mt-2"><span className="text-cyan-400">export</span> <span className="text-cyan-400">default</span> App;</div>
           <button className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400" onClick={()=>{`//  using Sparkels UI
 import { BlackholeVortex } from 'sparkels_ui';
 function App() {
 return (
 <div className="w-[100vw] h-[100vh]">
 <BlackholeVortex/>
 </div>
 );
 }
 export default App;`}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
               <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
             </svg>
           </button>
         </div>
       </div>
      
       <div className="border-l-4 border-gray-700 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
         <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Additional Resources</h2>
         <ul className="list-disc pl-5 sm:pl-6 text-blue-400 space-y-1">
   <li>
     <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
       React Documentation
     </a>
   </li>
   <li>
     <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
       Tailwind CSS Documentation
     </a>
   </li>
   <li>
     <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">
       Create React App Documentation
     </a>
   </li>
   <li>
     <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
       Vite Documentation
     </a>
   </li>
 </ul>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-green-400">Happy coding!</p>
       </div>
     </div>
  );
}
