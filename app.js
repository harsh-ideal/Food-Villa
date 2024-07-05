import ReactDom from "react-dom/client";
import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";








const Applayout=()=>{
    return(
    <>
    <Header />
    <Body/>
    <Footer/>
    </>
    );
};

const root=ReactDom.createRoot(document.getElementById('root'));
 
root.render(<Applayout />);