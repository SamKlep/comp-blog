import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

function PostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: title,
      body: body,
    }
    axios
      .post('api/v1/posts', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        className='m-3'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        type='text'
        name='title'
        required
      />
      <Form.Control
        className='m-3'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Some text...'
        as='textarea'
        rows={6}
        name='body'
        required
      />

      <Button variant='warning' className='text-dark m-2' type='submit'>
        Submit
      </Button>
    </Form>
  )
}
export default PostForm
