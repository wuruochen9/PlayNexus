import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle, faUserFriends, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    function gotoLogin()
    {
        navigate(`/login`);
    }
    return (
    
    <Navbar bg="black" variant="dark" expand="lg">

        <Container fluid>
            <a href="/">
                <img src={"https://raw.githubusercontent.com/fan19-hub/fa23-cs411-team026-LADYS/main/icon.png"} alt="PlayNexus" style={{ height: '60px', marginRight: '5px' }} />
            </a>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px' }}
                    navbarScroll>
                    <NavLink className ="nav-link mx-2" to="/" style={{"color":'lightgrey'}}>Home</NavLink>
                    <NavLink className ="nav-link mx-2" to="/watchList">Watch List</NavLink> 
                    <NavLink className ="nav-link mx-2" to="/login">
                    <div className="menu-button-container" bg="red" style={{"color":'white'}}>
                        <FontAwesomeIcon icon ={faBars}/> Menu
                    </div>     
                    </NavLink>
                </Nav>

                <div className="login-button-container">
                    <Button className="mx-2" onClick={() => gotoLogin()} style={{ backgroundColor: "black", color: "white", border: "none" }}> Login </Button>
                </div>

                <FontAwesomeIcon className="fa-2x mx-2" icon ={faUserCircle} color = "white"/>
                
            </Navbar.Collapse>


        </Container>
    </Navbar>
  )
}

export default Header
