import React, {useState} from "react";
import NavBar from "../Components/NavBar";
import { useParams } from 'react-router-dom';
import { PuffLoader,RingLoader, CircleLoader , MoonLoader, ClipLoader} from 'react-spinners';
import hero from '../assets/ai_human_intrac.webp';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
// Optional inline styling
const formStyle = {
  maxWidth: '500px',
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

function Dashboard() {
  const pathName = useParams();
  const [formData, setFormData] = useState({
          title: '',
          premise: '',
          genre: '',
          output_type: '',
          language: '',
  })

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const token = localStorage.getItem('user_token');
  // console.log(jwtDecode(token));
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3003/api/v1/form-check', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        console.log(response);
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };
  console.log(formData);
  return (
    <div className="bg-black min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <NavBar pathName={pathName}/>
      </div>

      <img 
        src={hero}
        alt="Background animation"
        className= "absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className= "relative py-32">        
        <form onSubmit={handleSubmit} className="p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-white text-xl mb-6 text-center">Create your script now and say NO to writer's block</h2>

          {/* Genre Field */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-white mb-2">Title</label>
            <input
              type="text"
              name="title"
              id="genre"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="premise" className="block text-white mb-2">Premise</label>
            <textarea
              name="premise"
              id="premise"
              value={formData.premise}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="genre" className="block text-white mb-2">Genre</label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>
          {/* Language Field */}
          <div className="mb-6">
            <label htmlFor="outpu_type" className="block text-white mb-2">Output Type</label>
            <select
              name="output_type"
              id="output_type"
              value={formData.output_type}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">Select a output type</option>
              <option value="Screenplay">Screenplay</option>
              <option value="Treatment">Treatment</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="language" className="block text-white mb-2">Language</label>
            <select
              name="language"
              id="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">Select a language</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#FF4C60] text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard;