import React from 'react'
import { Button, Card, NavLink } from 'react-bootstrap'; 
import "../components/Home.css"

function Home() {
  return (
    <div className='abc'>
            <div className='mainconatainer'>
           <NavLink to="/add"> <Button variant="primary">Add product</Button></NavLink>
            <NavLink to="/all"> <Button variant="primary">All Products</Button></NavLink>
            </div>
             

      
    </div>
  )
}

export default Home
