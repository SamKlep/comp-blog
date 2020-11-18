import React from 'react'
import Truncate from 'react-truncate'
import Moment from 'react-moment'
import { Card, Container, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const PostListItem = ({ post }) => {
  return (
    <Container className='justify-content-md-center mb-5'>
      <Card className='mx-auto' style={{ width: '60%' }}>
        <Card.Body>
          <Link to={`/posts/${post._id}`}>
            <Card.Title className='bg-secondary' as='div'>
              <strong>
                <h4 className=''>{post.title}</h4>
              </strong>
            </Card.Title>
          </Link>
          <Card.Subtitle className='mb-2 text-muted'>
            <Moment element='span' format='YYYY/MM/DD HH:mm'>
              {post.createdAt}
            </Moment>
          </Card.Subtitle>
          <Card.Text>
            <p>
              <Truncate lines={3}>{post.body}</Truncate>
            </p>
          </Card.Text>
          <Link to={`/posts/${post._id}`}>
            <Card.Link href='#'>
              <Button variant='secondary'>Learn More</Button>
            </Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PostListItem
