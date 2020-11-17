import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) =>
    Axios.post('/api/v1/posts', { data })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          name='title'
          ref={register({ required: true, maxLength: 200 })}
          type='textarea'
          placeholder='Example Heading'
        />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          name='body'
          placeholder='Example description of a post...'
          rows={10}
          ref={register({ required: true, maxLength: 200 })}
        />
      </Form.Group>
      <Button type='submit'>Sumbit</Button>
    </Form>
  )
}
