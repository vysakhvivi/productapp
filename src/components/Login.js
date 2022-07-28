import React from 'react'
import './login.css'
import {useParams, Link} from 'react-router-dom'


function Login() {
    return (
        <div>
            <div className='logincontainer' >
                <div>
                    <h1 className='heading'>LOGIN</h1>
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
                    <input type="password" name='password' id='password' className='forminput' placeholder='Enter the password' />
                </div>
               
                <div className='button'>
                    <button className='button1'>LOGIN</button>
                </div>
                <div className='alreadylogin'>
                    <Link to={'/'}>Not a current user ? Register here..</Link>
                </div>


            </div>
        </div>
    )
}

export default Login