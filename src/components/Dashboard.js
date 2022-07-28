import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import image1 from '../images/undraw_Add_files_re_v09g.png'
import image2 from '../images/undraw_task_list_6x9d.png'
import './dashboard.css'

function Dashboard() {
    return (
        <main className='dashboard'>
            <section>
                <Container className='dashcontainer' >
                    <Link to={'./addproduct'}>
                        <div className='addproduct'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className='image' variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Add Products</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>
                    <Link to={'./listproject'}>
                        <div className='viewproduct'>
                            <Card style={{ width: '18rem', }}>
                                <Card.Img className='image' variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>List Products</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Link>
            
                </Container>
                <div class="ocean">
                        <div class="wave"></div>
                        <div class="wave"></div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard