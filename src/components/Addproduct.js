import React from 'react'
import './addproduct.css'
import { Link } from 'react-router-dom'

function Addproduct() {
    return (
        <div>
            <div className='heading1'>
                <h1>Add Products</h1>
            </div>
            <div className='productcontainer' >
                <div>
                    <div className='backbutton'>
                        <Link to={'/dashboard'} className='back' ><i class="fas fa-arrow-circle-left"></i> Back</Link>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="fas fa-file-signature"></i> Product Name
                    </label>
                    <input type="text" name='name' id='name' className='forminput' placeholder='Enter the product name'></input>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="fas fa-rupee-sign"></i> Price
                    </label>
                    <input type="number" name='price' id='price' className='forminput' placeholder='Enter the price' />
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="fas fa-sort-numeric-up-alt"></i> Quantity
                    </label>
                    <input type="number" name='quantity' id='quantity' className='forminput' placeholder='Enter the quantity' />
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="fas fa-filter"></i> Category
                    </label>
                    <input type="text || num " name='quantity' id='quantity' className='forminput' placeholder='Enter the category' />
                </div>
                <div className='button'>
                    <button className='button1'>Add Item</button>
                </div>
            </div>
        </div>
    )
}

export default Addproduct