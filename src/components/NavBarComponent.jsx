// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';

// function NavBarComponent({activeUser, onLogout}) {
//     return (
//         <div className="c-navbar">
//             <Navbar bg="light" expand="lg">
//                 <Container>
//                     <Navbar.Brand href="#/">Happy App</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto">
//                             {activeUser ? <Nav.Link href="#/">Home</Nav.Link> : null}
//                         </Nav>
//                         <Nav className="me-auto">
//                             {activeUser ? <Nav.Link href="#/solutions">Solutions</Nav.Link> : null}
//                         </Nav>
//                         <Nav className="me-auto">
//                             {(activeUser.role=='admin' || activeUser.role=='Admin') ? <Nav.Link href="#/graphs">Show Graphs</Nav.Link> : null}
//                         </Nav>
//                         <Nav className="ms-auto">
//                             {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
//                             {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
//                             {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>       
//         </div>
//     );
// }

// export default NavBarComponent;