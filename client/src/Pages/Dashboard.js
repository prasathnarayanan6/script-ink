import React, {useState} from "react";
import NavBar from "../Components/NavBar";
import { useParams } from 'react-router-dom';
import { PuffLoader,RingLoader, CircleLoader , MoonLoader, ClipLoader} from 'react-spinners';
import hero from '../assets/ai_human_intrac.webp';

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
          genre: '',
          script_language: [],
          script_prompt: ''
  })

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log('Form submitted!');
      console.log('Genre:', formData.genre);
      console.log('Language:', formData.language);
      console.log('Prompt:', formData.prompt);

      // You can now send this to an API or handle it further

    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <NavBar />
      </div>

      <img 
        src={hero}
        alt="Background animation"
        className= "absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className= "relative bg-black py-32">        
        <form onSubmit={handleSubmit} className="p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-white text-xl mb-6 text-center">Create your script now and say NO to writer's block</h2>

          {/* Genre Field */}
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

          {/* Prompt Field */}
          <div className="mb-6">
            <label htmlFor="prompt" className="block text-white mb-2">Prompt</label>
            <textarea
              name="prompt"
              id="prompt"
              value={formData.prompt}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-2 rounded bg-white text-black"
            />
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