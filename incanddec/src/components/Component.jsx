// // import { useState } from "react";
// // import {
// //   BlackholeVortex, TornadoCanvs, AsteroidBelt, RainingEffect, Stars, RealisticMeteors,
// //   Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
// //   ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
// //   NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
// //   SparksInput
// // } from "sparkels_ui";
// // import { Menu } from "lucide-react";

// // const slides = [
// //   { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
// //   { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
// //   { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
// //   { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
// // ];

// // const componentsList = [
// //   { name: "BlackholeVortex", component: <BlackholeVortex /> },
// //   { name: "Tornado", component: <TornadoCanvs /> },
// //   { name: "Stars", component: <Stars /> },
// //   { name: "Meteors", component: <RealisticMeteors /> },
// //   { name: "AsteroidBelt", component: <AsteroidBelt /> },
// //   { name: "Nebula", component: <Nebula /> },
// //   { name: "SouthPoleScene", component: <SouthPoleScene /> },
// //   { name: "RainingEffect", component: <RainingEffect /> },
// //   { name: "PlasmaFlow", component: <PlasmaFlow /> },
// //   { name: "HackerBackground", component: <HackerBackground /> },
// //   { name: "ThunderScene", component: <ThunderScene /> },
// //   { name: "Flash", component: <Flash /> },
// //   { name: "Jelly", component: <Jelly /> },
// //   { name: "Mouselight", component: <Mouselight><h1 className="w-[100vw]">Welcome to Sparkels_ui🚀</h1></Mouselight> },
// //   {
// //     name: "Card3D", component: (
// //       <Card3D
// //         image="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
// //         title="Air Jordan 4 RM"
// //         subtitle="men's Shoes\nMRP : ₹ 12 795.00"
// //         buttonText="BUY IT NOW"
// //         onButtonClick={() => alert("Button clicked!")}
// //       />
// //     )
// //   },
// //   { name: "SparkSlide", component: <SlideShow slides={slides} /> },
// //   { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
// //   { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> },
// //   {name:"Fireeffect",component:<FireEffectInput placeholder="Welcome to Sparkels_ui🚀" /> },
// //   {name:"Neoeffect",component:<NeoInput placeholder="Welcome to Sparkels_ui🚀" /> }
// // ];

// // const Component = () => {
// //   const [selectedComponent, setSelectedComponent] = useState(null);
// //   const [selectedName, setSelectedName] = useState("");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const usageCode = (name) => `import { ${name} } from "sparkels_ui";

// // function App() {
// //   return <${name} />;
// // }

// // export default App;`;

// //   const copyToClipboard = (text) => {
// //     navigator.clipboard.writeText(text).then(() => {
// //       alert("Copied to clipboard!");
// //     });
// //   };

// //   return (
// //     <div className="flex max-w-[100vw] bg-black text-white z-10 min-h-screen">
// //       {/* <button className="fixed top-12 left-4 md:hidden p-2 bg-black rounded z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
// //         <Menu className="w-6 h-6 text-white" />
// //       </button> */}
// // <button 
// //   className={`fixed top-16 left-4 md:hidden p-3 rounded-full z-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all duration-300 group ${
// //     isSidebarOpen ? "left-[calc(10rem+1rem)]" : "left-1"
// //   }`}
// //   onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // >
// //   <div className="relative">
// //     <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
// //       isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''
// //     }`}></div>
// //     <div className={`w-6 h-0.5 bg-white transition-all ${
// //       isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''
// //     }`}></div>
// //     <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
// //       <div className="absolute inset-0 rounded-full animate-ping bg-purple-400"></div>
// //     </div>
// //   </div>
// // </button>
// // <div 
// //   className={`fixed inset-y-0 left-0 bg-black p-4 w-64 transform ${
// //     isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// //   } md:relative md:translate-x-0 md:w-1/4 border-r border-gray-600 transition-transform duration-300 ease-in-out z-40`}
// // >
// //   <div className="pt-12 md:pt-0">
// //     <h2 className="text-xl font-bold mb-4">Components</h2>
// //     <ul className="overflow-y-auto md:overflow-y-visible max-h-[calc(100vh-160px)] md:max-h-none">
// //       {componentsList.map((item, index) => (
// //         <li 
// //           key={index} 
// //           className="p-2 cursor-pointer hover:bg-gray-700 rounded" 
// //           onClick={() => {
// //             setSelectedComponent(item.component);
// //             setSelectedName(item.name);
// //             setIsSidebarOpen(false);
// //           }}
// //         >
// //           {item.name}
// //         </li>
// //       ))}
// //     </ul>
// //   </div>
// // </div>
// //       <div className="flex-1 flex flex-col items-center p-4 w-full md:w-auto md:justify-center">
// //         <div className=" w-[100vw] flex justify-center">
// //           {selectedComponent ? selectedComponent : componentsList[0]?.component}
// //         </div>
// //         {selectedComponent && (
// //           <div className="mt-6 rounded-lg flex flex-col items-center md:items-start w-full md:w-auto md:mr-[1000px]  max-w-[90vw]">
// //             <h3 className="text-lg font-semibold">How to Install & Use {selectedName}</h3>

