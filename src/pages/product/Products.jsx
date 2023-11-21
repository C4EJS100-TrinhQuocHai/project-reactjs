import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getAllProduct } from '../../store';
export default function Products() {
     const ditpatch1= useDispatch();
    useEffect(()=>{
       ditpatch1(getAllProduct())
    },[])
  return (
    <div>Products</div>
  )
}
