import React from 'react'
import {useSelector} from "react-redux"
import Products from '../product/Products';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
export default function Home() {
  const data= useSelector(state1=>state1);
  console.log(data);
  return (
    <div> 
        <Header></Header>
        <Products></Products> 
        <Footer></Footer>
    </div>
    
  )
}
