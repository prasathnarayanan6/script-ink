import React from "react";
import NavBar from "../Components/NavBar";

function Login(){
    return (
        <>
           <div className="bg-pink-200 h-screen">
                        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
                                <NavBar />
                        </div>
           </div>     
        </>
    )
}
export default Login;