// //             <p className="mt-2">To install <code>sparkels_ui</code>, use:</p>
// //             <div className="relative w-full">
// //               <pre className="bg-black p-2 border-white border rounded text-green-400 overflow-x-auto">npm install sparkels_ui</pre>
// //               <button
// //                 className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
// //                 onClick={() => copyToClipboard("npm install sparkels_ui")}
// //               >
// //                 Copy
// //               </button>
// //             </div>

// //             <p className="mt-2">Usage:</p>
// //             <div className="relative w-full">
// //               <pre className="bg-black p-2 border-white border rounded text-green-400 whitespace-pre-wrap overflow-x-auto">
// //                 {usageCode(selectedName)}
// //               </pre>
// //               <button
// //                 className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
// //                 onClick={() => copyToClipboard(usageCode(selectedName))}
// //               >
// //                 Copy
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Component;
// import { useState } from "react";
// import {
//   BlackholeVortex, TornadoCanvs, AsteroidBelt, RainingEffect, Stars, RealisticMeteors,
//   Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
//   ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
//   NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
//   SparksInput
// } from "sparkels_ui";
// import { Menu } from "lucide-react";

// const slides = [
//   { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
//   { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
//   { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
//   { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
// ];

// // Component-specific documentation
// const componentDocs = {
//   BlackholeVortex: {
//     description: "A mesmerizing black hole vortex effect.",
//     props: [],
//     usage: `import { BlackholeVortex } from "sparkels_ui";

// function App() {
//   return <BlackholeVortex />;
// }

// export default App;`
//   },
//   Tornado: {
//     description: "An animated tornado canvas effect.",
//     props: [],
//     usage: `import { TornadoCanvs } from "sparkels_ui";

// function App() {
//   return <TornadoCanvs />;
// }

// export default App;`
//   },
//   SparkSlide: {
//     description: "A customizable slideshow component for displaying images with descriptions.",
//     props: [
//       { name: "slides", type: "array", required: true, description: "Array of slide objects with image and description properties" },
//       { name: "autoplay", type: "boolean", required: false, default: "true", description: "Whether the slideshow should autoplay" },
//       { name: "interval", type: "number", required: false, default: "5000", description: "Time between slides in milliseconds" }
//     ],
//     usage: `import { SlideShow } from "sparkels_ui";

// const slides = [
//   { 
//     image: "https://example.com/image1.jpg", 
//     description: "First slide description" 
//   },
//   { 
//     image: "https://example.com/image2.jpg", 
//     description: "Second slide description" 
//   }
// ];

// function App() {
//   return <SlideShow slides={slides} autoplay={true} interval={3000} />;
// }

// export default App;`
//   },
//   DualSlideShow: {
//     description: "A slideshow with dual image transition effects.",
//     props: [
//       { name: "slides", type: "array", required: true, description: "Array of slide objects with image and description properties" },
//       { name: "transition", type: "string", required: false, default: "fade", description: "Transition effect: 'fade', 'slide', or 'flip'" }
//     ],
//     usage: `import { DualSlideShow } from "sparkels_ui";

