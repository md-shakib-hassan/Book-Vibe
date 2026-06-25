import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";


import ListBook from "../pages/ListBook";
import PagestoRead from "../pages/PagestoRead";
import HomeContent from "../pages/HomeContent";
import BookDetails from "../pages/BookDetails/BookDetails";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        path:"/",
        Component:HomeContent,
        
      },
      {
        path:"/list",
        Component: ListBook,
      },{
        path:"/pages",
        Component:PagestoRead,

      },
      {
        path: '/booKDetails/:id',
        Component:BookDetails,
       
       
      },
    ]
      
    
  },
]);