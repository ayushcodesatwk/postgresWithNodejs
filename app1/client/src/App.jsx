import React from 'react'
import Navbar from './components/navbar/Navbar';
import Registration from './components/register/Registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/register' element={<Registration/>} />
              <Route path='/courses' element={<Home/>} />
              <Route path='/cart' element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
