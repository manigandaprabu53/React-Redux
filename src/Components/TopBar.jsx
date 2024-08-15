import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

function TopBar() {

  let locate = useLocation();
  let navigate = useNavigate();

  return <Navbar expand="lg" className="bg-body-tertiary" style={{marginLeft: "10px"}}>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Blogs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}} active={locate.pathname === '/'}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/dashboard')}} active={locate.pathname === '/dashboard'}>DashBoard</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/createpost')}} active={locate.pathname === '/createpost'}>CreatePost</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
}

export default TopBar