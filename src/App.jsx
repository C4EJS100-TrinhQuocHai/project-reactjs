import React from 'react'
import {Routes,Route} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Products from './pages/product/Products';
export default function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/product' element={<Products></Products>}> </Route>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

   </>
  )
}
