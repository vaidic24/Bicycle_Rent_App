// import React from 'react'
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { useDispatch , useSelector } from 'react-redux';
// import { NavLink, Link } from 'react-router-dom';
// import { signoutcall } from '../../actions/auth.actions';

// export default function Header(props) {

//     const auth = useSelector(state => state.auth);

//     const dispatch = useDispatch();

//     const logout = () => {
//         dispatch(signoutcall());
//     }


//     const signinout = () => {
//         return (
//             <Nav>
//                 {/* <Nav.Link href="#deets"> Signin </Nav.Link> */}
//                 <li className="nav-item">
//                     <NavLink to="/signup" className="nav-link"> Signup </NavLink>
//                 </li>

//                 <li className="nav-item">
//                     <NavLink to="/signin" className="nav-link" > Signin </NavLink>
//                 </li>

//             </Nav>
//         );
//     };

//     const signout = () => {
//         return (
//             <Nav>
//                 {/* <Nav.Link href="#deets"> Signin </Nav.Link> */}
//                 <li className="nav-item">
//                     <span className="nav-link" onClick={logout} > Signout </span>
//                 </li>

//             </Nav>
//         );
//     }

//     return (

//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

//             <Container>
//                 {/* <Navbar.Brand href="home"> Admin-Dashboard </Navbar.Brand> */}
//                 <li>
//                     <Link to='/' className='navbar-brand' > Admin-Dashboard </Link>
//                 </li>

//                 {/* <li>
//                     <Link to='/posts' className='navbar-brand' > Posts </Link>
//                 </li>

//                 <li>
//                     <Link to='/createPost' className='navbar-brand' > Create-Post </Link>
//                 </li> */}

//                 <li>
//                     <Link to='/bicycles' className='navbar-brand' > Bicycles </Link>
//                 </li>
                
//                 <li>
//                     <Link to='/createBicycle' className='navbar-brand' > Create-Bicycle </Link>
//                 </li>

//                 {/* <li>
//                     <Link to='/requests' className='navbar-brand' > All-Requests </Link>
//                 </li> */}
                
//                 <li>
//                     <Link to='/requestedBicycles' className='navbar-brand' > Requested-Bicycles </Link>
//                 </li>

//                 <li>
//                     <Link to='/myBicycles' className='navbar-brand' > Rented-Bicycles </Link>
//                 </li>

                
//                 {/* <li>
//                     <Link to='/returnRequests' className='navbar-brand' > Return-Requests </Link>
//                 </li> */}

                
            
                

                

//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">

//                     <Nav className="me-auto">
//                         {/* <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown> */}
//                     </Nav>

//                     {/* <Nav>
//                         <li className="nav-item">
//                             <NavLink to="/signup" className="nav-link"> Signup </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink to="/signin" className="nav-link" > Signin </NavLink>
//                         </li>
//                     </Nav> */}

//                     { !auth.authenticate ? signinout()
//                     : signout() 
//                     } 


//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>

//     )
// }

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signoutcall } from '../../actions/auth.actions';
import logo from '../assets/logo.png'
import { Button } from 'react-bootstrap';

export default function Header(props) {

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signoutcall());
    }

    return (

        <Navbar bg="dark" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        src={logo}
                    />
                    Bicycle Renting IIITL
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>

                    <NavDropdown title="Bicycles" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/createBicycle">Create Bicycle</NavDropdown.Item>
                        <NavDropdown.Item href="/bicycles">View Bicycles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/myBicycles">
                            Rented Bicycles
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Requests" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/requestedBicycles">My Requests</NavDropdown.Item>
                        <NavDropdown.Item href="/myBicycles">My Bicyles</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className="ml-auto " >
                    <NavLink to="/signup" className="nav-link float-right">
                        {auth.authenticate ? null :
                            <Button variant="outline-light">Signup</Button>}
                    </NavLink>

                    <NavLink to="/signin" className="nav-link float-right" >
                        {auth.authenticate ?
                            <Button variant="danger" onClick={logout}>Logout</Button> :
                            <Button variant="success">Login</Button>
                        }

                    </NavLink>
                </Nav>
            </Container>
        </Navbar>

    )
}
