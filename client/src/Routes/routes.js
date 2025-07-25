import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import PrivateRoute from './ProtectedRoutes';
function RoutesPath() {
  return (
    <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route element={<PrivateRoute />}>
                        
                    </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default RoutesPath;