// const slides = [
//   { 
//     image: "https://example.com/image1.jpg", 
//     description: "First slide description" 
//   },
//   { 
//     image: "https://example.com/image2.jpg", 
//     description: "Second slide description" 
//   }
// ];

// function App() {
//   return <DualSlideShow slides={slides} transition="slide" />;
// }

// export default App;`
//   },
//   Card3D: {
//     description: "A 3D card component with hover effects and interactive features.",
//     props: [
//       { name: "image", type: "string", required: true, description: "URL of the card image" },
//       { name: "title", type: "string", required: true, description: "Title text for the card" },
//       { name: "subtitle", type: "string", required: false, description: "Subtitle or description text" },
//       { name: "buttonText", type: "string", required: false, description: "Text for the action button" },
//       { name: "onButtonClick", type: "function", required: false, description: "Callback function when button is clicked" }
//     ],
//     usage: `import { Card3D } from "sparkels_ui";

// function App() {
//   return (
//     <Card3D
//       image="https://example.com/product.jpg"
//       title="Product Name"
//       subtitle="Product description and details"
//       buttonText="Buy Now"
//       onButtonClick={() => alert("Button clicked!")}
//     />
//   );
// }

// export default App;`
//   },
//   Mouselight: {
//     description: "Creates a lighting effect that follows the mouse cursor.",
//     props: [
//       { name: "children", type: "ReactNode", required: true, description: "Content to display with the mouse light effect" }
//     ],
//     usage: `import { Mouselight } from "sparkels_ui";

// function App() {
//   return (
//     <Mouselight>
//       <h1>This text will have a light following the mouse</h1>
//     </Mouselight>
//   );
// }

// export default App;`
//   },
//   Neoeffect: {
//     description: "An input field with a sparkling animation effect.",
//     props: [
//       { name: "placeholder", type: "string", required: false, description: "Placeholder text for the input" },
//       { name: "onChange", type: "function", required: false, description: "Callback function when input value changes" }
//     ],
//     usage: `import { NeoInput } from "sparkels_ui";

// function App() {
//   return (
//     <NeoInput 
//       placeholder="Type something..." 
//       onChange={(e) => console.log(e.target.value)} 
//     />
//   );
// }

// export default App;`
//   },
//   Fireeffect: {
//     description: "An input field with a fire animation effect.",
//     props: [
//       { name: "placeholder", type: "string", required: false, description: "Placeholder text for the input" },
//       { name: "intensity", type: "number", required: false, default: "2", description: "Intensity of the fire effect (1-5)" }
//     ],
//     usage: `import { FireEffectInput } from "sparkels_ui";

// function App() {
//   return (
//     <FireEffectInput 
//       placeholder="Hot input..." 
//       intensity={3}
//     />
//   );
// }

// export default App;`
//   }
//   // Add more component-specific documentation as needed
// };

// // Default documentation for components without specific docs
// const getDefaultDocs = (componentName) => {
//   return {
//     description: `A UI component from the sparkels_ui library.`,
//     props: [],
//     usage: `import { ${componentName} } from "sparkels_ui";

// function App() {
//   return <${componentName} />;
// }

// export default App;`
//   };
// };

