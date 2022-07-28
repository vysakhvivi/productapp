import React from 'react'
import './register.css'
import {useParams,Link} from 'react-router-dom'


function Register() {
  return (
    <div className='regcontainer' >
        <div>
            <h1 className='heading'>REGISTRATION</h1>
        </div>
            <div className='form-group'>
                <label className='formlabel'>
                <i class="zmdi zmdi-account-circle zmdi-hc-lg"></i> UserName
                </label>
                <input type="text" name='name' id='name' className='forminput' placeholder='Enter the name'></input>
            </div>
            <div className='form-group'>
                <label className='formlabel'>
                <i class="zmdi zmdi-account zmdi-hc-lg"></i> Password
                </label>
                <input type="password" name='password' id='password' className='forminput' placeholder='Enter the password'/>
            </div>
            <div className='form-group'>
                <label className='formlabel'>
                <i class="zmdi zmdi-email zmdi-hc-lg"></i> Email
                </label>
                <input type="email" name='email' id='email' className='forminput' placeholder='Enter the email'/>
            </div>
            <div className='form-group'>
                <label className='formlabel'> 
                <i class="zmdi zmdi-gps-dot zmdi-hc-lg"></i> Place
                </label>
                <input type="text" name='place' id='place' className='forminput' placeholder='Enter the place'/>
            </div>
            <div className='button'>
                    <button className='button1'>Register</button>
            </div>
            <div className='alreadylogin'>
                <Link to={'/login'} >Already a user ? Login.. </Link>
            </div>
    
    
    </div>
  )
}

export default Register