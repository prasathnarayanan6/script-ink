import React from 'react';
import TextField from '@mui/material/TextField';
import script from "../assets/scriptInkPrimary.png";
function SignUp() {
  return (
    <div className="bg-gray-600 h-screen relative overflow-hidden">
      <div className="absolute top-2 left-5">
        <a href="/" className=""><img src={script} alt="Script Ink Logo" className="h-14 w-auto" /></a>
      </div>

      <div className="grid grid-cols-2 gap-5 h-full">
        <div className="bg-gray-100 flex justify-center items-center h-full">
          <div className="w-[55%] max-w-md">
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ minHeight: "35px" }}
                id="outlined-email"
                label="First Name"
              />
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ minHeight: "35px" }}
                id="outlined-email"
                label="Last Name"
              />
            </div>
            <div className="mt-5">
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ minHeight: "35px" }}
                id="outlined-email"
                label="Email"
              />
            </div>
            <div className="mt-5">
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ minHeight: "35px" }}
                id="outlined-email"
                label="Phone Number"
              />
            </div>
            <div className="mt-5">
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={{ minHeight: "35px" }}
                id="outlined-password"
                label="Password"
              />
            </div>
            <div className="mt-7">
                <div><button className="bg-[#FF4C60] px-3 py-3 flex justify-center items-center text-white font-semibold rounded-lg border-[] text-sm">Start Trail</button></div>
            </div>
            <div className="underline"> </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-center items-center text-white">
            <span>dad</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;