import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allproducts from '../components/Allproducts';
import AddProduct from '../components/AddProduct';
import ViewProducts from '../components/ViewProducts';

function Product_router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Allproducts/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/view/:pid' element={<ViewProducts/>}/>
          <Route path='/delete/:pid' element={<Allproducts/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default Product_router
