import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faPlus, faSearch, faEdit, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
 

class NavBarMenu extends Component{
    render() {
        return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            localStorage.getItem("login") ?
                            <>
                                <Nav.Link href="#home"><Link to="/">
                                <FontAwesomeIcon icon={faHome} />Home</Link>
                                </Nav.Link>

                                <Nav.Link href="#link">
                                     <Link to="/add_list">
                                 <FontAwesomeIcon icon={faList} />Add New List</Link>
                                 </Nav.Link>

                                <Nav.Link href="#link"><Link to="/search_function">
                                <FontAwesomeIcon icon={faSearch} />Search Using Function</Link>
                                </Nav.Link>
 
                                <Nav.Link href="#link"><Link to="/update/undefiend">
                                <FontAwesomeIcon icon={faEdit} />List-Update</Link>
                                </Nav.Link>

                                <Nav.Link href="#link"><Link to="/logout_list">
                                <FontAwesomeIcon icon={faUser} />Logout</Link>
                                </Nav.Link>

                                </>
                                :
                                <>

                                <Nav.Link href="#link"><Link to="/login_list">
                                <FontAwesomeIcon icon={faUser} />Login</Link>
                                </Nav.Link>

                                <Nav.Link href="#link"><Link to="/register">
                                <FontAwesomeIcon icon={faUsers} />Register</Link>
                                </Nav.Link>

                                </>
                                }
                             </Nav> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default NavBarMenu;