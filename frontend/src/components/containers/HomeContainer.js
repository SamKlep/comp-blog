import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostListItem from '../posts/PostListItem'

import '../../App.css'
import { Row, Col, Jumbotron } from 'react-bootstrap'

const HomeContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/v1/posts`)
      .then((response) => {
        setData(response.data)
        // console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading posts...</p>
  }

  return (
    <div className='container text-center'>
      <Jumbotron fluid>
        <h1 className='text-warning'>Posts</h1>
      </Jumbotron>

      <Row>
        <br />
        <Col>
          <section className='cards'>
            {data.map((post, _id) => (
              <PostListItem key={_id} post={post} />
            ))}
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default HomeContainer
