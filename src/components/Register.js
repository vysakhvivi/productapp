import React ,{useState} from 'react'
import './register.css'
import {Link} from 'react-router-dom'
import axios from 'axios'



function Register() {


const [name,setname]=useState("");
const [password,setpassword]=useState("");
const [email,setemail]=useState("");
const [place,setplace]=useState("");

    function getdata(e){
        console.log(name,email,password,place);
    }
    
const url="http://localhost:3000/"
const postdata=async(res)=>{
    res.preventdefault();

   axios.post(url,{
    name, email, password, place
   })
   .then(res=>{
    console.log(res.data)
   })

    const data = await res.json();
    if(data.status===422 || !data){
        window.alert("Invalid Registration")
    }else{
        window.alert("Successfully Registered")
        History.pushState("/login")
    }
}
   
        

    
  return (
    <div className='regcontainer' >
        <div>
            <h1 className='heading'>REGISTRATION</h1>
        </div>
            <form action="" method="POST" >
                <div className='form-group'>
                    <label className='formlabel'>
                    <i class="zmdi zmdi-account-circle zmdi-hc-lg"></i> UserName
                    </label>
                    <input type="text" name='name'  onChange={(e)=>setname(e.target.value)}  id='name' className='forminput' required placeholder='Enter the name'></input>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                    <i class="zmdi zmdi-email zmdi-hc-lg"></i> Email
                    </label>
                    <input type="email" onChange={(e)=>setemail(e.target.value)} name='email' id='email' className='forminput' required placeholder='Enter the email'/>
                </div>
                <div className='form-group'>
                    <label className='formlabel'>
                    <i class="zmdi zmdi-account zmdi-hc-lg"></i> Password
                    </label>
                    <input type="password" onChange={(e)=>setpassword(e.target.value)} name='password' id='password' className='forminput' required placeholder='Enter the password'/>
                </div>
                
                <div className='form-group'>
                    <label className='formlabel'>
                    <i class="zmdi zmdi-gps-dot zmdi-hc-lg"></i> Place
                    </label>
                    <input type="text" onChange={(e)=>setplace(e.target.value)}  name='place' id='place' className='forminput' required placeholder='Enter the place'/>
                </div>
                <div className='button'>
                        <button type='submit' onClick={postdata} className='button1'>Register</button>
                </div>
                <div className='alreadylogin'>
                    <Link to={'/login'} >Already a user ? Login.. </Link>
                </div>
            </form>
    
    
    </div>
  )
}

export default Register