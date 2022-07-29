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
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <div className='button'>
     <button className='button1'>Add Item</button>
        </div>
      </div>
    </div>
  )
}

export default Listproduct