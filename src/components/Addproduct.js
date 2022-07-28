import React from 'react'
import { Container } from 'react-bootstrap'

function Addproduct() {
    return (
        <main className='addproduct'>
            <section className='add1'>
                <h1>ADD PRODUCT</h1>
            </section>
            <section className='add2' >
                <section>
                    <Container>
                        <div className='productcontainer' >

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
                    </Container>
                </section>
            </section>
        </main>
    )
}

export default Addproduct