import { useState } from "react";

const Title=()=>(
    <a><img src="https://static.vecteezy.com/system/resources/previews/028/338/773/original/vintage-illustration-deign-for-t-shirt-t-shirt-design-for-your-business-pod-business-western-cowboy-rodeo-vintage-car-logo-free-png.png" alt="logo" className="logo"/></a>
);



const Header=()=>{
    const [isLoggedin,setIsLogedin]=useState(false);
    return <div className="header">
        <Title />
        <div className="nav-iteam">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                {isLoggedin ? (<li><button onClick={()=>setIsLogedin(false)}>Logout</button></li>) : (<li><button onClick={()=>setIsLogedin(true)}>Login</button></li>)}
            </ul>
        </div>
    </div> 
}


export default Header;