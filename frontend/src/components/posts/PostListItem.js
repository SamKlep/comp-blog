import React from 'react'
import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const PostListItem = ({ post }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5'>
        <Link to={`/posts/${post._id}`}></Link>
        <Card.Body>
          <Link to={`/posts/${post._id}`}>
            <Card.Title as='div'>
              <strong>
                <h4 className=''>{post.title}</h4>
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PostListItem
