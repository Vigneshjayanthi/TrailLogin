import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';
import './Navigation.css'
import { NavDropdown } from 'react-bootstrap'




const naviagation =()=>{
    return(
        <header>
      <NavBar className="navlearn" expand="md">
          <NavbarBrand><Link to='/'>Test App</Link></NavbarBrand>
          <NavbarToggle aria-controls="test-app"></NavbarToggle>
          <NavbarCollapse id="test-app"  className="justify-content-end" >
              <Nav >
                  <NavDropdown title="Details" active>
                      <NavDropdown.Item><Link to='/product'>Product</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/manageProduct'> Manage Product</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/product'>Log Out</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Link to='/signup'>Sign Up</Link>
                 <Link to='/signin'>Sign in</Link>
                 </Nav>
          </NavbarCollapse>
      </NavBar>
      </header>
    )
}
export default naviagation;