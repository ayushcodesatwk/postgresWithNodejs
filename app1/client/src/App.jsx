import React from 'react'
import Navbar from './components/navbar/Navbar';
import Registration from './components/register/Registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'
import Courses from './components/courses/Courses';
import Cart from './components/cart/Cart';
import Sales from './components/sales/Sales';

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='*' element={<Home/>} />
              <Route path='/register' element={<Registration/>} />
              <Route path='/courses' element={<Courses/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/sales' element={<Sales/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
