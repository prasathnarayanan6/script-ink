import React, {useState} from "react";
import NavBar from "../Components/NavBar";
import { useParams, useNavigate } from 'react-router-dom';
import { LockIcon, Mail, Eye, EyeOff} from "lucide-react";
import { PuffLoader,RingLoader, CircleLoader , MoonLoader, ClipLoader} from 'react-spinners';
import bg from '../assets/scriptInkPrimary-modified.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import lavadeykabal from '../assets/bg.jpeg';
import LoginAPI from "../API/loginAPI";
function Login() {
    const pathName = useParams();
    const [icon, setIcon] = useState(EyeOff);
    const [type, setType] = useState('password');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        user_email: '',
        user_password: ''
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handleToggle = () => {
        if(type==='password')
        {
            setIcon(Eye);
            setType('text');
        }
        else
        {
            setIcon(EyeOff);
            setType('password');
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!loginData.user_email || !loginData.user_password)
        {
            toast.error("please fill all the fields" , {
                autoClose: 3000,
                toastId: 'input-missing',
                icon: false
            });
            return;
        }
        setLoading(true);
        try
        {
                    const response = await LoginAPI(loginData);
                    if (response.data.code === 200) {
                            const token = response.data.accessToken;
                            localStorage.setItem('user_token', token);
                            navigate('/si');
                    }
        }
        catch(err)
        {
            if (err?.response?.data?.code === 401 || err?.response?.data?.code === 404) {
              toast.error("invalid credentials", {
                toastId: 'invalid-credentials',
                autoClose: 3000,
                icon: false
              });
            }
            else if(err?.response?.data?.code === 403)
            {
                
            }
        } finally {
            setLoading(false); 
        }
    }
    console.log(loginData);
    return (
        <>
            <div className="bg-black min-h-screen">
                <div className="grid grid-cols-2 gap-5">
                       <div className="bg-gray-100 flex justify-center items-center h-screen">
                            <div className="w-[55%] max-w-md">
                                    <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                                        Login
                                    </h1>
                                    <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    value={loginData.user_email}
                                                    onChange={handleChange}
                                                    name="user_email"
                                                    className="rounded px-10 py-3 w-full mb-6 focus:outline-none focus:ring-0"
                                                />  
                                                <div className="absolute top-3 left-2"><Mail size={24} strokeWidth={2} className="text-gray-400" /></div>
                                    </div>
                                    <div className="relative">
                                                    <input
                                                        type={type}
                                                        placeholder="Password"
                                                        value={loginData.user_password}
                                                        onChange={handleChange}
                                                        name="user_password"
                                                        className="rounded px-10 py-3 w-full mb-6 focus:outline-none focus:ring-0"
                                                    />  
                                                    <div className="absolute top-3 left-2"><LockIcon size={24} strokeWidth={2} className="text-gray-400" /></div>
                                                    <button class="absolute top-3 right-2" onClick={handleToggle}>
                                                    {React.createElement(icon, {
                                                            size: 24,
                                                            strokeWidth: 2,
                                                            className: 'text-gray-400',
                                                    })}
                                                    </button>
                                    </div>
                                    <button className={`${loading ? ("bg-gray-300 text-gray-500 font-semibold rounded px-5 py-2 text-lg transition-all ease-in-out") : ("px-5 py-2 text-gray-500 bg-[#FF4C60] border border-[#3F51B5] text-white rounded transition-all ease-in-out duration-200")}`} onClick={handleSubmit} disabled={loading}>
                                    {loading ? (
                                            <div>Logging In <ClipLoader color="#8DC63F" size={24} className="ms-2" cssOverride={{ borderWidth: "4px",  }}/></div>
                                        ) : (
                                            "Login"
                                        )}
                                    </button><br></br><br></br>
                                    <button className="font-semibold text-blue-500">Don't have an account?
                                        <span className="text-black ms-1">Sign up</span>
                                    </button>
                            </div>
                       </div>
                       <div className="flex justify-center items-center">
                                            <div className="flex justify-center items-center py-20 rounded-3xl"><img src={bg} className="w-[50%]"/></div>  
                        </div>
                </div>
            </div>
        </>
    );
}
export default Login;