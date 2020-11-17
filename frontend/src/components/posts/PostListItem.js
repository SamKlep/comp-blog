import React from 'react'
import Truncate from 'react-truncate'
import Moment from 'react-moment'
import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const PostListItem = ({ post }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className='align-items-center mb-5'>
        <Card.Body>
          <Link to={`/posts/${post._id}`}>
            <Card.Title className='bg-secondary' as='div'>
              <strong>
                <h4 className=''>{post.title}</h4>
              </strong>
            </Card.Title>
          </Link>
          <p>
            <Truncate lines={3}>{post.body}</Truncate>
          </p>
          <Card.Footer className='bg-light text-dark'>
            <Moment element='span' format='YYYY/MM/DD HH:mm'>
              {post.createdAt}
            </Moment>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PostListItem
