import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Layout/Applayout";
import Homepage from "./Screens/Homepage";
import Delivery from "./Reuseable/Delivery";
import InterState from "./Reuseable/InterState";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        element: <Homepage />,
        children: [
          {
            element: <Delivery />,
            index: true, 
          },
          {
            element: <InterState/>,
            path: 'interstate'
          }
        ],
      },
    ],
  },
  {
    path: 'sign-in',
    element: <SignIn/>,
  },
  {
    path: 'sign-up',
    element: <SignUp/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
