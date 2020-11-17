import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='secondary' expand='lg'>
        <Navbar.Brand className='text-white' href='/'>
          Comp-Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='text-white' href='/'>
              Posts
            </Nav.Link>
            <Nav.Link className='text-white' href='/create'>
              Create
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
