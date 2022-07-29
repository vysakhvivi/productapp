import React,{useState} from 'react'
import './login.css'
import {useParams, Link} from 'react-router-dom'


function Login() {

    const postdata = (res)=>{

    }
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");

    return (
        <div>
            <div className='logincontainer' >
                <div>
                    <h1 className='heading'>LOGIN</h1>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="zmdi zmdi-email zmdi-hc-lg"></i> UserName
                    </label>
                    <input type="email" name='email' id='email' value={email} onChange={(e)=>setemail(e.target.value)} className='forminput' placeholder='Enter the email id'></input>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                        <i class="zmdi zmdi-account zmdi-hc-lg"></i> Password
                    </label>
                    <input type="password" name='password' value={password} id='password' onChange={(e)=>setpassword(e.target.value)} className='forminput' placeholder='Enter the password' />
                </div>
               
                <div className='button'>
                    <button className='button1' onClick={postdata}>LOGIN</button>
                </div>
                <div className='alreadylogin'>
                    <Link to={'/'}>Not a current user ? Register here..</Link>
                </div>


            </div>
        </div>
    )
}

export default Login