// const componentsList = [
//   { name: "BlackholeVortex", component: <BlackholeVortex /> },
//   { name: "Tornado", component: <TornadoCanvs /> },
//   { name: "Stars", component: <Stars /> },
//   { name: "Meteors", component: <RealisticMeteors /> },
//   { name: "AsteroidBelt", component: <AsteroidBelt /> },
//   { name: "Nebula", component: <Nebula /> },
//   { name: "SouthPoleScene", component: <SouthPoleScene /> },
//   { name: "RainingEffect", component: <RainingEffect /> },
//   { name: "PlasmaFlow", component: <PlasmaFlow /> },
//   { name: "HackerBackground", component: <HackerBackground /> },
//   { name: "ThunderScene", component: <ThunderScene /> },
//   { name: "Flash", component: <Flash /> },
//   { name: "Jelly", component: <Jelly /> },
//   { name: "Mouselight", component: <Mouselight><h1 className="w-full">Welcome to Sparkels_ui🚀</h1></Mouselight> },
//   {
//     name: "Card3D", component: (
//       <Card3D
//         image="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
//         title="Air Jordan 4 RM"
//         subtitle="men's Shoes\nMRP : ₹ 12 795.00"
//         buttonText="BUY IT NOW"
//         onButtonClick={() => alert("Button clicked!")}
//       />
//     )
//   },
//   { name: "SparkSlide", component: <SlideShow slides={slides} /> },
//   { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
//   { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> },
//   { name: "Fireeffect", component: <FireEffectInput placeholder="Welcome to Sparkels_ui🚀" /> },
//   { name: "Neoeffect", component: <NeoInput placeholder="Welcome to Sparkels_ui🚀" /> }
// ];

// const Component = () => {
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [selectedName, setSelectedName] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert("Copied to clipboard!");
//     });
//   };

//   // Get component documentation (either specific or default)
//   const getComponentDocs = (componentName) => {
//     return componentDocs[componentName] || getDefaultDocs(componentName);
//   };

//   return (
//     <div className="flex max-w-full bg-black text-white z-10 min-h-screen">
//       <button 
//         className={`fixed top-16 left-4 md:hidden p-3 rounded-full z-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all duration-300 group ${
//           isSidebarOpen ? "left-[calc(10rem+1rem)]" : "left-1"
//         }`}
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <div className="relative">
//           <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
//             isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''
//           }`}></div>
//           <div className={`w-6 h-0.5 bg-white transition-all ${
//             isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''
//           }`}></div>
//           <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="absolute inset-0 rounded-full animate-ping bg-purple-400"></div>
//           </div>
//         </div>
//       </button>
//       <div 
//         className={`fixed inset-y-0 left-0 bg-black p-4 w-64 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0 md:w-1/4 border-r border-gray-600 transition-transform duration-300 ease-in-out z-40`}
//       >
//         <div className="pt-12 md:pt-0">
//           <h2 className="text-xl font-bold mb-4">Components</h2>
//           <ul className="overflow-y-auto md:overflow-y-visible max-h-[calc(100vh-160px)] md:max-h-none">
//             {componentsList.map((item, index) => (
//               <li 
//                 key={index} 
//                 className="p-2 cursor-pointer hover:bg-gray-700 rounded" 
//                 onClick={() => {
//                   setSelectedComponent(item.component);
//                   setSelectedName(item.name);
//                   setIsSidebarOpen(false);
//                 }}
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col items-center p-4 w-full md:w-auto md:justify-center">
//         <div className="w-full flex justify-center">
//           {selectedComponent ? selectedComponent : componentsList[0]?.component}
//         </div>
//         {selectedName && (
//           <div className="mt-6 rounded-lg flex flex-col items-center md:items-start w-full md:w-auto max-w-[90vw]">
//             <h3 className="text-xl font-semibold mb-2">{selectedName}</h3>
            
//             {/* Component Description */}
//             <p className="text-gray-300 mb-4">{getComponentDocs(selectedName).description}</p>
            
