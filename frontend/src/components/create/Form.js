import React, { useState } from 'react'
import axios from 'axios'

function Form() {
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
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        type='text'
        name='title'
        required
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Some text...'
        type='text'
        name='body'
        required
      />

      <button type='submit'>Submit</button>
    </form>
  )
}
export default Form
