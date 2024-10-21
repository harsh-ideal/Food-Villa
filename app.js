import ReactDom from "react-dom/client";
import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";




const Applayout=()=>{
    return(
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
    );
};



const appRouter=createBrowserRouter([
    {
        path:'/',
        element: <Applayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu/>
            }
        ]
    },
    
])


const root=ReactDom.createRoot(document.getElementById('root'));
 console.log(root);
 
root.render(<RouterProvider router={appRouter} />);