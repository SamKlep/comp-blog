import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Container } from 'react-bootstrap'
import Moment from 'react-moment'

const PostScreen = ({ match }) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchSerials = async () => {
      const { data } = await axios.get(`/api/v1/posts/${match.params.id}`)

      // console.log(data)
      setPost(data)
    }

    fetchSerials()
    // eslint-disable-next-line
  }, [match])
  return (
    <Container>
      <Row className='justify-content-md-center mt-5  mb-5'>
        <Col lg={2}></Col>
        <Col lg={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <strong>
                <h3>{post.title}</h3>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h5>{post.body}</h5>
              </strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Moment format='YYYY/MM/DD HH:mm'>{post.createdAt}</Moment>
          <Link className='btn btn-light m-3' to='/'>
            Go Back
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default PostScreen
