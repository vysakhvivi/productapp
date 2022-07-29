import React from 'react'
import Table from 'react-bootstrap/Table';
import {Link , Redirect} from 'react-router-dom'
import {} from 'react-router'
import './listproduct.css'


function Listproduct() {
  return (
    <div className='t1'>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          </tr>
          <tr>
            
          </tr>
          <tr>
            
          </tr>
        </tbody>
      </Table>
      <div>
        <div className='button'>
   <Link to={'./dashboard'}> <button className='button1'>Add Item</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default Listproduct