// // import { createBrowserRouter } from "react-router-dom";
// // // import ProtectedRoute from "./ProtectedRoute";
// // // import { LandingPageComponent } from "@/components/landing-page1";
// // import Profile from "@/Profile";
// // import Home from "@/components/Home";
// // import ProtectedRoute from "./ProtectedRoute";
// // import { DashboardComponent } from "@/components/dashboardCandidate";
// // import { DashboardComponentEmployer } from "@/components/dashboard";
// // import { LeaderboardPage } from "@/components/leaderboard";
// // import { ProfilePage } from "@/components/profile";
// // import { VerificationPage } from "@/components/verification";
// // import { SettingsPage } from "@/components/settings";
// // import { PostJobPage } from "@/components/post-job";
// // import RegisterationPage from "@/components/RegisterationPage";

// // const Router = createBrowserRouter([
// //   {
// //     element:<ProtectedRoute allowedRole="admin"/>,
// //     children:[
// //         {
// //             path: "/",
// //             element: <Home />,
// //           },
// //           // {
// //           //   path: "/profile",
// //           //   element: <Profile />,
// //           // },
// //           {
// //             path: "/dashboard/candidate",
// //             element: <DashboardComponent />,
// //           },
// //           {
// //             path: "/dashboard/employer",
// //             element: <DashboardComponentEmployer />,
// //           },
// //           {
// //             path: "/leaderboard",
// //             element: <LeaderboardPage />,
// //           },
// //           {
// //             path: "/profile",
// //             element: <ProfilePage />,
// //           },
// //           {
// //             path: "/verifications",
// //             element: <VerificationPage />,
// //           },
// //           {
// //             path: "/settings",
// //             element: <SettingsPage />,
// //           },
// //           {
// //             path: "/post-jobs",
// //             element: <PostJobPage />,
// //           },
          
// //     ]
// //   },
// //   {
// //     path: "/register",
// //     element: <RegisterationPage />,
// //   },
      
   
// // ]);

// // export default Router

// // Router.tsx
// import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute"; // Ensure this is correctly implemented
// import Home from "@/components/Home";
// import { DashboardComponent } from "@/components/dashboardCandidate";
// import { DashboardComponentEmployer } from "@/components/dashboard";
// import { LeaderboardPage } from "@/components/leaderboard";
// import { ProfilePage } from "@/components/profile";
// import { VerificationPage } from "@/components/verification";
// import { SettingsPage } from "@/components/settings";
// import { PostJobPage } from "@/components/post-job";
// import RegisterationPage from "@/components/RegisterationPage";

// const Router = createBrowserRouter([
//   {
//     element: <ProtectedRoute allowedRole="admin" />, // Protecting these routes
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/dashboard/candidate",
//         element: <DashboardComponent />,
//       },
//       {
//         path: "/dashboard/employer",
//         element: <DashboardComponentEmployer />,
//       },
//       {
//         path: "/leaderboard",
//         element: <LeaderboardPage />,
//       },
//       {
//         path: "/profile",
//         element: <ProfilePage />,
//       },
//       {
//         path: "/verifications",
//         element: <VerificationPage />,
//       },
//       {
//         path: "/settings",
//         element: <SettingsPage />,
//       },
//       {
//         path: "/post-jobs",
//         element: <PostJobPage />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <RegisterationPage />,
//   },
// ]);

// export default Router;


// Router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ProtectedRoute from "./ProtectedRoute"; // Ensure this is correctly implemented
import Home from "@/components/Home";
import { DashboardComponent } from "@/components/dashboardCandidate";
import { DashboardComponentEmployer } from "@/components/dashboard";
import { LeaderboardPage } from "@/components/leaderboard";
import { ProfilePage } from "@/components/profile";
import { VerificationPage } from "@/components/verification";
import { SettingsPage } from "@/components/settings";
import { PostJobPage } from "@/components/post-job";
import RegisterationPage from "@/components/RegisterationPage";

const Router = createBrowserRouter([
  {
    element: <App />, // Use App as a layout component
    children: [
      {
        element: <ProtectedRoute allowedRole="admin" />, // Protecting these routes
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/dashboard/candidate",
            element: <DashboardComponent />,
          },
          {
            path: "/dashboard/employer",
            element: <DashboardComponentEmployer />,
          },
          {
            path: "/leaderboard",
            element: <LeaderboardPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/verifications",
            element: <VerificationPage />,
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
          {
            path: "/post-jobs",
            element: <PostJobPage />,
          },
        ],
      },
      {
        path: "/register",
        element: <RegisterationPage />,
      },
    ],
  },
]);

export default Router;