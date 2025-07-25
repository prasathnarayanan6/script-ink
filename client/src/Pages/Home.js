import React from 'react';
import { jwtDecode } from 'jwt-decode';
import NavBar from '../Components/NavBar';
function Home() {
  return (
    <>
      <div className="bg-pink-50">
        <NavBar />
        <section className="relative overflow-hidden text-gray-800 min-h-[calc(100vh-64px)] flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/nj4J6jsjd5DicG7zzMA3Gvj0Bg.webp"
            alt="Background animation"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20 animate-moveSlow z-0"
          />
          <div className="z-10 mx-auto px-4 py-0 text-center">
            <div className="text-5xl text-gray-600 font-bold font-slab mb-4">
              <span className="block mt-2">Kickstart your creativity</span>
            </div>
            <p className="text-lg text-gray-600 mt-10">
                Write. Build. Share.
            </p>
            <p className="text-md text-gray-600 mb-6 mt-10 text-center">
              The place where aspiring filmmakers find the tools, support, and community to bring their stories to life.
            </p>
            <div className="gap-4 flex justify-center items-center mt-10">
              <button className="bg-[#3F51B5] text-white px-6 py-2 rounded-md hover:bg-[#2e3ba7] transition">
                Get Started
              </button>
              <button className="border border-[#3F51B5] text-[#3F51B5] px-6 py-2 rounded-md bg-[#FF4C60] transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
