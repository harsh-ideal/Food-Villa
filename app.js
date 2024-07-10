import ReactDom from "react-dom/client";
import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";







const Applayout=()=>{
    return(
    <>
    <Header />
    <Body/>
    <Footer/>
    </>
    );
};

const appRouter=createBrowserRouter([
    {
        path:'/',
        element: <Applayout />
    },
    {
        path:'/about',
        element:<About/>
    }
])

const root=ReactDom.createRoot(document.getElementById('root'));
 
root.render(<RouterProvider router={appRouter} />);