// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { Button } from './components/ui/button'
// // import { Vortex } from './components/ui/vortex'
// // import { RainbowButton } from './components/ui/rainbow-button'
// // import ShimmerButton from './components/ui/shimmer-button'
// // import Home from './components/Home'
// // import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
// // import { RouterProvider } from 'react-router-dom'
// // import Router from './Router/Router'


// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //   <div className=" m-0 p-0 pb-6 primary_color">
// //     <Navbar/>
// //      <RouterProvider router={Router}/>
// //      <Footer/>
// //   </div>
// //     </>
// //   )
// // }

// // export default App


// // App.tsx
// import { RouterProvider } from 'react-router-dom';
// import Router from './Router/Router'; // Ensure this is set up correctly
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <div className="m-0 p-0 pb-6 primary_color">
//         <Navbar />
//         <RouterProvider router={Router} /> {/* Use RouterProvider here */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

// App.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="m-0 p-0 pb-6 primary_color">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>
  );
}

export default App;