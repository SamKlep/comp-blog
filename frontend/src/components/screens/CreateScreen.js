import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Form from '../create/Form'

const CreateScreen = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className='text-center'>Create Post</h1>
        </Container>
      </Jumbotron>
      <Container className='mb-5'>
        <Row className='justify-content-md-center'>
          <Col lg={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CreateScreen
