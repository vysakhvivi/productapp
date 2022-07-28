import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {Container,Card} from 'react-bootstrap'
import image1 from '../images/undraw_Add_files_re_v09g.png'
import image2 from '../images/undraw_task_list_6x9d.png'
import './dashboard.css'

function Dashboard() {
  return (
   <Container className='dashcontainer' >
    <div className='addproduct'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
    <div className='viewproduct'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
   </Container>
  )
}

export default Dashboard