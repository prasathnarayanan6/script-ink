import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PrivateRoute from './ProtectedRoutes';
import Dashboard from '../Pages/Dashboard';
function RoutesPath() {
  return (
    <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/:login" element={<Login />} />
                    <Route path="/si" elememt={<Dashboard />} />
                    <Route element={<PrivateRoute />}>
                    </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default RoutesPath;