// import NavbarBrand from 'react-bootstrap/NavbarBrand'
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';
import './Navigation.css'
import { NavDropdown } from 'react-bootstrap'

const naviagation =()=>{
    return(
        <header>
      <Navbar className="navlearn" expand="md">
          <Navbar.Brand> <Link style={{fontSize:'36px', color:'#dcfd1d'}} to='/' > VSI Gift Shop </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="test-app"></Navbar.Toggle>
          <Navbar.Collapse id="test-app"  className="justify-content-end" >
              <Nav >
                  <NavDropdown style={{color:'#dcfd1d'}} active >
                      <NavDropdown.Item><Link to='/product'>Product</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/manageProduct'> Manage Product</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/product'>Log Out</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Link to='/signup'>SIGN UP</Link>
                 <Link to='/signin'>SIGN IN</Link>
                 <Link to='/CONTACT'>CONTACT</Link>
                 <Link to='/aboutus'> ABOUT US</Link>
                 </Nav>
          </Navbar.Collapse>
      </Navbar>
      </header>
    )
}
export default naviagation;