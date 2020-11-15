import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'

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
    <>
      <Row className='justify-content-md-center  mb-5'>
        <Col md={6}>
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
        <Col md={3}>{post.createdAt}</Col>
      </Row>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
    </>
  )
}

export default PostScreen
