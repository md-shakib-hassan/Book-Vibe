import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        path:"/",
        Component:Home,
      },
      // {
      //   path:"list",
      //   Component: 
      // }
    ]
      
    
  },
]);