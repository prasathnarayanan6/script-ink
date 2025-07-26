import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import RoutesPath from './Routes/routes';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      {/* <div className="">Hello</div> */}
      <RoutesPath />
      <ToastContainer 
          position="top-center"
          hideProgressBar={true}
          autoClose={3000}
          closeOnClick
          pauseOnHover
          draggable
          transition={Zoom}
          theme="colored"
      />
    </>
  );
}

export default App;
