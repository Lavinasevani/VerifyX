// // import { StrictMode } from "react";
// // import { createRoot } from "react-dom/client";
// // import App from "./App.tsx";
// // import "./index.css";
// // import { MetaMaskProvider } from "metamask-react";
// // import { Provider } from "react-redux";
// // import store from "./redux/store.ts";

// // createRoot(document.getElementById("root")!).render(
// //   <StrictMode>
// //     <Provider store={store}>
// //       <MetaMaskProvider>
// //         <App />
// //       </MetaMaskProvider>
// //     </Provider>
// //   </StrictMode>
// // );


// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { MetaMaskProvider } from "metamask-react";
// import { Provider } from "react-redux";
// import store from "./redux/store.ts";
// import { RouterProvider } from "react-router-dom"; // Import RouterProvider

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <MetaMaskProvider>
//         <App /> {/* No need for BrowserRouter here */}
//       </MetaMaskProvider>
//     </Provider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MetaMaskProvider } from "metamask-react";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import Router from './Router/Router'; // Import your router

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <MetaMaskProvider>
        <RouterProvider router={Router} /> {/* Use RouterProvider here */}
      </MetaMaskProvider>
    </Provider>
  </StrictMode>
);