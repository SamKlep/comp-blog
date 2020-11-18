import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import PostForm from '../create/PostForm'

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
            <PostForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CreateScreen