//             {/* Props Documentation */}
//             {getComponentDocs(selectedName).props.length > 0 && (
//               <div className="w-full mb-4">
//                 <h4 className="text-lg font-semibold mb-2">Props</h4>
//                 <div className="bg-gray-800 rounded-lg p-4 w-full overflow-x-auto">
//                   <table className="min-w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left py-2 px-4 border-b border-gray-700">Name</th>
//                         <th className="text-left py-2 px-4 border-b border-gray-700">Type</th>
//                         <th className="text-left py-2 px-4 border-b border-gray-700">Required</th>
//                         <th className="text-left py-2 px-4 border-b border-gray-700">Default</th>
//                         <th className="text-left py-2 px-4 border-b border-gray-700">Description</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {getComponentDocs(selectedName).props.map((prop, index) => (
//                         <tr key={index}>
//                           <td className="py-2 px-4 border-b border-gray-700">{prop.name}</td>
//                           <td className="py-2 px-4 border-b border-gray-700 text-green-400">{prop.type}</td>
//                           <td className="py-2 px-4 border-b border-gray-700">{prop.required ? "Yes" : "No"}</td>
//                           <td className="py-2 px-4 border-b border-gray-700">{prop.default || "-"}</td>
//                           <td className="py-2 px-4 border-b border-gray-700">{prop.description}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {/* Installation Info */}
//             <h4 className="text-lg font-semibold mt-2">Installation</h4>
//             <div className="relative w-full mt-1">
//               <pre className="bg-gray-800 p-2 border border-gray-600 rounded text-green-400 overflow-x-auto">npm install sparkels_ui</pre>
//               <button
//                 className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
//                 onClick={() => copyToClipboard("npm install sparkels_ui")}
//               >
//                 Copy
//               </button>
//             </div>

//             {/* Usage Example */}
//             <h4 className="text-lg font-semibold mt-4">Usage</h4>
//             <div className="relative w-full mt-1">
//               <pre className="bg-gray-800 p-4 border border-gray-600 rounded text-green-400 whitespace-pre overflow-x-auto">
//                 {getComponentDocs(selectedName).usage}
//               </pre>
//               <button
//                 className="absolute top-2 right-2 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
//                 onClick={() => copyToClipboard(getComponentDocs(selectedName).usage)}
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Component;
import { useState } from "react";
import {
  BlackholeVortex, TornadoCanvas, AsteroidBelt, RainingEffect, Stars, RealisticMeteors,
  Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
  ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
  NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
  SparksInput
} from "sparkels_ui";
import { Menu ,Copy } from "lucide-react";
import InstallationGuide from "./installatinguide";

