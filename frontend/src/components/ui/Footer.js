import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Nav
        className='bg-primary p-5 fixed-bottom justify-content-center'
        activeKey='/'>
        <Nav.Item>
          <Nav.Link href='/'>Comp-Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Links</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Footer
