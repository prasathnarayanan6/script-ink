import React from "react";
import NavBar from "../Components/NavBar";
import hero from '../assets/hero.jpeg'

function Login(){
    return (
        <>
           <div className="bg-black h-screen">
                        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
                                <NavBar />
                        </div>
                        <section className="relative overflow-hidden text-gray-800 min-h-[calc(100vh-64px)] flex items-center justify-center">
                            
                        </section>
           </div>     
        </>
    )
}
export default Login;