const slides = [
  { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
  { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
  { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
  { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
];

// Component-specific documentation
const componentDocs = {
  BlackholeVortex: {
    description: "A mesmerizing black hole vortex effect.",
    props: [],
    usage: `import { BlackholeVortex } from "sparkels_ui";

function App() {
  return <BlackholeVortex />;
}

export default App;`
  },
  Tornado: {
    description: "An animated tornado canvas effect.",
    props: [],
    usage: `import { TornadoCanvs } from "sparkels_ui";

function App() {
  return <TornadoCanvs />;
}

export default App;`
  },
  SparkSlide: {
    description: "A customizable slideshow component for displaying images with descriptions.",
    props: [
      { name: "slides", type: "array", required: true, description: "Array of slide objects with image and description properties" },
      { name: "autoplay", type: "boolean", required: false, default: "true", description: "Whether the slideshow should autoplay" },
      { name: "interval", type: "number", required: false, default: "5000", description: "Time between slides in milliseconds" }
    ],
    usage: `import { SlideShow } from "sparkels_ui";

const slides = [
  { 
    image: "https://example.com/image1.jpg", 
    description: "First slide description" 
  },
  { 
    image: "https://example.com/image2.jpg", 
    description: "Second slide description" 
  }
];

function App() {
  return <SlideShow slides={slides} autoplay={true} interval={3000} />;
}

export default App;`
  },
  DualSlideShow: {
    description: "A slideshow with dual image transition effects.",
    props: [
      { name: "slides", type: "array", required: true, description: "Array of slide objects with image and description properties" },
      { name: "transition", type: "string", required: false, default: "fade", description: "Transition effect: 'fade', 'slide', or 'flip'" }
    ],
    usage: `import { DualSlideShow } from "sparkels_ui";

const slides = [
  { 
    image: "https://example.com/image1.jpg", 
    description: "First slide description" 
  },
  { 
    image: "https://example.com/image2.jpg", 
    description: "Second slide description" 
  }
];

function App() {
  return <DualSlideShow slides={slides} transition="slide" />;
}

export default App;`
  },
  Card3D: {
    description: "A 3D card component with hover effects and interactive features.",
    props: [
      { name: "image", type: "string", required: true, description: "URL of the card image" },
      { name: "title", type: "string", required: true, description: "Title text for the card" },
      { name: "subtitle", type: "string", required: false, description: "Subtitle or description text" },
      { name: "buttonText", type: "string", required: false, description: "Text for the action button" },
      { name: "onButtonClick", type: "function", required: false, description: "Callback function when button is clicked" }
    ],
    usage: `import { Card3D } from "sparkels_ui";

function App() {
  return (
    <Card3D
      image="https://example.com/product.jpg"
      title="Product Name"
      subtitle="Product description and details"
      buttonText="Buy Now"
      onButtonClick={() => alert("Button clicked!")}
    />
  );
}

export default App;`
  },
  Mouselight: {
    description: "Creates a lighting effect that follows the mouse cursor.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Content to display with the mouse light effect" }
    ],
    usage: `import { Mouselight } from "sparkels_ui";

function App() {
  return (
    <Mouselight>
      <h1>This text will have a light following the mouse</h1>
    </Mouselight>
  );
}

export default App;`
  },
  Neoeffect: {
    description: "An input field with a sparkling animation effect.",
    props: [
      { name: "placeholder", type: "string", required: false, description: "Placeholder text for the input" },
      { name: "onChange", type: "function", required: false, description: "Callback function when input value changes" }
    ],
    usage: `import { NeoInput } from "sparkels_ui";

function App() {
  return (
    <NeoInput  
      placeholder="Type something..." 
      onChange={(e) => console.log(e.target.value)} 
    />
  );
}

export default App;`
  },
  Fireeffect: {
    description: "An input field with a fire animation effect.",
    props: [
      { name: "placeholder", type: "string", required: false, description: "Placeholder text for the input" },
      { name: "intensity", type: "number", required: false, default: "2", description: "Intensity of the fire effect (1-5)" }
    ],
    usage: `import { FireEffectInput } from "sparkels_ui";

function App() {
  return (
    <FireEffectInput 
      placeholder="Hot input..." 
      intensity={3}
    />
  );
}

export default App;`
  }
  // Add more component-specific documentation as needed
};

// Default documentation for components without specific docs
const getDefaultDocs = (componentName) => {
  return {
    description: `A UI component from the sparkels_ui library.`,
    props: [],
    usage: `import { ${componentName} } from "sparkels_ui";

function App() {
  return <${componentName} />;
}

export default App;`
  };
};

const componentsList = [
  { name: "BlackholeVortex", component: <BlackholeVortex /> },
  { name: "Tornado", component: <TornadoCanvas /> },
  { name: "Stars", component: <Stars /> },
  { name: "Meteors", component: <RealisticMeteors /> },
  { name: "AsteroidBelt", component: <AsteroidBelt /> },
  { name: "Nebula", component: <Nebula /> },
  { name: "SouthPoleScene", component: <SouthPoleScene /> },
  { name: "RainingEffect", component: <RainingEffect /> },
  { name: "PlasmaFlow", component: <PlasmaFlow /> },
  { name: "HackerBackground", component: <HackerBackground /> },
  { name: "ThunderScene", component: <ThunderScene /> },
  { name: "Flash", component: <Flash /> },
  { name: "Jelly", component: <Jelly /> },
  // { name: "Mouselight", component: <Mouselight><h1 className="w-full">Welcome to Sparkels_ui🚀......................</h1></Mouselight> },
  {
    name: "Card3D", component: (
      <Card3D
        image="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
        title="Air Jordan 4 RM"
        subtitle="men's Shoes MRP : ₹ 12 795.00"
        buttonText="BUY IT NOW"
        onButtonClick={() => alert("Button clicked!")}
      />
    )
  },
  { name: "SparkSlide", component: <SlideShow slides={slides} /> },
  { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
  // { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> },
  // { name: "Fireeffect", component: <FireEffectInput placeholder="Welcome to Sparkels_ui🚀" /> },
  { name: "Neoeffect", component: <NeoInput placeholder="Welcome to Sparkels_ui🚀" /> }
];

const Component = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  // Get component documentation (either specific or default)
  const getComponentDocs = (componentName) => {
    return componentDocs[componentName] || getDefaultDocs(componentName);
  };

  return (
    <div className="flex max-w-full bg-black text-white z-10 min-h-screen">
      <button 
        className={`fixed top-16 left-4 md:hidden p-3 rounded-full z-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all duration-300 group ${
          isSidebarOpen ? "left-[calc(10rem+1rem)]" : "left-1"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <div className="relative">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
            isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${
            isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></div>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-full animate-ping bg-purple-400"></div>
          </div>
        </div>
      </button>
      <div 
        className={`fixed inset-y-0 left-0 bg-black p-4 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/8 border-r border-gray-600 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="pt-12 md:pt-0">
          <h2 className="text-xl font-bold mb-4">Components</h2>
          <ul className="overflow-y-auto md:overflow-y-visible max-h-[calc(100vh-160px)] md:max-h-none">
            {componentsList.map((item, index) => (
              <li 
                key={index} 
                className="p-2 cursor-pointer hover:bg-gray-700 rounded" 
                onClick={() => {
                  setSelectedComponent(item.component);
                  setSelectedName(item.name);
                  setIsSidebarOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center  md:pl-0 md:pr-0 overflow-x-hidden">
        {/* Component Display Area */}
        <div className="w-full flex justify-center mb-8 ">
          {selectedComponent ? selectedComponent : <InstallationGuide/>}
        </div>
        
        {/* Documentation Area */}
        {selectedName && (
          <div className="w-full max-w-3xl rounded-lg flex flex-col p-4">
            <h3 className="text-xl font-semibold mb-2">{selectedName}</h3>
            
            {/* Component Description */}
            <p className="text-gray-300 mb-4">{getComponentDocs(selectedName).description}</p>
            
            {/* Props Documentation */}
            {getComponentDocs(selectedName).props.length > 0 && (
              <div className="w-full mb-4">
                <h4 className="text-lg font-semibold mb-2">Props</h4>
                <div className="bg-gray-800 rounded-lg p-4 w-full overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="text-left py-2 px-2 border-b border-gray-700">Name</th>
                        <th className="text-left py-2 px-2 border-b border-gray-700">Type</th>
                        <th className="text-left py-2 px-2 border-b border-gray-700">Required</th>
                        <th className="text-left py-2 px-2 border-b border-gray-700">Default</th>
                        <th className="text-left py-2 px-2 border-b border-gray-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getComponentDocs(selectedName).props.map((prop, index) => (
                        <tr key={index}>
                          <td className="py-2 px-2 border-b border-gray-700">{prop.name}</td>
                          <td className="py-2 px-2 border-b border-gray-700 text-green-400">{prop.type}</td>
                          <td className="py-2 px-2 border-b border-gray-700">{prop.required ? "Yes" : "No"}</td>
                          <td className="py-2 px-2 border-b border-gray-700">{prop.default || "-"}</td>
                          <td className="py-2 px-2 border-b border-gray-700 break-words max-w-xs">{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Installation Info */}
            <h4 className="text-lg font-semibold mt-2">Installation</h4>
            <div className="relative w-full mt-1">
              <pre className="bg-black p-2 border border-gray-600 rounded text-green-400 overflow-x-auto">npm install sparkels_ui</pre>
              <div
  className="absolute top-1 right-1 p-1 rounded  text-white hover:bg-gray-900 cursor-pointer"
  onClick={() => copyToClipboard("npm install sparkels_ui")}
  title="Copy to clipboard"
>
  <Copy size={16} />
</div>

            </div>

            {/* Usage Example */}
            <h4 className="text-lg font-semibold mt-4">Usage</h4>
            <div className="relative w-full mt-1">
              <pre className="bg-black p-4 border border-gray-600 rounded text-green-400 whitespace-pre overflow-x-auto max-w-full">
                {getComponentDocs(selectedName).usage}
              </pre>
              <div
  className="absolute top-1 right-1 p-1 rounded  text-white hover:bg-gray-900 cursor-pointer"
  onClick={() => copyToClipboard(getComponentDocs(selectedName).usage)}
  title="Copy to clipboard"
>
  <Copy size={16} />
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;